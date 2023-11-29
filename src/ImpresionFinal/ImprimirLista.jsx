

export const ImprimirLista =(pedido)=>{


      const pedido1 = [{...pedido.pedido1}];
      const pedido2 = [...pedido.pedido1.productos];

    return(
    <div className="card-body" style={{marginLeft:40 , marginBottom:50}} >

        {pedido1.map((i)=>
        <div key={i.id}><h3>Nombre:{i.nombre}</h3>
        <h3>correo electronico: {i.email}</h3>
        <h3>Direccion de Envio: {i.address}</h3>
        <h3>Ciudad: {i.ciudad}</h3>
        <h3> Total Pedido: {i.total}  </h3>
        </div>
       )}
        <table className="table table-striped table-hover">
            
            <table   className="table" style={{marginTop:40}} >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Unidades</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {pedido2.map((i)=>
                <tr key={i.id}>
                  <th scope="row">{i.id}</th>
                  <td>{i.marca}</td>
                  <td>{i.modelo}</td>
                  <td>{i.precio}</td>
                  <td>{i.numero}</td>
                  <td> < img className="imagentab" src={i.foto} alt="" /></td>
                  <td>{i.numero*i.precio}</td>
                
                </tr>
                
                )
               
                }
              </tbody>
              
            </table>       
    
            </table>
            <h3 style={{ marginLeft:30}}>Su compra sera enviada dentro de las proximas 24 horas</h3>

            </div>
    )
}

