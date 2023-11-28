
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
    {id:3,marca:"Colnago",modelo:"C64",precio:20000000,especificacion:"Nueva",foto:require("../img/C641.JPG"),foto2:require("../img/C642.JPG"),foto3:require("../img/C643.JPG"),foto4:require("../img/C644.JPG"),foto5:require("../img/C641.JPG"),foto6:require("../img/C643.JPG"),cantidad:1},
    {id:4,marca:"Colnago",modelo:"C60",precio:28000000,especificacion:"Nueva",foto:require("../img/COLNAGOC60.jpg"),foto2:require("../img/C601.JPG"),foto3:require("../img/C602.JPG"),foto4:require("../img/C603.JPG"),foto5:require("../img/C603.JPG"),foto6:require("../img/C601.JPG"),cantidad:1},
    {id:5,marca:"Colnago",modelo:"VR3S",precio:29000000,especificacion:"Nueva",foto:require("../img/colnagovr3s.jpg"),foto2:require("../img/VR4S1.JPG"),foto3:require("../img/VR4S1.JPG"),foto4:require("../img/VR4S2.JPG"),foto5:require("../img/C644.JPG"),cantidad:1},    
    {id:6,marca:"Trek",modelo:"Madone",precio:19000000,especificacion:"Nueva",foto:require("../img/MADONE1.JPG"),foto2:require("../img/MODONE2.JPG"),foto3:require("../img/MADONE5.JPG"),foto4:require("../img/MADONE6.JPG"),foto5:require("../img/MADONE5.JPG"),cantidad:1},
    {id:7,marca:"Trek",modelo:"Emonda",precio:15000000,especificacion:"Nueva",foto:require("../img/TREKEMONDA.JPG"),foto2:require("../img/EMONDA1.JPG"),foto3:require("../img/EMONDA2.JPG"),foto4:require("../img/EMONDA3.JPG"),foto5:require("../img/EMONDA4.JPG"),foto6:require("../img/EMONDA1.JPG"),cantidad:1},
    {id:8,marca:"Trek",modelo:"Madone Blue",precio:13000000,especificacion:"Nueva",foto:require("../img/TREKMADONEBLUE.JPG"),foto2:require("../img/MANODEB1.JPG"),foto3:require("../img/MANODEB2.JPG"),foto4:require("../img/MANODEB3.JPG"),foto5:require("../img/MANODEB4.JPG"),foto6:require("../img/MANODEB5.JPG"),cantidad:1},
    {id:9,marca:"Trek",modelo:"Supercaliber",precio:16000000,especificacion:"Nueva",foto:require("../img/TREKSUPERCALIBER.JPG"),foto2:require("../img/CALIBER1.JPG"),foto3:require("../img/CALIBER2.JPG"),foto4:require("../img/CALIBER4.JPG"),foto5:require("../img/CALIBER5.JPG"),cantidad:1},
    {id:10, marca:"Giant",modelo:"advance",precio:12000000,especificacion:"Nueva",foto:require("../img/giantadvance.jpg"),foto2:require("../img/TCR1.JPG"),foto3:require("../img/TCR2.JPG"),foto4:require("../img/TCR3.JPG"),foto5:require("../img/TCR4.JPG"),foto6:require("../img/TCR5.JPG"),cantidad:1},
    {id:11,marca:"Giant",modelo:"tcr",precio:10000000,especificacion:"Nueva",foto:require("../img/gianttcrpro.jpg"),foto2:require("../img/TCR1.JPG"),foto3:require("../img/TCR2.JPG"),foto4:require("../img/TCR3.JPG"),foto5:require("../img/TCR4.JPG"),foto6:require("../img/TCR5.JPG"),cantidad:1},
    {id:12,marca:"Giant",modelo:"propel",precio:10000000,especificacion:"Nueva",foto:require("../img/propeladvance.jpg"),foto2:require("../img/PROPEL1.JPG"),foto3:require("../img/PROPEL2.JPG"),foto4:require("../img/PROPEL3.JPG"),foto5:require("../img/PROPEL4.JPG"),foto6:require("../img/PROPEL5.JPG"),cantidad:1},
    {id:13,marca:"Giant",modelo:"propelBlue",precio:10000000,especificacion:"Nueva",foto:require("../img/propelgray.jpg"),foto2:require("../img/PROPEL1.JPG"),foto3:require("../img/PROPEL2.JPG"),foto4:require("../img/PROPEL3.JPG"),foto5:require("../img/PROPEL4.JPG"),foto6:require("../img/PROPEL5.JPG"),cantidad:1},
    {id:14,marca:"scott",modelo:"Scale",precio:12000000,especificacion:"Nueva",foto:require("../img/454.jpg"),foto2:require("../img/SCALE1.JPG"),foto3: require("../img/SCALE2.JPG"),foto4: require("../img/SCALE3.JPG"),foto5: require("../img/SCALE3.JPG"),cantidad:1},
    {id:15,marca:"scott",modelo:"Scale",precio:10000000,especificacion:"Nueva",foto:require("../img/addict30.jpg"),foto2:require("../img/addict4.JPG"),foto3:require("../img/addict1.JPG"),foto4:require("../img/addict2.JPG"),foto5:require("../img/addict3.JPG"),cantidad:1},
    {id:16,marca:"scott",modelo:"addictRc",precio:10000000,especificacion:"Nueva",foto:require("../img/addictrc10.jpg"),foto2:require("../img/addict4.JPG"),foto3:require("../img/addict1.JPG"),foto4:require("../img/addict2.JPG"),foto5:require("../img/addict3.JPG"),cantidad:1},
    {id:17,marca:"scott",modelo:"addictRc2",precio:10000000,especificacion:"Nueva",foto:require("../img/addictrc30.jpg"),foto2:require("../img/addict4.JPG"),foto3:require("../img/addict1.JPG"),foto4:require("../img/addict2.JPG"),foto5:require("../img/addict3.JPG"),cantidad:1},

]