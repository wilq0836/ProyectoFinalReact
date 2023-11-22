import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Targeta } from "../Tarjeta/Tarjeta";
import { db } from "./Config";
import { collection, getDocs, query, where } from "firebase/firestore";


export const VerItemMarcaFireBase =()=>{
   
    const marca1 = useParams().marca;
   
    const [productos, setProductos] = useState([]);
   
     

    useEffect(()=>{  

       pedirItemfirePorMarca(marca1)
        .then((res)=>{
            setProductos(res)   
             
            
        });
       

    },[marca1])
    
    return(
          
           <Targeta valorSeleccionadoLista={productos} propiedad={"firebase"}></Targeta>
           
    )
    
    

    
}

const pedirItemfirePorMarca=(id)=>{

    return new Promise((resolve, reject)=>{
 

        const productosRef = collection(db,"productos");
        const quer = query(productosRef, where("marca", "==",id))
        //console.log(quer);

        getDocs(quer)

        .then((resp)=>{
            
            const item =  resp.docs.map((doc)=>{
                return{...doc.data(), id: doc.id,

                   
            }});
           
           
            setTimeout(()=>{   
                
                resolve(item)          
                reject({
                    Error:"No se encontro el item por id"
                });
            },100)
        })

        
    })

}

