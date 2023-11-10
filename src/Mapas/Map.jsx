import { MapWidget } from "./MapWidge"

import { useRef, useEffect } from 'react';

export const Map =({ zoomLevel })=>{

  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  return (
    <div 
      style={{ maxWidth: 400, height: 300, marginLeft:20}}
      ref={containerRef}
    />
  );


}