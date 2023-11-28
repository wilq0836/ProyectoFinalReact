import { useState } from "react"
import { Link } from "react-router-dom"



export const BuscarPedidoFire = ()=>{


    const [id, setid] = useState("");

    const handle = (e)=>{
        e.preventDefault();
        setid(e.target.value);
        
    }

    return(
           
     
      <div className="container12">

      <form style={{marginLeft:20,marginRight:20, marginTop:20,marginBottom:20}} >
        
        <div className="mb-2">
          <label  className="form-label">Ingrese el codigo de su pedido</label>
          <input onChange={handle} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div> 
        
        <Link  to={`/BuscarPedido/firebase/${id}`}  type="submit" className="btn btn-primary">Buscar</Link>
      </form>
      </div>
    
    )
}
//