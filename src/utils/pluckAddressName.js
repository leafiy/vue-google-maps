const pluckAddressName = (place) => {
  let address = {}
  place.address_components.forEach(element => {
    address[element.types[0]] = element.long_name;
  });
  place.address = address
  return place
}

export default pluckAddressName