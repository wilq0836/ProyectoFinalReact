
import App from './App.css';

       
export function Titulo (){

  return <div> 

        <h1 id = "titulo">BIKESTWOGO</h1> 

        </div>
}



export function Nav(prop){
      
      const i = ArmarNav(prop.label);
      const j = MarcaBicicleta(prop.label2);
      const k = ArmarNav(prop.label3);
      const l = ArmarNav(prop.label4);
      const m = ArmarNav(prop.label5);
      const n = ArmarNav(prop.label6);
      const o = ArmarNav(prop.label7);     

      
      
  return <div>
        
        <header>
          <nav id = "navegador" >           
            <a> {i} </a> 
            <a> {j} </a> 
            <a> {k} </a> 
            <a> {l} </a> 
            <a> {m} </a> 
            <a> {n} </a> 
            <a> {o} </a> 
          </nav>       
        </header> 
      </div>
     }




     function MarcaBicicleta (prop2) {
      console.log(prop2);
      const marcaBicicleta = ["scott","colnago","giant","pinarello","trek"];
      const lista = marcaBicicleta.map(element => <li><a class="dropdown-item" href="#">{element}</a></li>);
      
  return <>            
                   
              <a class= "dropdown" data-bs-toggle="dropdown" >{prop2} </a>
              <ul class="dropdown-menu">{lista} </ul>            
          
        </>       
       
       };
     

       
       
     function ArmarNav (prop1){

        return <>      
          <a class= "dropdown" data-bs-toggle="dropdown" > {prop1} </a>
            <ul class="dropdown-menu">    
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            
        </>
  
       }