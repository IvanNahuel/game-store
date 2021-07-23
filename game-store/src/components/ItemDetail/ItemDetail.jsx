import React from 'react';
import Contador from '../Contador/Contador'

const ItemDetail = ({juego}) =>{
    console.log(juego);


    return (
        <div className="item-details-container">
            <div className="img-item-details">
                <img src={"."+juego.urlImagen} alt={juego.nombre}/> 
            </div>  
            <h2>{juego.nombre}</h2>
            <h4>{juego.descripcion}</h4>
            <Contador juego={juego}/>
        </div>
    );
};

export default ItemDetail;
