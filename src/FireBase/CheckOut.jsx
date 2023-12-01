import { useContext } from "react"
import { CarContext } from "../Context/CarContext"
import { useState } from "react"
import { collection } from "firebase/firestore"
import { db } from "./Config"
import { addDoc } from "firebase/firestore"
import { ImprimirLista } from "../ImpresionFinal/ImprimirLista"



export const CheckOut =()=>{

    const[pedidoId, setPedidoId] = useState("");
    const[pedidoFinal, setPedidoFinal] = useState("");
 
  


    const {carrito, precioTotal, vaciarCarrito} = useContext(CarContext)


    const [valores, setValores] = useState(

        {nombre: "",
        email:  "",
        password:"",
        address:"",
        ciudad:"",
         }
    
    );
    
    
    
    const handSumit = (e)=>{
        e.preventDefault();
        console.log("enviado", valores)
        Comprar(valores);
    
    }
    
    const handleValores=(e)=>{
        
        setValores({...valores,
            [e.target.name]: e.target.value
       
        } 
            
            )
    }

    const Comprar = (data)=> {

        const pedido = {

            nombre: data.nombre,
            email:  data.email,
            password:data.password,
            address:data.address,
            ciudad:data.ciudad,
            productos: carrito,
            total: precioTotal(),

    
        }        
      
       
        const pedidosRef = collection(db,"pedidos");

        addDoc(pedidosRef,pedido)
        
        .then((doc)=>{
            setPedidoId(doc.id);        
            vaciarCarrito();
        })
        setPedidoFinal(pedido);
        
      }

       
        if(pedidoId){
        
        return(
            <div className="container13" style={{ color:"black", backgroundColor:"white", marginLeft: 300, marginRight:300}} >
              
                <h2 style={{marginLeft:40,marginTop:80}}>Gracias por su compra</h2>
                <h3 style={{marginLeft:40,marginTop:30}}>Codigo de su pedido:   {pedidoId}</h3>
                
                <h3 style={{marginLeft:40,marginTop:30}}>Resumen de su pedido</h3>                
                
                <ImprimirLista pedido1={pedidoFinal}></ImprimirLista>   
                
            </div>
        )
    }
 

    return(
     

<div
      className="container5"
      style={{ marginBottom: 100, backgroundColor: "white" }}>
        
      <h2 style={{ textAlign: "center" }}>Finalizar Compra</h2>

      <form className="row g-3 m-3 p-3" onSubmit={handSumit}>
        
        <div className="">
            <label  className="form-label">
              Nombre
            </label>
            <input
              type="texto"
              className="form-control"
              id="inputNombre"
              placeholder="Nombre"
              value={valores.nombre}
              onChange={handleValores}
              name="nombre"
            />
          </div>
  
  
          <div className="col-md-6">
            <label  className="form-label">
              Email
            </label>
            <input 
            type="text" 
            className="form-control"
            id="inputEmail4"
            value={valores.email} 
            onChange={handleValores}
            name="email" 
            />
  
          </div>
  
          
  
          <div className="col-12">
            <label className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={valores.address}
              onChange={handleValores}
              name="address"
            />
          </div>
  
  
          <div className="col-md-6">
            <label  className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" 
            value={valores.ciudad}
            onChange={handleValores}
            name="ciudad"
            />
          </div>
  
          <div className="col-md-4">
            <label  className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option >Choose...</option>
              <option>...</option>
            </select>
          </div>
  
          <div className="col-md-2">
            <label className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
  
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" >
                Check me out
              </label>
            </div>
          </div>
  
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
  
        </form>
 

      
    </div>

        
    )
}



/*<div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="inputPassword4"
             value={valores.password}
             onChange={handleValores}
             name="password"
            />
          </div>*/