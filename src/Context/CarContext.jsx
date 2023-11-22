import { createContext, useEffect } from "react";
import { useState } from "react";


export const CarContext = createContext();

//const carritoInicial = JSON.parse(localStorage.getItem("carrito"))|| [];

export const CartProvaider = ({children})=>{

  const [carrito, setCarrito]= useState([]);

  

  const AgregarCarrito =(item,numero)=>{
    
        
    const ItemAgregado = {...item,numero}; 
            
   
    const revisarSiCarrito =  carrito.find((producto)=> producto.id === ItemAgregado.id);
    if(revisarSiCarrito){
      //console.log("item encontrado"); 
      revisarSiCarrito.numero += numero;   
      console.log(carrito);  

    }else{
     
      carrito.push(ItemAgregado);
      //console.log("Producto NO esta")   
      console.log(carrito);    
  }



    //localStorage.setItem();

  
  
}

const cantidadCarrito = ()=>{
  
  return carrito.reduce((acc, prod)=> acc + prod.numero, 0);
}


const precioTotal = ()=>{
  return carrito.reduce((acc, prod) => acc + prod.precio * prod.numero, 0);
}


const eliminarArticulo =(item)=>{

   let posicion = carrito.indexOf(item); 
   carrito.splice(posicion,1);
   const newcarrito = [...carrito];
   setCarrito(newcarrito); 
   console.log(carrito)
}

const vaciarCarrito = ()=>{
    setCarrito([]);
}



useEffect(()=>{

    localStorage.setItem("carrito", JSON.stringify(carrito));
    

},[carrito])



return(

<CarContext.Provider value={{carrito,  AgregarCarrito, cantidadCarrito, precioTotal, eliminarArticulo, vaciarCarrito}}>
    {children}
</CarContext.Provider>


)

}
