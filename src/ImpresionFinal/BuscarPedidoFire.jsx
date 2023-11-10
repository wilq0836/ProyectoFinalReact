import { useState } from "react"
import { Link } from "react-router-dom"


export const BuscarPedidoFire = ()=>{


    const [id, setid] = useState("");

    const handle = (e)=>{
        e.preventDefault();
        setid(e.target.value);
        
    }

    return(
           

        <form className="card">
        <div className="mb-2">
          <label  className="form-label">Ingrese su Nombre</label>
          <input onChange={handle} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label  className="form-label">Ingrese su codigo de pedido</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" >Check me out</label>
        </div>
        <Link to={`/BuscarPedido/${id}`}  type="submit" className="btn btn-primary">Submit</Link>
      </form>
    
    )
}