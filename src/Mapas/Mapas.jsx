import { useState } from "react";
import { Map } from "./Map";

export default function Mapas() {
    const [zoomLevel, setZoomLevel] = useState(0);
    return (
        <div className="container10">
            
        <img style={{marginTop:20, marginRight:10, marginLeft:10 ,width:800,height: 900,marginBottom:20}} src={require("../img/pexels-dylan-howell-1443527.jpg")} alt={"img2"}/>
  
     
      <div className="mapa" style={{  marginTop: 20, marginRight:10, fontFamily:"cursive", borderRadius:10, backgroundColor: "white", width:440, height:470}}>  
        <h2 style={{marginLeft: 70}}>Explorador de Rutas</h2>
       
        <div style={{display:"flex",  backgroundColor:" #83ec6ead", fontFamily:"cursive", width:"auto", marginLeft:60,marginRight:55, marginTop:20, marginBottom: 20}}>
          <button className="btn btn-primary" onClick={() => setZoomLevel(zoomLevel - 1)} >-</button>
           <h3 style={{marginLeft: 10, marginRight:10}}> Nivel de Zoom: {zoomLevel}x </h3>
            <button className="btn btn-primary"  onClick={() => setZoomLevel(zoomLevel + 1)} >+</button>
             </div>
       
           <Map zoomLevel={zoomLevel} />
           <img style={{borderRadius:10, marginTop:70, marginRight:10, marginLeft:10 ,width:430,height: 415,marginBottom:20}} src={require("../img/pexels-dylan-howell-1443527.jpg")} alt={"img2"}/>
             </div>
             
        </div>
    );
  }