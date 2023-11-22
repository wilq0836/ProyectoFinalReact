import { Link } from "react-router-dom";

function Footer(){

    return(
       

          <footer >
            
              <div class="elementor-column ">
                    <div class="elementor-widget-wrap">
                      <h3 class="elementor-heading-title elementor-size-default">Contacto</h3>	
                        <ul class="elementor-icon-list-items">
                          <li class="elementor-icon-list-item">
                            <span class="elementor-icon-list-text">Centro Comercial s Plaza<br/>Calle 354 D Sur # 274dA.105ss Medellin</span>
                            </li>  
                              <li class="elementor-icon-list-item">
                             	<span class="elementor-icon-list-text">(604) 440 00 00</span>
                              </li>
                              <li class="elementor-icon-list-item">
                                <Link>
                                  <span class="elementor-icon-list-text">bikestwogo@.com.co</span>
                                  </Link>
                                </li>
                            </ul>
                      </div>


                      <div class="elementor-widget-wrap">
                      <h3 class="elementor-heading-title">Nuestros Productos</h3>	
                        <ul class="elementor-icon-list-items">
                          
                              <li class="elementor-icon-list-item">
                                  <Link to='/VerItemFire/Categorias/Geles'>
                                    <span class="elementor-icon-list-text">Geles</span>
                                     </Link>
                                    </li>
                              
                              <li class="elementor-icon-list-item">
                                   <Link to='/VerItemFire/Categorias/Bebidas'>
                                    <span class="elementor-icon-list-text">Bebidas</span>
                                     </Link>
                                    </li>
                              
                              <li class="elementor-icon-list-item">
                                  <Link  to='/VerItemFire/Categorias/Barras'>
                                   <span class="elementor-icon-list-text">Barras</span>
                                  </Link>
                              </li>

                              <li class="elementor-icon-list-item">
                                  <Link to='/VerItemFire/Categorias/Kits'>
                                    <span class="elementor-icon-list-text">Kits</span>
                                </Link>
                              </li>
                            
                            </ul>
                      </div>

    <div class="elementor-widget-wrap"> 
      
      <h3 class="elementor-heading-title elementor-size-default">Enlaces rapidos</h3>			 
        <div class="elementor-widget-container">
					<ul class="elementor-icon-list-items">
							
              <li class="elementor-icon-list-item">
									<span class="elementor-icon-list-text">Nosotros</span>
											</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-text">Contacto</span>
											</li>
								<li class="elementor-icon-list-item">
											<span class="elementor-icon-list-text">Atletas</span>
                      </li>
						    </ul>
              </div>
           </div>
        
           </div>        
   



              
					<div className="elementor-container">
        
				   <div className="elementor-widget-container">
          
                    <h3 style={{marginLeft:200}}>© 2023 Medellín, Colombia | BIKESTWOGO</h3>	        
              
                   <Link className="elementor-icon-list" >
                      <span >Política de privacidad </span>
										</Link>	
                    <Link className="elementor-icon-list">
                      <span >Políticas de devolución </span>
										</Link>	
                    <Link className="elementor-icon-list">
                      <span >Políticas de envíos gratuitos</span>
										</Link>
                      
                 </div>
                  

                      
                  </div>






                  
				
			


              
              </footer>
            
        
            );
}
export default Footer;