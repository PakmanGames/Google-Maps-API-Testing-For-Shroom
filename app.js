var map;

function initMap() {
    // Grab the user's location
    x = navigator.geolocation;
    x.getCurrentPosition(success, failure, { enableHighAccuracy: true });

    // If the user's location is successfully grabbed, the success function is called
    function success(position) {
        var myLat = position.coords.latitude;
        var myLong = position.coords.longitude;

        // Map center & zoom
        var options = {
            center: {lat: myLat, lng: myLong},
            zoom: 15,
            mapId: "7219d2cdaaaa0b81"
        }
        // Create new map
        map = new google.maps.Map(document.getElementById(`map`),options)

    var coords = {lat: myLat, lng: myLong}; // Initialize coords object with lat and lng properties
    addMarker({location: {lat: myLat, lng: myLong}, imageIcon: "https://github.com/PakmanGames/Stroom-Google-Maps-API/blob/main/YouAreHere50x50noBg.png?raw=true", 
    content: `<h3>You are here!</h3>`});
    }

    function failure() {}



    // Listen for click on map location
    google.maps.event.addListener(map, "click", (event) => {
        addMarker({location:event.latLng});
    });




    /*
    // Marker
    const marker = new google.maps.Marker({
        position:{lat: 43.66090177575299, lng: -79.39639225889357},
        map:map,
        icon:"https://github.com/PakmanGames/Stroom-Google-Maps-API/blob/main/YouAreHere50x50noBg.png?raw=true"
    });

    const detailWindow = new google.maps.InfoWindow({
        content: `<h3>You are here!</h3>`
    });
    marker.addListener("click", () =>{
        detailWindow.open(map, marker);
    })
    //
    */



    // Add multiple markers with custon icons / content
function addMarker(property) {
    const marker = new google.maps.Marker({
     position: property.location,
     map: map,
     icon: property.imageIcon
    }); 

    if (property.imageIcon) {
     marker.setIcon(property.imageIcon);
    }

    const detailWindow = new google.maps.InfoWindow({
     content: property.content
    });

    marker.addListener("click", () => {
     detailWindow.open(map, marker);
    });
 }

 // Array to store the markers
 MarkerArray = [{location: {lat: 43.665213685270665, lng: -74.3955855605278}, imageIcon: "https://github.com/PakmanGames/Stroom-Google-Maps-API/blob/main/YouAreHere50x50noBg.png?raw=true", 
 content: `<h3>Library</h3>`},
 
 {location: {lat: 43.66634369277465, lng: -79.39122269931296}}]

 // Loop through markers
 for (let i = 0; i < MarkerArray.length; i++) {
     addMarker(MarkerArray[i]);
 }
}