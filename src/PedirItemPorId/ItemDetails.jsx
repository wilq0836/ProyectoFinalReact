
import { useState } from "react";
import {  useContext} from "react";
import { CarContext } from "../Context/CarContext";
import { Link } from "react-router-dom";
import { ContadorProductos } from "../ComponentesContador/ComponenteContador";


export const ItemDetails =({itemEntregado})=>{
    
     
    const nuevoArreglo = [{...itemEntregado}];
    const nuevoArreglo2 = itemEntregado;
 
    const [cantidad, setCantidad ] = useState(0);
    const { AgregarCarrito} = useContext(CarContext);
    

    const [imag , setImag] = useState(require("../img/F12.imagen.jpg"));

   

    const handleImg = (e)=>{
      setImag(e)
      
    }

    const handleImgen =(e)=>{
      setImag(e)

    }

    

    return(


    <div className="container4">
         <div className="container-tab" >
           
         { nuevoArreglo.map((i)=>
                <div className="container-tabindex">
                   <div className="imagetab"  onClick={()=>handleImg(i.foto)}>  <img className="imagentab" src={(i.foto)} alt=""/></div>
                   <div className="imagetab"  onClick={()=>handleImg(i.foto2)}> <img className="imagentab" src={(i.foto2)} alt=""/></div>
                   <div className="imagetab"  onClick={()=>handleImg(i.foto3)}> <img className="imagentab" src={(i.foto3)} alt=""/></div>
                   <div className="imagetab"  onClick={()=>handleImg(i.foto4)}> <img className="imagentab" src={(i.foto4)} alt=""/></div>
                   <div className="imagetab"  onClick={()=>handleImg(i.foto5)}> <img className="imagentab" src={(i.foto5)} alt=""/></div>
                   <div className="imagetab"  onClick={()=>handleImg(i.foto6)}> <img className="imagentab" src={(i.foto5)} alt=""/></div>
                 </div>
            )}
            
         </div>


            {  nuevoArreglo.map((i)=> 
           
               <div    id="cardItemid" className="containerdetalles" >

                   <div    id="carouselExampleFade" className="carousel slide" style={{marginLeft:40}} >
              
                      <div   className="carousel-inner">
                         <div   className="carousel-item active">                
                           <img  className = "card-img"  id="carousel-item"    src={(imag)} alt={i.modelo} />
                           </div>                          
                     </div>

                       <button  onClick={()=>handleImgen( i.foto)} style={{ backgroundColor:"rgba(212, 73, 30, 0.363)"}} className="carousel-control-prev">
                        <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
                          </button>

                         <button    onClick={()=>handleImgen( i.foto2)}  style={{ backgroundColor:"rgba(212, 73, 30, 0.363)"}} className="carousel-control-next">
                            <span  className="carousel-control-next-icon" aria-hidden="true"></span>
                             </button>             
                  </div>
                  <div   style={{marginLeft:40,}}>

                  <div style={{marginLeft: 40}} >
                     <h3>Id: {i.id}</h3>
                     <h3>Marca: {i.marca}</h3>
                     <h3>Modelo: {i.modelo}</h3>
                     <h3>Precio: {i.precio}</h3>
                     <h3>Cantidad: {i.cantidad}</h3>
                     <h3>Especificacion: {i.especificacion}</h3>
                     <h4>Agregar al carrito: {cantidad} productos</h4>
                  </div> 
            
        
         <div style={{marginTop:100}}><ContadorProductos arreglo ={nuevoArreglo2} stock={10} AgregarCarrito = {AgregarCarrito} cantidad={(c)=>{console.log("Cantidad Agregada" + c); setCantidad(c); }} /> </div>
          <Link key={i.id} id = "verCarrito"className="btn btn-primary" to={'/Carrito'} >Ver Carrito</Link>  
    </div>
         
         </div>
        )
       }
      
     </div>


    )

}


/*<div className="carousel-item active">
                      <img  className = "card-img"  id="carousel-item"  key = {i.id}  src={(i.foto)} alt={i.modelo} /></div>

                         <div  className="carousel-item active">
                            <img className = "card-img"  id="carousel-item" src={(i.foto2)} alt="..."/>    </div>
    
                               <div  className="carousel-item active">
                               <img className = "card-img" id="carousel-item" src={(i.foto3)} alt="..."/>    </div>

                                    <div class="carousel-item active">
                                    <img className = "card-img"  id="carousel-item" src={(i.foto4)} alt="..."/>    </div>



                









               





                                    */