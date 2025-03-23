class LiveTicker {
    constructor() {
        this.tickerContainer = document.querySelector('.ticker-container');
        this.ideas = [
            {
                title: "Solar-Powered Urban Gardens",
                author: "Jane Smith",
                timestamp: "2 minutes ago"
            },
            {
                title: "Community Recycling Network",
                author: "John Doe",
                timestamp: "5 minutes ago"
            },
            {
                title: "Electric Vehicle Sharing Program",
                author: "Alice Johnson",
                timestamp: "10 minutes ago"
            }
        ];
    }

    createTickerItem(idea) {
        return `
            <div class="ticker-item">
                <h3>${idea.title}</h3>
                <p>by ${idea.author}</p>
                <span class="timestamp">${idea.timestamp}</span>
            </div>
        `;
    }

    updateTicker() {
        this.tickerContainer.innerHTML = this.ideas
            .map(idea => this.createTickerItem(idea))
            .join('');
    }

    init() {
        this.updateTicker();
        setInterval(() => this.updateTicker(), 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const ticker = new LiveTicker();
    ticker.init();
});