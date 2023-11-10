import React from "react";
import { Targeta } from "../Tarjeta/Tarjeta";
import { FiltrarArticulos } from "./FiltrarArticulos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ConstructorProductos({titulo, propiedad}){

    
    const [productos, setProductos] = useState([]);
    const marca = useParams().marca;

    
    useEffect(()=>{
        
        FiltrarArticulos(marca)
        .then((res)=>{
            setProductos(res);  
                    
            
        })
    },[marca])


    return(
        
            <Targeta valorSeleccionadoLista={productos}></Targeta>
       
    )
    
    


}export default ConstructorProductos;

