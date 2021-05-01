import React, {useState} from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const Validar = (event) => {
        event.preventDefault()
        // Check if nombre is empty
        if(!nombre.trim()){
            return
        }
        //Checks if edad is empty
        if(!edad.trim()){
            return
        }
    }

    return (
        <div className='container'>
            <h1>
                Formulario de prueba
            </h1>
            <form onSubmit={Validar} className='form-group'>
                <input 
                placeholder='Indroduce el nombre' 
                className='form-control mb-3' 
                type='text'
                // Cuando se produzca el evento (e), lanza una callback y setea el valor que se cambio en el evento
                onChange={(e) =>{setNombre(e.target.value)}}
                />
                <input 
                placeholder='Indroduce la edad' 
                className='form-control mb-3' 
                type='text'
                onChange={(e) =>{setEdad(e.target.value)}}
                />
                <input 
                className='btn btn-info btn-block mb-3' 
                type='submit'/>
            </form>
            <p>
                Nombre ingresado: {nombre}
                Edad ingresada: {edad}

            </p>
        </div>
    )
}

export default Formulario