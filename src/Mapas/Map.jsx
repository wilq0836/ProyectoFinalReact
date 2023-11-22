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
      style={{ Width: 450, height: 400, marginLeft:5, marginRight:5}}
      ref={containerRef}
    />
  );


}