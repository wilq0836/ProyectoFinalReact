import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Titulo,Nav, Nav2} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <div>
    <Titulo/> 
    <Nav label ="Inicio" label2 ="Bicicletas" label3 = "Componentes" 
   label4 = "Accesorios" label5 = "Portafolio" label6= "Servcios" 
   label7= "Contacto" />
    
  </div>
  
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
