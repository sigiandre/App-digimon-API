import { React } from 'react';
import './App.css';

const Digimon = (props) => {
    return(
    <div className="digiCard">
        <div className="nombre">{props.nombre}</div>
        <div className="nivel">Nivel: {props.nivel}</div>
        <img className="imagen" src={props.img} alt="" />
    </div>
    )
}

export default Digimon;