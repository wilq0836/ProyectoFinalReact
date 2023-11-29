import React from "react";
import { Link } from "react-router-dom";



function Navbar (){

    return(
        <div className="Navegador">
            <nav className="navbar" >
            
            <div className="dropdown">
            <Link  className = "dropdown-item"  to='/'>Inicio</Link>
                </div>

             <div className="dropdown">
                 <Link className = "dropdown-item" to='/VerItem/Categorias/todos'>Todos los Productos</Link> 
                </div>
 
                 <div className="dropdown">
                    <Link className = "dropdown-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Marcas</Link>
                     <ul className="dropdown-menu dropdown-menu-dark">
                      <Link  className = "dropdown-item"  to='/VerItem/Categorias/scott' >Scott</Link>  
                       <li><Link  className = "dropdown-item"  to='/VerItem/Categorias/Trek'>Trek</Link></li>
                        <li><Link  className = "dropdown-item"  to='/VerItem/Categorias/Colnago'>Colnago</Link></li>
                         <li> <Link  className = "dropdown-item"  to='/VerItem/Categorias/Giant'>Giant</Link></li>
                          </ul>
                    </div>

                

                  <div className="dropdown">
                   <Link className="dropdown-item" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     FireBase</Link>
                     <ul className="dropdown-menu dropdown-menu-dark">
                      <Link  className = "dropdown-item"  to='/VerItemFire/Categorias/Bebidas' >Bebidas</Link>  
                       <li><Link  className = "dropdown-item"  to='/VerItemFire/Categorias/Geles'>Geles</Link></li>
                        <li><Link  className = "dropdown-item"  to='/VerItemFire/Categorias/Barras'>Barras</Link></li>
                         <li> <Link  className = "dropdown-item"  to='/VerItemFire/Categorias/Kits'>Kits</Link></li>
                       </ul>
                        </div>

                   <div className="dropdown">
                      <Link className = "dropdown-item" to='/contenedorFetch/'>Fetch</Link>
                         </div>


                       <div className="dropdown">
                        <Link className = "dropdown-item" type="button"  to='/Carrito'> Carrito de compras</Link>
                         </div>
                         <div className="dropdown">
                           <Link className = "dropdown-item"  to='/BuscarPedido/' > Buscar Pedido</Link>
                         </div>
               
                     <div className="dropdown">
                        <Link className = "dropdown-item" to='/Formulario/'>Contacto</Link>           
                      </div>

                      

             </nav> 
                
                  
        </div>
        
    )

}

export default Navbar;
