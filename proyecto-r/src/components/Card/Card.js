import { useState } from 'react';

import Description from '../Description/Description';

import "./Card.css"

export default function Card({infoPersonaje}) {

    let [hide,setHide]=useState(true);

    const showMore=()=>{
        setHide(false)
    }

    return(
        
            <div className="rounded card px-2 py-2 gap-3 card-color d-flex flex-row">
                <div className="d-flex flex-column align-items-center">
                    <img src={infoPersonaje.image}/>
                    <h3>{infoPersonaje.name}</h3>
                    {hide === false? "":<button className="btn btn-card w-40 p-2 align-self-end" onClick={showMore}>Know More...</button>}
                </div>

                
                {
                    hide === false? <Description status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:''
                }
                
            </div>
        
    )
    
}

//le pasamos algo de informacion de cada personaje al componente "Description" la informacion que necesita para la lista 

//para lograr que se oculte o aparezca cuando se clickean los botones,vamos a usar eventos y operador ternario

//operador ternario condicion?accion-true:accion-false;