import React, {Fragment, useState} from 'react'

export const Contador = () => {

    const [numero, setNumero] = useState(0)
    const Aumentar = () => {
        setNumero(numero + 1)
    }

    const Reducir = () => {
        setNumero(numero - 1)
    }

    return (
        <Fragment>
            <h2 className='App mt-5'>Cantidad del contador: {numero}</h2>
            <button onClick={Aumentar} >aumentar</button>
            <button onClick={Reducir} >Reducir</button>
        </Fragment>
    )
}

export default Contador