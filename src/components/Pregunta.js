import React, {Fragment, useState} from 'react';
import Error from './Error';

function Pregunta(props){

    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props;

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad) ){ //Si cantidad es menor a 1 o si no es un numero
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);
    }

    return(
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

            <form
                onSubmit = {agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Agrega tu presupuesto"
                    onChange={e => guardarCantidad( parseInt(e.target.value, 10))}
                />

                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;