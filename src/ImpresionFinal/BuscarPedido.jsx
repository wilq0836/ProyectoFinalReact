import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirCompra } from "./ConsultarCompra";


 export const Pedidos = ()=>{
 

  const objeto = [ {
    nombre: "wilmar",
    email: "wilq0836@hotmail.com",
    password: "",
    address: "Carrera 29a #25-35",
    ciudad: "El Carmne de Viboral",
    productos: 
       [ {
            id: 0,
            marca: "Pinarello",
            modelo: "f12",
            precio: 21000000,
            especificacion: "nueva",
            foto: "/static/media/F12A567-Grey-Black.43ed8791ad36f0951bd2.jpg",
            foto2: "/static/media/F12-Banner-Web-1.9bb4477247d5725b0eb1.jpeg",
            foto3: "/static/media/F12.imagen.2617373261cb94fa8c1c.jpg",
            foto4: "/static/media/f12Captura-de-pantalla-2019-05-07-a-las-8.37.06.ec0893316e9ab225e1c3.png",
            cantidad: 1,
            numero: 1
        },
        {
            id: 1,
            marca: "Pinarello",
            modelo: "f10",
            precio: 22000000,
            especificacion: "nueva",
            foto: "/static/media/F10PINARELLO-F10-204-Diamond.e7124a4796fbd29320d3.png",
            foto2: "/static/media/pinarello10.90c1bfde46c0bda17c59.jpg",
            foto3: "/static/media/F10PINARELLO-F10-200-BoBy.b1ae37e31a182d5d3329.png",
            foto4: "/static/media/F10PINARELLO-F10-201-Fluorite.d540d034b44bbd0cef4f.png",
            cantidad: 1,
            numero: 1
        } ],
        
 
    total: 66000000
}]

const[item, setItem] = useState("");
const[producto, setProducto] = useState([objeto]);


    const idCompra = useParams().id;
      
    useEffect(()=>{
      pedirCompra(idCompra)
      .then((res)=>{       
       setItem(res)
       setProducto(res.productos)
      })
    },[idCompra])
                        
    console.log(producto)
    
         
        
 
    return(
                

      <div className="container13" style={{ color:"black", backgroundColor:"white", marginLeft: 300, marginRight:300}} >
              
                <h2 style={{marginLeft:40,marginTop:80}}>Gracias por su compra</h2>
                <h3 style={{marginLeft:40,marginTop:30}}>Codigo de su pedido:   {item.id}</h3>
                <h3 style={{marginLeft:40,marginTop:30}}>Resumen de su pedido </h3> 
                <div key={item.id} style={{marginLeft:30, marginTop:20}}>
                <h3>Nombre: {item.nombre}</h3>
                <h3>correo electronico: {item.email}</h3>
                <h3>Direccion de Envio: {item.address}</h3>
                <h3>Ciudad: {item.ciudad}</h3>
                <h3> Total Pedido: {item.total}  </h3>
                </div>

                <div className="card-body" style={{marginLeft:40 , marginBottom:50}} >
                <table className="table" style={{marginTop:40}}>
                <table className="table" style={{marginTop:40}}>
                <thead>
                <tr>
                              <th scope="col">#</th>
                              <th scope="col">Marca</th>
                              <th scope="col">Modelo</th>
                              <th scope="col">Precio</th>
                              <th scope="col">Unidades</th>
                              <th scope="col">Total</th>
                              <th>Imagen</th>
                            </tr>
                </thead>

                <tbody>
                { producto.map((e)=>
                            <tr key={e.id}>
                              <th scope="row">{e.id}</th>
                              <td>{e.marca}</td>
                              <td>{e.modelo}</td>
                              <td>{e.precio}</td>
                              <td>{e.numero}</td>
                              <td>{e.numero*e.precio}</td>
                              <td> < img className="imagentab" src={e.foto} alt="" /></td>
                            </tr>
                            )
     }
    
               
                </tbody>
                </table> 
                </table>

                </div>

     
        
       </div>
               )



              

}







/*  { 
                    objeto.map((i)=>                     
                    
                    <div  style={{display:"inline-block", width:1700, color:"black", backgroundColor:"white", marginLeft: 100, marginTop:100}} >
                   
                    <div key={i.id} style={{marginLeft:30, marginTop:20}}>
                      <h2>Gracias por su compra</h2>
                        <h3 >Codigo de su pedido:   {i.id}</h3>
                
                          <h3>Resumen de su pedido</h3> 

                            <h3>Nombre: {i.nombre}</h3>
                             <h3>correo electronico: {i.email}</h3>
                              <h3>Direccion de Envio: {i.address}</h3>
                               <h3>Ciudad: {i.ciudad}</h3>
                                <h3> Total Pedido: {i.total}  </h3>
                    </div>

                  <div className="card-body" style={{marginLeft:40 , marginBottom:50}}>

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
                              <th>Imagen</th>
                            </tr>
                          </thead>




 <tr key={item.id}>
                              <th scope="row">{objeto.productos.id}</th>
                              <td>{item.productos.marca}</td>
                              <td>{item.productos.modelo}</td>
                              <td>{item.productos.precio}</td>
                              <td>{item.productos.numero}</td>
                              <td>{item.productos.numero*item.productos.precio}</td>
                              <td> < img className="imagentab" src={item.productos.foto} alt="" /></td>
                            </tr>



                          
                          <tbody>

                            { i.productos.map((e)=>
                            <tr key={e.id}>
                              <th scope="row">{e.id}</th>
                              <td>{e.marca}</td>
                              <td>{e.modelo}</td>
                              <td>{e.precio}</td>
                              <td>{e.numero}</td>
                              <td>{e.numero*e.precio}</td>
                              <td> < img className="imagentab" src={e.foto} alt="" /></td>
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
                 }*/