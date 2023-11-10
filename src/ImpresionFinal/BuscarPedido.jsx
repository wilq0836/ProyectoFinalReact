import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../FireBase/Config";
import { collection,getDocs } from "firebase/firestore";
import { ImprimirLista } from "./ImprimirLista";





 export const Pedidos = ()=>{

    const[item, setItem] = useState(null);
    const idCompra = useParams().id;

    useEffect(()=>{

        pedirCompra(idCompra)
        .then((res)=>{
            setItem(...res)
            
        })
    },[idCompra])

    // <ImprimirLista pedido={item}></ImprimirLista>

    return(
        <>
          {console.log(item)}
         
          </>
       
    )
}

const pedirCompra = (id) => {

    return new Promise((resolve,reject)=>{
    

        const productosRef = collection(db,"pedidos");
        
       

        getDocs(productosRef)
        .then((resp)=>{
            
         //console.log(resp.docs[0].data());
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