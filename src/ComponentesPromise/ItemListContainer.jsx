import React from "react";
import { useEffect, useState } from "react";
import getProducts from "./ObtenerProductos";
import { Targeta } from "../Tarjeta/Tarjeta";


const ItemLisContainer=({greeting})=>{
    
    

    const[products, setproducts] = useState([]);
   
    useEffect(()=>{
        getProducts()
        .then(response =>{
            setproducts(response)
            
        })
        .catch( error=> {console.error(error)
        })
       
        
    },[])
   

            

    return(
     
       
        <Targeta valorSeleccionadoLista={products} propiedad={"fetch"}></Targeta>
        
    )

}
export default ItemLisContainer;