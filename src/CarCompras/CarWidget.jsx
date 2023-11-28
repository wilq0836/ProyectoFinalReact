import React, { useContext } from "react";
import { CarContext } from "../Context/CarContext";
import { useState } from "react";
import { Link } from "react-router-dom";




 const CarWidget =() =>{

  
  const[numeroElemt] = useState(1);
   
  const { AgregarCarrito, carrito, precioTotal, cantidadCarrito, eliminarArticulo, vaciarCarrito} = useContext(CarContext);



  const handleEliminar = (item)=>{
    
    eliminarArticulo(item);

  }


 return(
         


  <div className="container11">
            
       
        <div className="renglonesCarrito " >                 
        <div className="modal-content" style={{height:"auto", width:1440}}>
                  <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel" style={{fontSize:50, marginLeft:570}} >Carrito</h5>
                      
                       </div>
                      
                          
                             
  <table className="table">
    <thead>
    <tr>
       <th scope="col">Marca</th>
        <th scope="col">Modelo</th>
         <th scope="col">Cantidad</th>
           <th scope="col">Adicionar articulos</th>
              <th scope="col">Precio Unitario</th>
                  <th scope="col">Precio Total</th>
                     <th scope="col">Eliminar</th>
                     </tr>                                           
             </thead>
                  <tbody  id="items" >

                  { carrito.map((item)=><tr key={ item.id} >                                               
                          <td>{item.marca}</td>
                            <td>{item.modelo}</td>
                            <td>{item.numero}</td>
                               <td><input  id = {`cantidad-producto-${item.id}`} key = {`cantidad-producto-${item.id}`}   type="number"  min="1" max="10"  onClick={(e)=>{
                               
                               AgregarCarrito(item,numeroElemt)
                              
                                 
                               }} /></td>
                                 <td >{item.precio}</td>
                                    <td>{item.precio * item.numero}</td> 
                                       <td><button  id = {`eliminar-${item.modelo}`} key={`eliminar-${item.modelo}`} 
                                       
                                       onClick={()=>{ 
                                        handleEliminar(item)

                                        }} type="button" className="btn btn-danger" ><i className="bi bi-trash-fill"></i></button></td>
                                      
                                        </tr>
                                             
                                             )} 
                                </tbody>
                                                                       
                            </table> 
                            
                               
                                          
                                                 
         
         <div className="modal-footer" style={{ height:90}}>
         <h4 style={{marginRight:80}}>Cantidad de articulos: {cantidadCarrito()}</h4>
         <h4 style={{marginRight:80}}>Total Compra: ${precioTotal()} </h4>
         
          <Link to={'/CheckOut/'} className="btn btn-outline-success me-2" style={{marginLeft:40, marginRight:30, width:200, fontSize:20}}>Terminar compra</Link>
         <button type="button" className="btn btn-outline-success me-2" onClick={()=>vaciarCarrito()} style={{marginLeft:30, width:200,fontSize:20}} >Vaciar Carrito</button>
         <Link to={"/"} type="button" className="btn btn-secondary" style={{marginLeft:30, fontSize:20}}>Cerrar</Link>
         </div>
     </div>
     </div>      
       </div> 
       
     
       
     
         )
  

     

    
}


    


export default CarWidget;



