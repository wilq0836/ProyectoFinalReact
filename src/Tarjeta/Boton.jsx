import { Link } from "react-router-dom"
   
   export const MostrarBoton = (propiedad, item)=>{
 
      if(propiedad === "firebase"){
        return(
          <Link className="btn btn-primary" to={`/VerItemFire/${item.id}`}  >Ver mas sobre este producto en Firebase</Link>
        )
      }
      if(propiedad === "fetch"){

        return( 

        <Link className="btn btn-primary" to={`/VerItemFetch/${item.id}`}  >Ver mas sobre este producto Fetch</Link> 
        )
      }
  
      else{
        return(
          <Link className="btn btn-primary" to={`/VerItem/${item.id}`}>Ver mas sobre este producto</Link>
        )
    }
  
  }