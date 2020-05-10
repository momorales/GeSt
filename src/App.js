import React, { Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  let citasStart = JSON.parse(localStorage.getItem('citas'))
  if(!citasStart) {
    citasStart = []
  }

  const [citas, setCitas] = useState(citasStart)

  useEffect( ()=> {
    let citasStart = JSON.parse(localStorage.getItem('citas'))
    if(citasStart) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas])

  const handeleCreateCita = cita => {
    setCitas([...citas, cita])
  }
  
  const handleDeleteCita = id => {
    const newCitas = citas.filter(cita => cita.id !== id)
    setCitas(newCitas)
  }

  const title = citas.length ===0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className = 'container'>
        <div className = 'row'>
          <div className = 'one-half column'>
              <Formulario createCita = { handeleCreateCita }/>
          </div>
          <div className ='one-half column' >
              <h2>{title}</h2>
              {citas.map(cita => (
                <Cita key = {cita.id} cita = {cita} deleteCita = { handleDeleteCita } />
              ))}
          </div>
        </div>
      </div>

    </Fragment>
   
  );
}

export default App;
