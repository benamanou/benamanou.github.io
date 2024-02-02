let mapOptions = {
  center:[50.6409,5.5686],
  zoom:14
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png');
map.addLayer(layer);

L.tileLayer.provider('CartoDB.Voyager').addTo(map);

let customIcon = {
  iconUrl:"https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/external-pin-maps-navigation-kmg-design-outline-color-kmg-design-1.png",
  iconSize:[45,45]
 }

let myIcon = L.icon(customIcon);

let iconOptions = {
  title: "company name",
  draggable:true,
  icon:myIcon
}

var marker = new L.marker([50.6446,5.5891], iconOptions).addTo(map);

var marker = L.marker([50.6409,5.5822], iconOptions).addTo(map);

var marker = L.marker([50.6421,5.5748], iconOptions).addTo(map);

var marker = L.marker([50.6345,5.5625], iconOptions).addTo(map);
marker.bindPopup('Banque alimentaire').openPopup();

var marker = L.marker([50.6283,5.5764], iconOptions).addTo(map);
marker.bindPopup('Refuge').openPopup();

var marker = L.marker([50.6230,5.5879], iconOptions).addTo(map);
marker.bindPopup('Volontaires recherchés').openPopup();