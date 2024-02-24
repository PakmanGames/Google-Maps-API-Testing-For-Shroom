function initMap() {
    // Map center & zoom
    var options = {
        center: {lat: 43.66090177575299, lng: -79.39639225889357},
        zoom: 15
    }

    // Create new map
    map = new google.maps.Map(document.getElementById(`map`),options)

    // Marker
    const marker = new google.maps.Marker({
        position:{lat: 43.66090177575299, lng: -79.39639225889357},
        map:map,
        icon:"https://github.com/PakmanGames/Stroom-Google-Maps-API/blob/main/YouAreHere50x50.jpg?raw=true"
    });
}