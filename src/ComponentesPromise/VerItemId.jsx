import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItemPorIdFetch } from "./ObtenerProductos";
import { ItemDetails } from "../PedirItemPorId/ItemDetails";


export const VerItemFetch = ()=>{
   
    const [item, setItem] = useState(null);
    const id = useParams().id;
       

    useEffect(()=>{
       
         pedirItemPorIdFetch(Number(id))
        .then((res)=>{
            setItem(res);           
            
        })
    },[id])
//console.log(item)
    return(
                  
     <ItemDetails  itemEntregado = {item}></ItemDetails>
       
    )
}

