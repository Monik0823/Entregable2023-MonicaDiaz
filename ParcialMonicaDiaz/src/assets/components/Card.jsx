import React, { useState } from 'react'

const Card = () => {

    const [nombre, setNombre] = useState("")
    const [personaje, setPersonaje] = useState("")
    const [resultado, setResultado] = useState ("")

    const handleSubmit = e => {
        e.preventDefault()
    

    if (nombre.trim() === "" || nombre.length <= 2 || Personaje.length < 6) {
        console.log("Por favor chequea que la información sea correcta");
    }

    const mensaje = `Hola ${nombre}! tu personaje favorito de Marvel es: ${personaje}`
    
    setResultado (mensaje)
    


    return (
        <div>
            <h1>Personajes de Marvel</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Tu Nombre: </label>
                    <input
                        type="text"
                        placeholder='Ingresa tu Nombre'
                        id='nombre'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="personaje">Tu Personaje: </label>
                    <input
                        type="text"
                        placeholder='Ingresa el nombre de tu personaje'
                        id='personaje'
                        value={personaje}
                        onChange={e => setPersonaje(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <button type='submit'>
                        Enviar
                    </button>
                </div>

            </form>
            {resultado && <p>{resultado}</p>}
        </div>

    )
}
}
export default Card