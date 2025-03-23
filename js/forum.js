class ForumManager {
    constructor() {
        this.posts = [];
        this.currentUser = null;
        this.init();
    }

    async init() {
        await this.loadPosts();
        this.setupEventListeners();
        this.renderPosts();
    }

    async loadPosts() {
        // In a real app, this would be an API call
        this.posts = [
            {
                id: 1,
                title: "Innovative Solar Panel Design",
                content: "I've developed a new approach to solar panel installation...",
                author: "Jane Smith",
                category: "energy",
                votes: 45,
                comments: 12,
                timestamp: new Date()
            },
            // More posts...
        ];
    }

    renderPosts() {
        const container = document.querySelector('.forum-posts');
        container.innerHTML = this.posts.map(post => this.createPostHTML(post)).join('');
    }

    createPostHTML(post) {
        return `
            <div class="forum-post" data-id="${post.id}">
                <div class="post-header">
                    <h3>${post.title}</h3>
                    <div class="post-stats">
                        <span>👍 ${post.votes}</span>
                        <span>💬 ${post.comments}</span>
                    </div>
                </div>
                <p>${post.content}</p>
                <div class="post-footer">
                    <span class="author">By ${post.author}</span>
                    <span class="timestamp">${this.formatDate(post.timestamp)}</span>
                </div>
            </div>
        `;
    }

    formatDate(date) {
        return new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
            .format(Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24)), 'day');
    }

    setupEventListeners() {
        document.querySelector('.new-post-btn').addEventListener('click', () => {
            if (this.currentUser) {
                this.showNewPostModal();
            } else {
                this.showLoginPrompt();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const forum = new ForumManager();
});