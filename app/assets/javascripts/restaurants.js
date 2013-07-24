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


var update_restaurant = function () {
    var restaurant_id = $('#restaurant_id').val();
    var name = $('#name').val();
    var cuisine = $('#cuisine').val();
    var address = $('#address').val();
    var token = $('authenticity_token').val();

$.ajax({
      dataType: 'json',
      type: 'POST',
      url: '/restaurants' + restaurant_id,
      data: {
        '_method': 'put',
        'authenticity_token': token,
        restaurant: {
        'name': name,
        'cuisine': cuisine,
        'address': address
      }
    }
  }).done(display_restaurant);

    return false;
  };

var edit_restaurant = function () {

  //   if ($('.form').is(':hidden')){
  //     toggle_form();
  // }
  //   $('#create_task').hide();
  //   $('#update_task').show();

    $('#name').focus();


    var $ul = $(this).closest('ul');


    var id = $ul.find('.restaurant_id').text();
    var name = $ul.find('.name').text();
    var cuisine = $ul.find('.cuisine').text();
    var address = $ul.find('.address').text();

    $('#restaurant_id').val(id);
    $('#name').val(name);
    $('#cuisine').val(cuisine);
    $('#address').val(address);
  };





$('#create_restaurant').click(create_restaurant);
$('#update_restaurant').click(update_restaurant);
$('#restaurants').on('click','button', edit_restaurant);

  });
