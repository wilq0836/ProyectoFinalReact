import { Link } from "react-router-dom";

function Footer(){

    return(
       

          <footer >
            
              <div className="elementor-column ">
                    <div className="elementor-widget-wrap">
                      <h3 className="elementor-heading-title elementor-size-default">Contacto</h3>	
                        <ul className="elementor-icon-list-items">
                          <li className="elementor-icon-list-item">
                            <span className="elementor-icon-list-text">Centro Comercial s Plaza<br/>Calle 354 D Sur # 274dA.105ss Medellin</span>
                            </li>  
                              <li className="elementor-icon-list-item">
                             	<span className="elementor-icon-list-text">(604) 440 00 00</span>
                              </li>
                              <li className="elementor-icon-list-item">
                                <Link>
                                  <span className="elementor-icon-list-text">bikestwogo@.com.co</span>
                                  </Link>
                                </li>
                            </ul>
                      </div>


                      <div className="elementor-widget-wrap">
                      <h3 className="elementor-heading-title">Nuestros Productos</h3>	
                        <ul className="elementor-icon-list-items">
                          
                              <li className="elementor-icon-list-item">
                                  <Link to='/VerItemFire/Categorias/Geles'>
                                    <span className="elementor-icon-list-text">Geles</span>
                                     </Link>
                                    </li>
                              
                              <li className="elementor-icon-list-item">
                                   <Link to='/VerItemFire/Categorias/Bebidas'>
                                    <span className="elementor-icon-list-text">Bebidas</span>
                                     </Link>
                                    </li>
                              
                              <li className="elementor-icon-list-item">
                                  <Link  to='/VerItemFire/Categorias/Barras'>
                                   <span className="elementor-icon-list-text">Barras</span>
                                  </Link>
                              </li>

                              <li className="elementor-icon-list-item">
                                  <Link to='/VerItemFire/Categorias/Kits'>
                                    <span className="elementor-icon-list-text">Kits</span>
                                </Link>
                              </li>
                            
                            </ul>
                      </div>

    <div className="elementor-widget-wrap"> 
      
      <h3 className="elementor-heading-title elementor-size-default">Enlaces rapidos</h3>			 
        <div className="elementor-widget-container">
					<ul className="elementor-icon-list-items">
							
              <li className="elementor-icon-list-item">
									<span className="elementor-icon-list-text">Nosotros</span>
											</li>
								<li className="elementor-icon-list-item">
											<span className="elementor-icon-list-text">Contacto</span>
											</li>
								<li className="elementor-icon-list-item">
											<span className="elementor-icon-list-text">Atletas</span>
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