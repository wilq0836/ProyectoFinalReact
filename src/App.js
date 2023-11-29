import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/ComponentesApp/Nabvar';
import Mapas from './Componentes/Mapas/Mapas';
import { CartProvaider } from './Componentes/Context/CarContext';
import ConstructorProductos from './Componentes/ConstructorArticulos/Constructor';
import { VerItem } from './Componentes/PedirItemPorId/VerItem';
import ItemLisContainer from './Componentes/ComponentesPromise/ItemListContainer';
import { VerItemFetch } from './Componentes/ComponentesPromise/VerItemId';
import { VerItemMarcaFireBase } from './Componentes/FireBase/PedirMarcaFireBase';
import { VerItemIdFireBase } from './Componentes/FireBase/VerIdFirebase';
import { Formulario } from './Componentes/ComponentesFormulario/Formulario';
import { CheckOut } from './Componentes/FireBase/CheckOut';
import CarWidget from './Componentes/CarCompras/CarWidget';
import { BuscarPedidoFire } from './Componentes/ImpresionFinal/BuscarPedidoFire';
import { Pedidos } from './Componentes/ImpresionFinal/BuscarPedido';
import Footer from './Componentes/ComponentesApp/Footer';


function App() {
  return (

    
    <div className="App">
    <CartProvaider>
     <BrowserRouter>
     <h1 className='titulo'>BIKESTWOGO</h1>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/'></Route>
        <Route path='/VerItem/Categorias/:marca' element={<ConstructorProductos propiedad={"Biblioteca"}></ConstructorProductos>}></Route>
        <Route path='/VerItem/:id' element={<VerItem/>}></Route> 
        <Route path='/contenedorFetch/'element = {<ItemLisContainer></ItemLisContainer>}></Route>
        <Route path='/VerItemFetch/:id'element = {<VerItemFetch/>}></Route>
        <Route path='/VerItemFire/Categorias/:marca' element={<VerItemMarcaFireBase/>}></Route> 
        <Route path='/VerItemFire/:id' element={<VerItemIdFireBase/>}></Route> 
        <Route path='/Formulario/' element={<Formulario/>}></Route>
        <Route path='/CheckOut/' element={<CheckOut/>}></Route>
        <Route path='/Carrito' element={<CarWidget></CarWidget>}></Route>  
        <Route path='/BuscarPedido/' element={<BuscarPedidoFire/>}></Route> 
        <Route path='/BuscarPedido/firebase/:id' element={<Pedidos></Pedidos>}></Route> 
      </Routes>
      
      <Mapas/>
      
      <Footer></Footer>
      
      </BrowserRouter>
       </CartProvaider>
     
      
      </div>
      
     
 
          
    
        
       
    
  );
}

export default App;
