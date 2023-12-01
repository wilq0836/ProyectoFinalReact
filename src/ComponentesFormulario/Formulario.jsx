import { useState } from "react";
//import { useForm } from "react-hook-form";


export const Formulario = () => {



const [valores, setValores] = useState(

    {nombre: "",
    email:  "",
    password:"",
    address:"",
    ciudad:"",
     }

);



const handSumit = (e)=>{
    e.preventDefault();
    console.log("enviado", valores)
  

}

const handleValores=(e)=>{
    
    setValores({...valores,
        [e.target.name]: e.target.value
   
    } 
        
        )
}


    
  return (
    <div
      className="container5"
      style={{ backgroundColor: "white" }}
    >
      <h2  style={{ fontSize:55, textAlign: "center",}}>Datos Formulario</h2>

      <form className="row g-3 m-3 p-3" onSubmit={handSumit}>
        
        <div className="">
            <label className="form-label">
              Nombre
            </label>
            <input
              type="texto"
              className="form-control"
              id="inputNombre"
              placeholder="Nombre"
              value={valores.nombre}
              onChange={handleValores}
              name="nombre"
            />
          </div>
  
  
          <div className="col-md-6">
            <label className="form-label">
              Email
            </label>
            <input 
            type="text" 
            className="form-control"
            id="inputEmail4"
            value={valores.email} 
            onChange={handleValores}
            name="email" 
            />
  
          </div>
  
          <div className="col-md-6">
            <label  className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="inputPassword4"
             value={valores.password}
             onChange={handleValores}
             name="password"
            />
          </div>
  
          <div className="col-12">
            <label className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={valores.address}
              onChange={handleValores}
              name="address"
            />
          </div>
  
  
          <div className="col-md-6">
            <label  className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" 
            value={valores.ciudad}
            onChange={handleValores}
            name="ciudad"
            />
          </div>
  
          <div className="col-md-4">
            <label  className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option >Choose...</option>
              <option>...</option>
            </select>
          </div>
  
          <div className="col-md-2">
            <label  className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
  
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" >
                Check me out
              </label>
            </div>
          </div>
  
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
  
        </form>
      

      
      

      
    </div>
  );
};


