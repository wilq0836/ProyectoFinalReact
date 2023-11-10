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
      setPedidoFinal(pedido);
       
      
       
        const pedidosRef = collection(db,"pedidos");

        addDoc(pedidosRef,pedido)
        
        .then((doc)=>{
            setPedidoId(doc.id);
            vaciarCarrito();
        })
        
        
      }

   
    
        if(pedidoId){

       console.log(pedidoId);
        
        return(
            <div className="card" >

                <h2 style={{marginLeft:40,marginTop:30}}>Gracias por tu compra</h2>
                
                <h3 style={{marginLeft:40,marginTop:30}}>Codigo de su pedido:   {pedidoId}</h3>
                <h3 style={{marginLeft:40,marginTop:30}}>Resumen de su pedido</h3>                
             
                <ImprimirLista pedido1={pedidoFinal}></ImprimirLista>

                <h3 style={{marginBottom:30, marginLeft:30}}>Su compra sera enviada dentro de las proximas 24 horas</h3>
             
            </div>
        )
    }
 

    return(
     

<div
      className="container"
      style={{ marginBottom: 100, backgroundColor: "white" }}>
        
      <h2 style={{ textAlign: "center" }}>Finalizar Compra</h2>

      <form className="row g-3 m-3 p-3" onSubmit={handSumit}>
        
        <div className="">
            <label htmlFor="inputNombre" className="form-label">
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
            <label htmlFor="inputEmail4" className="form-label">
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
  
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="inputPassword4"
             value={valores.password}
             onChange={handleValores}
             name="password"
            />
          </div>
  
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
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
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" 
            value={valores.ciudad}
            onChange={handleValores}
            name="ciudad"
            />
          </div>
  
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option >Choose...</option>
              <option>...</option>
            </select>
          </div>
  
          <div class="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
  
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
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