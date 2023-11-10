import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetails } from "./ItemDetails";
import { FiltrarArticulos } from "../ConstructorArticulos/FiltrarArticulos";


export const VerItem = ()=>{

    const [item, setItem] = useState(null);
    const id = useParams().id;
       

    useEffect(()=>{
        
        FiltrarArticulos(Number(id))
        .then((res)=>{
            setItem(res);  
            console.log(res)         
            
        })
    },[id])

    return(
                   
            <ItemDetails  itemEntregado = {item}></ItemDetails>
        
    )
}



