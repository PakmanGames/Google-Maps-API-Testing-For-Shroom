var map; // Initialize map variable

// Initialize the map
function initMap() {
    // Grab the user's location
    x = navigator.geolocation;
    // If the user's location is successfully grabbed, the success function is called
    x.getCurrentPosition(success, failure, { enableHighAccuracy: true });

    // Sets the center of the map to be where the user is located
    function success(position) {
        // Grab the user's latitude and longitude based on Wifi Access Point
        var myLat = position.coords.latitude;
        var myLong = position.coords.longitude;

        // Map center & zoom
        var options = {
            center: {lat: myLat, lng: myLong}, // Set map center to user's location
            zoom: 15, // Default zoom
            mapId: "7219d2cdaaaa0b81", // Custom map style ID
            minZoom: 13, // Minimum zoom
            maxZoomL: 15.1 // Maximum zoom
        }

        // Create new map
        map = new google.maps.Map(document.getElementById(`map`),options)

        var coords = {lat: myLat, lng: myLong}; // Initialize coords object with lat and lng properties
        // Add marker for user's location with custom marker icon and detail window content
        addMarker({location: {lat: myLat, lng: myLong}, 
        imageIcon: "https://github.com/PakmanGames/Stroom-Google-Maps-API/blob/main/YouAreHere50x50noBg.png?raw=true", 
        content: `<h3>You are here!</h3>`});
    }

    // If the user's location is not successfully grabbed, the failure function is called
    function failure() {
        var myLat = 43.66088234260811;
        var myLong = -79.39609722039485;

        // Map center & zoom
        var options = {
            center: {lat: myLat, lng: myLong}, // Set map center to user's location
            zoom: 15, // Default zoom
            mapId: "7219d2cdaaaa0b81", // Custom map style ID
            minZoom: 13, // Minimum zoom
            maxZoomL: 15.1 // Maximum zoom
        }

        // Create new map
        map = new google.maps.Map(document.getElementById(`map`),options)

    var coords = {lat: myLat, lng: myLong}; // Initialize coords object with lat and lng properties
    // Add marker for default location and create detail window content
    addMarker({location: {lat: myLat, lng: myLong}, 
    content: `<h3>Default Location</h3>`});
    }

    // Add multiple markers with custon icons / content
    function addMarker(property) {
        // Create new marker with custom icon and content
        const marker = new google.maps.Marker({
        position: property.location,
        map: map,
        icon: property.imageIcon
        }); 

        // If the marker has an icon, set the icon to the custom icon
        if (property.imageIcon) {
            marker.setIcon(property.imageIcon);
        }

        // If the marker has content, create a new detail window with the content
        const detailWindow = new google.maps.InfoWindow({
            content: property.content
        });

        // If the marker is clicked, open the detail window
        marker.addListener("click", () => {
            detailWindow.open(map, marker);
        });
    }
}