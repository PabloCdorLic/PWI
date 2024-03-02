import {Link} from 'react-router-dom';

import './BotonInicio.css'



export default function BotonInicio({nombreBoton,pasaje}){

   /* let cambiocolor= ()=>{
        let colorverde = document.getElementsByClassName("btn-inicio");

        console.dir(colorverde);

        colorverde[0].style.backgroundColor="#6eccaf";
        

        
    }

    
    let cambiocolor1 = ()=>{
        let colorazul = document.getElementsByClassName("btn-inicio");

        console.dir(colorazul);

        colorazul[0].style.backgroundColor="#344d67";
                
    }*/



    
    return(
        <Link className="btn-inicio m-2" /*onMouseOver={cambiocolor} onMouseOut={cambiocolor1}  */ to={pasaje}>{nombreBoton}</Link>
    )
}