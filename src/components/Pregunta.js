import { useState } from 'react'
import Error from './Error';

const Pregunta = ( {guardarPresupuesto, guardarRestante, actualizarPregunta} ) => {

    // Definir el state
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad( parseInt(e.target.value, 10) )
    }

    // submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar formulario
        if (cantidad < 1 || isNaN(cantidad) ) {
            setError(true)
            return;
        }

        // Si se pasa la validación
        setError(false)
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
    }


    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>
            {
                error ? <Error mensaje="El presupuesto es Incorrecto" /> : null
            }

            
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </>
     );
}
 
export default Pregunta;