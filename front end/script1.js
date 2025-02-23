console.log("Script loaded successfully");

window.onload = function () {
    console.log("✅ Window fully loaded!");

    let mapContainer = document.getElementById("map");
    let trackingInfo = document.getElementById("trackingInfo");

    if (!mapContainer) {
        console.error("❌ ERROR: 'map' element NOT found in the document!");
        return;
    } else {
        console.log("✅ SUCCESS: 'map' element found!");
    }

    if (!trackingInfo) {
        console.error("❌ ERROR: 'trackingInfo' element NOT found in the document!");
        return;
    } else {
        console.log("✅ SUCCESS: 'trackingInfo' element found!");
    }

    if (typeof L === "undefined") {
        console.error("❌ ERROR: Leaflet.js library is NOT loaded!");
        return;
    } else {
        console.log("✅ SUCCESS: Leaflet.js library is loaded!");
    }

    console.log("🌍 Initializing map...");
    let map = L.map('map').setView([37.7749, -122.4194], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    let marker = L.marker([37.7749, -122.4194]).addTo(map)
        .bindPopup("<b>Vehicle Location</b><br>Current Speed: 60 km/h")
        .openPopup();

    function updateTrackingDetails() {
        let newLat = 37.7749 + (Math.random() - 0.5) * 0.01;
        let newLng = -122.4194 + (Math.random() - 0.5) * 0.01;
        let speed = Math.floor(Math.random() * 20) + 50; // Speed between 50-70 km/h

        let currentTime = new Date().toLocaleString();
        let estimatedArrival = new Date(Date.now() + Math.random() * 10000000).toLocaleString();

        marker.setLatLng([newLat, newLng]);
        map.setView([newLat, newLng], 12);

        trackingInfo.innerHTML = `
            <h3>Live Tracking Details</h3>
            <p><strong>Updated Position:</strong> (${newLat.toFixed(4)}, ${newLng.toFixed(4)})</p>
            <p><strong>Speed:</strong> ${speed} km/h</p>
            <p><strong>Current Time:</strong> ${currentTime}</p>
            <p><strong>Estimated Arrival:</strong> ${estimatedArrival}</p>
            <p><strong>Weather:</strong> ${getRandomWeather()}</p>
        `;
    }

    updateTrackingDetails(); // Initial update
    setInterval(updateTrackingDetails, 5000);

    function getRandomWeather() {
        let conditions = ["Sunny, 25°C", "Cloudy, 22°C", "Rainy, 18°C", "Stormy, 20°C"];
        return conditions[Math.floor(Math.random() * conditions.length)];
    }

    console.log("✅ Map initialized successfully.");
};
