// Document created by Maeve Meyers <maeve@mystria.fr> | 07/10/2020 \\

let NAME = 'Know Your Location'
let VERSION = 0.2

console.log(NAME + ' - ' + VERSION)

tt.setProductInfo(NAME, VERSION);
let map = tt.map({
  key: 'Ca3iWIxE2ZiRJXxagZsreVRhws0cXphE',
  container: 'map',
  style: 'tomtom://vector/1/basic-main',
  center: [-122.478468, 37.769167],
  zoom: 15
});

let trafficLayerConfig = {
  key: 'Ca3iWIxE2ZiRJXxagZsreVRhws0cXphE',
  refresh: 30000
}

let trafficIncidentsConfig = {
  key: 'Ca3iWIxE2ZiRJXxagZsreVRhws0cXphE',
  incidentDetails: false,
  incidentTitles: true
}

map.on('load', function() {
  map.addTier(new tt.TrafficFlowTilesTier(trafficLayerConfig))
  map.addTier(new tt.TrafficIncidentTier(trafficIncidentsConfig))
})

let marker = new tt.Marker().setLngLat([-122.478468, 37.769167]).addTo(map)
marker.setPopup(new tt.Popup().setHTML('You are ICI'))