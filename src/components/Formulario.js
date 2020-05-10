import React, {Fragment, useState} from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

const Formulario = ({createCita}) => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const { mascota, propietario, fecha, hora, sintomas } = cita

    const [error, setError] = useState (false)

    const handleChange = event => {
        setCita({
            ...cita,
            [event.target.name] : event.target.value
        })
        
    }

    const handleCita = event => {
        event.preventDefault()
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true)
            return
        }
        setError(false)

        cita.id = uuid()

        createCita(cita)

        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '' 
        }           
        )
       
    }

    return ( 
       <Fragment>
           <h2>Crear cita</h2>

           { error ? <p className = 'alerta-error'>Todos los campos son obligatorios</p> : null}

           <form onSubmit = { handleCita }>
               <label>Nombre Mascota</label>
               <input 
                   type = 'text'
                   autoComplete = 'off'
                   name = 'mascota'
                   className = 'u-full-width'
                   placeholder = 'Nombre mascota'
                   value = { mascota }
                   onChange = { handleChange }
                />

                <label>Nombre Dueño</label>
                <input 
                   type = 'text'
                   autoComplete = 'off'
                   name = 'propietario'
                   className = 'u-full-width'
                   placeholder = 'Nombre dueño de la mascota'
                   value = { propietario }
                   onChange = { handleChange }
                />

                <label>Fecha</label>
                <input 
                   type = 'date'
                   name = 'fecha'
                   className = 'u-full-width'
                   value = { fecha }
                   onChange = { handleChange }
                />

                <label>Hora</label>
                <input 
                   type = 'time'
                   name = 'hora'
                   className = 'u-full-width'
                   value = { hora }
                   onChange = { handleChange }
                />

                <label>Síntomas</label>
                <textarea
                    name = 'sintomas'
                    className = 'u-full-width'
                    onChange = { handleChange }
                ></textarea>

                <button
                    type = 'submit'
                    className = 'add-cita'
                    value = { sintomas }
                >Agregar Cita</button>
           </form>
       </Fragment>
     )
}

Formulario.propTypes = {
    createCita: PropTypes.func.isRequired
}
 
export default Formulario