import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props){

    const {guardarGasto, guardarCrearGasto} = props;

    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);
    

    const agregarGasto = e => {
        e.preventDefault();

        //validad
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true);
            return;
        }

        //constuimos objeto gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id:shortid.generate(0)
        }

        guardarCrearGasto(true);

        guardarError(false);
        guardarGasto(gasto);

        guardarNombreGasto('');
        guardarCantidadGasto('');

    }

    return(
        <form
          onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>  

            <div className="campo">
                <label>Cantidad</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                    value={cantidadGasto}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>

        </form>
    )

}

export default Formulario;