$(document).ready(function() {

  var styles = [
    {
      stylers: [
        { hue: "#890000" },
        { saturation: -20 },
        { visibility: 'simplified' },
        { gamma: 0.5 },
        { weight: 0.5 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        { invert_lightness: false },
        { gamma: 1 },
        { visibility: "simplified" },
        { weight: 1.2 }
      ]
    },{
      featureType: 'water',
      stylers: [
        { color: '#890000' }
      ]
    }
  ]
  map.setOptions({styles: styles});

  // marker = new google.maps.Marker({
  //   map:map,
  //   draggable:true,
  //   animation: google.maps.Animation.DROP,
  //   position: center
  // });
  // google.maps.event.addListener(marker, 'click', toggleBounce);

});