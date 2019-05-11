import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  let map = null;
  const mapContainer = React.createRef();

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoidG9ib2Noa2EiLCJhIjoiY2p2azJoNDQ4MGtxOTN5cW1yNmxmc3BleSJ9.mNLvfhUFoh2eIU7-e-C4cA';
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.2656504, 59.8029126],
      zoom: 15
    });
    map.addControl(new mapboxgl.FullscreenControl());

    return function cleanup() {
      map.remove();
    };
  });

  return <div ref={mapContainer} />;
};

export default Map;
