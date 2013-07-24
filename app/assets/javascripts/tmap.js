$(document).ready(function() {

  var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
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
        { invert_lightness: true },
        { gamma: 1 },
        { visibility: "simplified" },
        { weight: 1.2 }
      ]
    }
  ]
  map.setOptions({styles: styles});

});