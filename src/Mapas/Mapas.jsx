import { useState } from "react";
import { Map } from "./Map";

export default function Mapas() {
    const [zoomLevel, setZoomLevel] = useState(0);
    return (
        <div className="container10">
            
        <img style={{marginTop:20, marginRight:10, marginLeft:10 ,width:900,height: 900,marginBottom:20}} src={require("../img/fondo 2.jpg")} alt={"img2"}/>
  
     
      <div className="mapa" style={{  marginTop: 20, marginRight:10, fontFamily:"cursive", borderRadius:10, backgroundColor: " #3b3939", width:440, height:570}}>  
        <h2 style={{marginLeft: 70,color:"white"}}>Explorador de Rutas</h2>
       
        <div style={{display:"flex", color:"white", backgroundColor:" #3b3939", fontFamily:"cursive", marginLeft:60,marginRight:55, marginTop:20, marginBottom: 20}}>
          <button className="btn btn-primary" onClick={() => setZoomLevel(zoomLevel - 1)} >-</button>
           <h3 style={{marginLeft: 10, marginRight:10}}> Nivel de Zoom: {zoomLevel}x </h3>
            <button className="btn btn-primary"  onClick={() => setZoomLevel(zoomLevel + 1)} >+</button>
             </div>
       
           <Map zoomLevel={zoomLevel} />
           <img style={{borderRadius:10, marginTop:30, marginRight:5, marginLeft:5 ,width:429,height: 325,marginBottom:20}} src={require("../img/fondo 3.jpg")} alt={"img2"}/>
             </div>
             
        </div>
    );
  }