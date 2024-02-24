function initMap() {
    // Map center & zoom
    var options = {
        center: {lat: 43.66090177575299, lng: -79.39639225889357},
        zoom: 15
    }

    // Create new map
    map = new google.maps.Map(document.getElementById(`map`),options)






    // Listen for click on map location
    google.maps.event.addListener(map, "click", (event) => {
        addMarker({location:event.latLng});
    });





    
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
    MarkerArray = [{location: {lat: 43.665213685270665, lng: -79.3955855605278}, imageIcon: "https://github.com/PakmanGames/Stroom-Google-Maps-API/blob/main/YouAreHere50x50noBg.png?raw=true", 
    content: `<h3>Library</h3>`},
    
    {location: {lat: 43.66634369277465, lng: -79.39122269931296}}]

    // Loop through markers
    for (let i = 0; i < MarkerArray.length; i++) {
        addMarker(MarkerArray[i]);
    }
}