const productosFetch = []; 
let id = 18;



const pedirPost = async()=>{

    const resp = 

    await fetch (  'https://api.escuelajs.co/api/v1/products');

    const data = await resp.json()

    let filtrar = data.filter (item => item.category.name === "Electronics");
    
    filtrar.forEach(element => {
        
        const productosTienda = {id:++id, marca:element.title,modelo:element.description,precio:element.price*4300,foto:element.images,cantidad:1};
        productosFetch.push(productosTienda);
        console.log(productosTienda);
    

    });

 }   

 const  getProducts = () =>{
   
    pedirPost();

    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve(productosFetch)
           
            
        },300)
    })
}
export default getProducts;



export const pedirItemPorIdFetch = (id)=>{
   
    return new Promise((resolve,reject)=>{

        const item = productosFetch.find((e)=> e.id === id);
       
        if(item){
            resolve(item);
        }else{
            reject({
                Error:"No se encontro el item por id"
            })
        }
    })

   
}
