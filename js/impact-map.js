class ImpactMap {
    constructor() {
        this.map = null;
        this.markers = [];
        this.init();
    }

    async init() {
        await this.loadMapScript();
        this.initializeMap();
        await this.loadImpactData();
        this.setupFilters();
    }

    async loadMapScript() {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
            script.onload = resolve;
            document.head.appendChild(script);
        });
    }

    initializeMap() {
        this.map = new google.maps.Map(document.getElementById('impact-map'), {
            zoom: 2,
            center: { lat: 0, lng: 0 },
            styles: this.getMapStyles()
        });
    }

    async loadImpactData() {
        try {
            // In a real app, this would be an API call
            const data = [
                {
                    id: 1,
                    title: "Solar Farm Initiative",
                    location: { lat: 40.7128, lng: -74.0060 },
                    category: "energy",
                    impact: "Reduced CO2 emissions by 1000 tons",
                    status: "active"
                },
                // More impact points...
            ];
            this.addMarkersToMap(data);
        } catch (error) {
            console.error('Failed to load impact data:', error);
        }
    }

    addMarkersToMap(data) {
        data.forEach(point => {
            const marker = new google.maps.Marker({
                position: point.location,
                map: this.map,
                title: point.title,
                icon: this.getMarkerIcon(point.category)
            });

            const infoWindow = new google.maps.InfoWindow({
                content: this.createInfoWindowContent(point)
            });

            marker.addListener('click', () => {
                infoWindow.open(this.map, marker);
            });

            this.markers.push({ marker, data: point });
        });
    }

    createInfoWindowContent(point) {
        return `
            <div class="impact-info">
                <h3>${point.title}</h3>
                <p>${point.impact}</p>
                <span class="status ${point.status}">${point.status}</span>
            </div>
        `;
    }

    setupFilters() {
        document.getElementById('category-filter').addEventListener('change', (e) => {
            this.filterMarkers(e.target.value);
        });
    }

    filterMarkers(category) {
        this.markers.forEach(({ marker, data }) => {
            marker.setVisible(category === 'all' || data.category === category);
        });
    }
}