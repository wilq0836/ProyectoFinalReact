import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./Config";
import { ItemDetails } from "../PedirItemPorId/ItemDetails";
import { collection, getDocs } from "firebase/firestore";






export const VerItemIdFireBase = ()=>{

    const [item, setItem]= useState(null);
    const idfirebase = useParams().id;
    
    
    
    useEffect(()=>{
        
        pedirIdFire(idfirebase)
        .then((res)=>{
            setItem(...res);           
            
        })
    },[idfirebase])

    return(
          
        <ItemDetails itemEntregado={item}></ItemDetails>
        
     
    )
    
    }

const pedirIdFire =(idfire)=>{

    
    return new Promise((resolve,reject)=>{
    

        const productosRef = collection(db,"productos");
        
       

        getDocs(productosRef)
        .then((resp)=>{
            
         //console.log(resp.docs[0].data());
            const item2 =[ ...resp.docs.map((doc)=>{
                return{...doc.data(), id: doc.id}
            })];
           
            setTimeout(()=>{                
            
                    
           resolve(item2.filter((i)=>
           i.id === idfire
           ));
               
                
                reject({
                    Error:"No se encontro el item por id"
                });
            },100)
           
        })
       
        
    

    })

   


}
