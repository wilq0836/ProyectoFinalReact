import { collection,getDocs} from "firebase/firestore";
import { db } from "../FireBase/Config";

export const pedirCompra = (id) => {
 
  
    return new Promise((resolve,reject)=>{
    

        const productosRef = collection(db,"pedidos");
             

        getDocs(productosRef)

        .then((resp)=>{
         
            const item2 = resp.docs.map((doc)=>{
                return{...doc.data(), id: doc.id,}
            });
           
            
            setTimeout(()=>{
              resolve(...item2.filter((i)=>i.id === id))    
                       reject({
                    Error: console.log("No se encontro el item por id")
                    
                });
            },100)
            
           
        })
       
        
    

    })

}