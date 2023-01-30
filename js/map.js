    var map;
    var marker;
    var markerCoords;

    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -16.657622699209597, lng: -68.29686080988427},
        zoom: 8
      });

      map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
      });
    }

    function placeMarkerAndPanTo(latLng, map) {
      if(marker) {
        marker.setMap(null);
      }

      marker = new google.maps.Marker({
        position: latLng,
        map: map
      });

      map.panTo(latLng);
      markerCoords = latLng;

      console.log(markerCoords.lat() + " " + markerCoords.lng())
    }
