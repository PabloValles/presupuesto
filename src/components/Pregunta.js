import { useState } from 'react'

const Pregunta = () => {

    // Definir el state
    const [cantidad, setCantidad] = useState(0)

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad( parseInt(e.target.value, 10) )
    }

    // submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar formulario

        // Si se pasa la validación
    }


    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>
            
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