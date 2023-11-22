
import { Link} from "react-router-dom";
import { useContext } from "react";
import { MostrarBoton } from "./Boton";
import { CarContext } from "../Context/CarContext";


export const Targeta = ({valorSeleccionadoLista, propiedad})=>{

  const {AgregarCarrito} = useContext(CarContext);
 
  const imprimirTarjeta =(valor)=>{

     
    return( 
  
       
    <div className="container2">{
      
      valor.map((item) => 
  
      <div className="container3" key = {item.id}>     
        <div  className = "card m-3 p-3" >  
              <img  className = "card-img-top" src={(item.foto)} alt={item.modelo}/>
          
            <div className="card-body" >     
                <h5>ID: {item.id} </h5>               
                <h5>Marca: {item.marca} </h5>
                <h5>Modelo: {item.modelo }</h5>
                <h5>Precio: {item.precio}</h5>
                <h5>Especificación: {item.especificacion}</h5> 
                <h5>Cantidad: {item.cantidad}</h5>  
            </div>   
            <hr></hr>
              <button className="btn btn-secondary" onClick={()=>AgregarCarrito(item, 1)} >Agregar Carrito</button>  
              <hr></hr>
               <Link className="btn btn-primary" to={'/Carrito'} >Ver Carrito</Link>  
               <hr></hr>
               {MostrarBoton(propiedad, item)}
               
               <hr></hr>  
                               
            </div>
            
            </div>  
   
  
    )}</div>

    )
  
  }      
  

  return ( 
    imprimirTarjeta(valorSeleccionadoLista)
    
    )  
 
       
} 
 
