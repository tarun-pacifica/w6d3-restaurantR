var map;
var canvas;

var display_map = function (lat, long, zoom) {

  canvas = $('#map_canvas')[0];

  if (! canvas)
    return; // I QUIT

  var mapOptions = {
    center: new google.maps.LatLng(lat, long),
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(canvas, mapOptions);
};

  var add_marker = function (lat, long, title) {
  var latlng = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({position: latlng, map: map, title: title});
};

$(document).ready(function () {
  display_map(-33.89336, 151.217167, 13);
});

$(document).ready(function () {

var create_restaurant = function () {
    var name = $('#name').val();
    var cuisine = $('#cuisine').val();
    var address = $('#address').val();
    var restaurant_id= $('#restaurant_id').val();
    var token = $('authenticity_token').val();


    $.ajax({
      dataType: 'json',
      type: 'POST',
      url: '/restaurants',
      data: {
        'authenticity_token': token,
        restaurant: {
        'name': name,
        'cuisine': cuisine,
        'address': address
        // 'restaurant_id': restaurant_id,
      }
    }
  }).done(display_restaurant);

    return false;
  };

var display_restaurant = function (restaurant) {
  var $li0 = $('<li/>').addClass('restaurant_id invisible');
  var $li1 = $('<li/>').addClass('name');
  var $li2 = $('<li/>').addClass('cuisine');
  var $li3 = $('<li/>').addClass('address');

  var $li  = $('<li/>');
  var $ul = $('<ul/>');

    $li0.text(restaurant.id);
    $li1.text(restaurant.name);
    $li2.text(restaurant.cuisine);
    $li3.text(restaurant.address);

    $ul.append([$li0,$li1, $li2, $li3]);
    $('#restaurants').append($ul);

    add_marker(restaurant.latitude, restaurant.longitude, restaurant.name);
}




$('#create_restaurant').click(create_restaurant);

  });
