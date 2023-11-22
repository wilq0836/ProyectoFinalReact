
export const FiltrarArticulos = (valor)=>{

   
    return new Promise((resolve,reject)=>{
        
        

            setTimeout(()=>{

                if(valor==="todos"){
                    const item = [...todos];
                    resolve(item);  
                   }
              
                

                    if(!isNaN(valor)){
                    
                        const item = todos.find( (e)=> e.id === valor);  
            
                         resolve(item);

                    }else{
                        const item = todos.filter( (e)=> e.marca === valor);
                        resolve(item) 
                    }
  
                    
                    reject(
                        {
                            Error:"No se encontro el item por id"
                        }
                )
                    
                  },300)
   

    })   
   


    

}






const todos = [
    {id:0,marca:"Pinarello",modelo:"f12",precio:21000000,especificacion:"nueva",foto: require("../img/F12A567-Grey-Black.jpg"),foto2: require("../img/F12-Banner-Web-1.jpeg"),foto3: require("../img/F12.imagen.jpg"),foto4: require("../img/f12Captura-de-pantalla-2019-05-07-a-las-8.37.06.png"),cantidad:1},
    {id:1,marca:"Pinarello",modelo:"f10",precio:22000000,especificacion:"nueva",foto:require("../img/F10PINARELLO-F10-204-Diamond.png"),foto2:require("../img/pinarello10.jpg"),foto3:require("../img/F10PINARELLO-F10-200-BoBy.png"),foto4:require("../img/F10PINARELLO-F10-201-Fluorite.png"),cantidad:1},
    {id:2,marca:"Pinarello",modelo:"contrareloj",precio:23000000,especificacion:"nueva",foto4:require("../img/pinarellocontrareloj.jpg"),foto2: require("../img/ContrarelojPinarello.jpg"),foto3:require("../img/pinarellocontrareloj.jpg"),foto: require("../img/Filippo-Ganna-Pinarello-Bolide-TT-1.jpg"),cantidad:1},
    {id:3,marca:"Colnago",modelo:"C64",precio:20000000,especificacion:"Nueva",foto:require("../img/COLNAGOC60.jpg"),cantidad:1},
    {id:4,marca:"Colnago",modelo:"C60",precio:28000000,especificacion:"Nueva",foto:require("../img/COLNAGOC60.jpg"),cantidad:1},
    {id:5,marca:"Colnago",modelo:"VR3S",precio:29000000,especificacion:"Nueva",foto:require("../img/colnagovr3s.jpg"),cantidad:1},    
    {id:6,marca:"Trek",modelo:"Madone",precio:19000000,especificacion:"Nueva",foto:require("../img/TREKEMONDA.JPG"),cantidad:1},
    {id:7,marca:"Trek",modelo:"Emonda",precio:15000000,especificacion:"Nueva",foto:require("../img/TREKEMONDA.JPG"),cantidad:1},
    {id:8,marca:"Trek",modelo:"Madone Blue",precio:13000000,especificacion:"Nueva",foto:require("../img/TREKMADONEBLUE.JPG"),cantidad:1},
    {id:9,marca:"Trek",modelo:"Supercaliber",precio:16000000,especificacion:"Nueva",foto:require("../img/TREKSUPERCALIBER.JPG"),cantidad:1},
    {id:10, marca:"Giant",modelo:"advance",precio:12000000,especificacion:"Nueva",foto:require("../img/giantadvance.jpg"),cantidad:1},
    {id:11,marca:"Giant",modelo:"tcr",precio:10000000,especificacion:"Nueva",foto:require("../img/gianttcrpro.jpg"),cantidad:1},
    {id:12,marca:"Giant",modelo:"propel",precio:10000000,especificacion:"Nueva",foto:require("../img/propeladvance.jpg"),cantidad:1},
    {id:13,marca:"Giant",modelo:"propelBlue",precio:10000000,especificacion:"Nueva",foto:require("../img/propelgray.jpg"),cantidad:1},
    {id:14,marca:"scott",modelo:"addict1",precio:12000000,especificacion:"Nueva",foto:require("../img/454.jpg"),cantidad:1},
    {id:15,marca:"scott",modelo:"addict2",precio:10000000,especificacion:"Nueva",foto:require("../img/4542.jpg"),cantidad:1},
    {id:16,marca:"scott",modelo:"addictRc",precio:10000000,especificacion:"Nueva",foto:require("../img/4546.jpg"),cantidad:1},
    {id:17,marca:"scott",modelo:"addictRc2",precio:10000000,especificacion:"Nueva",foto:require("../img/4547.jpg"),cantidad:1}

]