
import { useState } from "react";
import {  useContext} from "react";
import { CarContext } from "../Context/CarContext";
import { Link } from "react-router-dom";
import { ContadorProdutos } from "../ComponentesContador/ComponenteContador";


export const ItemDetails =({itemEntregado})=>{
    
     
    const nuevoArreglo = [{...itemEntregado}];
 
    const [cantidad, setCantidad ] = useState(0);
    const { AgregarCarrito} = useContext(CarContext);


    

    return(
    <div className="container4">

       {  nuevoArreglo.map((i)=> 
        <div id="cardItemid" className="card m-4 p-4"  key = {i.id}>
         <img key = {i.id} id="cardImg" className = "card" src={(i.foto)} alt={i.modelo}/>
         <br></br>
        <h5>Id: {i.id}</h5>
        <h5>Marca: {i.marca}</h5>
        <h5>Modelo: {i.modelo}</h5>
        <h5>Precio: {i.precio}</h5>
        <h5>Cantidad: {i.cantidad}</h5>
        <h5>Agregar al carrito: {cantidad}</h5> 
        
        <ContadorProdutos arreglo ={nuevoArreglo} stock={10} AgregarCarrito = {AgregarCarrito} cantidad={(c)=>{console.log("Cantidad Agregada" + c); setCantidad(c); }} />
        <Link  id = "verCarrito"className="btn btn-primary" to={'/Carrito'} >Ver Carrito</Link>  
        
        </div>
        )
       }
       
      
     </div>


    )

}