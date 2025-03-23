class AuthManager {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        this.checkAuthStatus();
        this.setupAuthListeners();
    }

    checkAuthStatus() {
        const token = localStorage.getItem('auth_token');
        if (token) {
            this.validateToken(token);
        }
    }

    async validateToken(token) {
        try {
            // In a real app, this would verify with your backend
            const response = await fetch('/api/auth/validate', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                this.currentUser = await response.json();
                this.updateUI();
            }
        } catch (error) {
            console.error('Auth validation failed:', error);
            this.logout();
        }
    }

    async login(credentials) {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('auth_token', data.token);
                this.currentUser = data.user;
                this.updateUI();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.currentUser = null;
        this.updateUI();
    }

    updateUI() {
        const authButtons = document.querySelector('.auth-buttons');
        if (this.currentUser) {
            authButtons.innerHTML = `
                <div class="user-menu">
                    <img src="${this.currentUser.avatar}" alt="Profile" class="avatar">
                    <span>${this.currentUser.name}</span>
                    <button class="logout-btn">Logout</button>
                </div>
            `;
        } else {
            authButtons.innerHTML = `
                <button class="login-btn">Login</button>
                <button class="signup-btn">Sign Up</button>
            `;
        }
    }

    setupAuthListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.login-btn')) {
                this.showLoginModal();
            } else if (e.target.matches('.signup-btn')) {
                this.showSignupModal();
            } else if (e.target.matches('.logout-btn')) {
                this.logout();
            }
        });
    }
}