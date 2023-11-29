import {  useState } from "react";



export const ContadorProductos = ({stock,cantidad,arreglo,AgregarCarrito})=>{
    

    const [numero, setNumero] = useState(1);
    

    const aumentar = ()=>{

        if(stock>numero){
        setNumero(numero+1);
        }
    }
    const disminuir =()=>{
        if(numero >= 1 )
        {
            setNumero(numero-1);
        }
        
    }

 
    
    return(
        <div className="container" >
            <div id="containerContador">
            <button className="btn btn-primary" onClick={()=>disminuir()} disabled={!numero} >-</button>
            <div className="cantidad">{numero}</div>
            <button className="btn btn-primary" onClick={()=>aumentar()} disabled={numero>=stock} >+</button>
            </div>
            <button id = "botonAgregar" className="btn btn-primary" onClick={()=>{ 
              AgregarCarrito(arreglo,numero);  
              cantidad(numero);            
             
              
             } } disabled={numero>stock || !numero}>Agregar al Carrito</button>

        </div>
    )
}
