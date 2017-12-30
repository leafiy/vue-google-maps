"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pluckAddressName = function pluckAddressName(place) {
  var address = {};
  place.address_components.forEach(function (element) {
    address[element.types[0]] = element.long_name;
  });
  place.address = address;
  return place;
};

exports.default = pluckAddressName;