import React, {Fragment, useState, useEffect} from 'react';
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'

function App() {

  //state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '', 
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);

  const {ciudad, pais} = busqueda;

  useEffect(() => {
    //console.log(ciudad);  
    const consultarAPI = async () => {

      if (consultar === true) {
        
      const appId = '24f1ef43f71cfa5917404d67258dc790';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}
      `;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      console.log(resultado);
      }
    }
    consultarAPI();
  }, [consultar]);



  return (
    <Fragment>
        <Header 
          titulo= 'Clima React App'
        />
        <div className="contenedor-form">
            <div className="container">
              <div className="row">
                <div className="col m6 s12">
                    <Formulario 
                        busqueda= {busqueda}
                        guardarBusqueda = {guardarBusqueda}
                        guardarConsultar = {guardarConsultar}
                    />
                </div>
                <div className="col m6 s12">
                    2
                </div>
              </div>
            </div>
        </div>
    </Fragment>
  );
}

export default App;
