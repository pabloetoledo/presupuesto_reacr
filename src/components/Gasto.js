import React from 'react';

const Gasto = ({gasto, eliminarGasto}) => {

    return (

        <li className="gastos">
            <p>
                {gasto.nombreGasto}
                <span className="gasto">${gasto.cantidadGasto}</span>

                <button  type="button" onClick={ ()=> eliminarGasto(gasto.id) }>Eliminar</button>
            </p>
        </li>
    ); 

}
 
export default Gasto;