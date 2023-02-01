//
// map.js
//

import mapboxgl from 'mapbox-gl';

const maps = document.querySelectorAll('[data-map]');
const accessToken = 'pk.eyJ1Ijoiam0xOTkiLCJhIjoiY2s4cDAyc3lqMDA2MjNlbzN4NmpxYW4xMiJ9.wvD_eKRXX2kzgs44yaUklg'; // replace this with your own token

maps.forEach((map) => {
  const elementOptions = map.dataset.map ? JSON.parse(map.dataset.map) : {};

  const defaultOptions = {
    container: map,
    style: 'mapbox://styles/mapbox/light-v9',
    scrollZoom: false,
    interactive: false,
  };

  const options = {
    ...defaultOptions,
    ...elementOptions,
  };

  // Get access token
  mapboxgl.accessToken = accessToken;

  // Init map
  var instance = new mapboxgl.Map(options);

  // Create a marker
  new mapboxgl.Marker().setLngLat(options?.center).addTo(instance);
});
