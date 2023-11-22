import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../FireBase/Config";
import { collection,getDocs } from "firebase/firestore";



 export const Pedidos = ()=>{

    const[item, setItem] = useState(null);
    const idCompra = useParams().id;


    useEffect(()=>{

        pedirCompra(idCompra)
        .then((res)=>{
            setItem(...res)
            
        })
    },[idCompra])

    

    const o = [item]
   
     
    return(
        <>
          

          <div className="container13">
             
                {
                    o.map((i)=>
   
                   
                    
                    <div className="container13" style={{ color:"black", backgroundColor:"white", marginLeft: 300, marginRight:300}} >
                    
                    <h2 style={{marginLeft:40,marginTop:80}}>Gracias por su compra</h2>
                    <h3 style={{marginLeft:40,marginTop:30}}>Codigo de su pedido:   {i.id}</h3>
                    
                    <h3 style={{marginLeft:40,marginTop:30}}>Resumen de su pedido</h3> 

                    <h3>Nombre: {i.nombre}</h3>
                    <h3>correo electronico: {i.email}</h3>
                    <h3>Direccion de Envio: {i.address}</h3>
                    <h3>Ciudad: {i.ciudad}</h3>
                    <h3> Total Pedido: {i.total}  </h3>

                    <div className="card-body" style={{marginLeft:40 , marginBottom:50}} >

        
        <table className="table table-striped table-hover">
            
            <table className="table" style={{marginTop:40}}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Unidades</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {i.productos.map((i)=><tr>
                  <th scope="row">{i.id}</th>
                  <td>{i.marca}</td>
                  <td>{i.modelo}</td>
                  <td>{i.precio}</td>
                  <td>{i.numero}</td>
                  <td>{i.numero*i.precio}</td>
                </tr>
                
                )
               
                }
              </tbody>
              
            </table>       
    
            </table>
            <h3 style={{ marginLeft:30}}>Su compra sera enviada dentro de las proximas 24 horas</h3>

            </div>            
                    



                    </div>
                    
                    
                 )
            }
              
          </div>
         
          </>
       
    )
}



export const pedirCompra = (id) => {

    return new Promise((resolve,reject)=>{
    

        const productosRef = collection(db,"pedidos");
        
       

        getDocs(productosRef)
        .then((resp)=>{
         
            const item2 =[ ...resp.docs.map((doc)=>{
                return{...doc.data(), id: doc.id}
            })];
           
            setTimeout(()=>{                
            
                    
           resolve(item2.filter((i)=>
           i.id === id
           ));
               
                
                reject({
                    Error:"No se encontro el item por id"
                });
            },100)
           
        })
       
        
    

    })

}