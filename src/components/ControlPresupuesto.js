import PropTypes from 'prop-types';
import {revisarPresuesto} from '../helpers';


const ControlPresupuesto = ( {presupuesto, restante} ) => {

    return (
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresuesto(presupuesto, restante)} >
                Restante: $ {restante}
            </div>
        </>
    )
}

ControlPresupuesto.protoTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
 
export default ControlPresupuesto;