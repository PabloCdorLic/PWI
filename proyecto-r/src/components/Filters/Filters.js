import { Fragment } from "react";

import Filter from "../Filter/Filter";

export default function Filters({filterCharacter}) {
   
    let submenu=document.querySelector("form");
    console.log("Punto de Prueba")
    console.log(submenu);
    
    
    let cambiar=true;
    

    let menufiltros= ()=>{
    
        if(cambiar){
            submenu.classList.add("mostrar");
            submenu.classList.remove("ocultar");
        }else{
            submenu.classList.remove("mostrar");
            submenu.classList.add("ocultar");
        }                
        cambiar = !cambiar;
        console.log(cambiar);
    };
    

    return(
        <Fragment>
        <section className="todo">
            <section className="section-filters">
                <h2 className="h2-filters">Filters</h2>
                <button className="menu-hamburguesa" onClick={menufiltros}> 
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="3.5" x2="40" y2="3.5" stroke="#6ECCAF"/>
                    <line y1="14.5" x2="40" y2="14.5" stroke="#6ECCAF"/>
                    <line y1="26.5" x2="40" y2="26.5" stroke="#6ECCAF"/>
                    <circle cx="33.5" cy="3.5" r="3" fill="#344D67" stroke="#6ECCAF"/>
                    <circle cx="20.5" cy="26.5" r="3" fill="#344D67" stroke="#6ECCAF"/>
                    <circle cx="7.5" cy="14.5" r="3" fill="#344D67" stroke="#6ECCAF"/>
                    </svg>
                </button>
            </section>
            
            <div className="d-flex flex-column align-items-center gap-1">
                <form>
                    <div >
                        <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
                        <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
                        <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
                        <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
                        <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
                    </div>
                </form>
            </div>     
        </section>

            <form className="d-flex justify-content-center gap-3 flex-wrap">
        
                <div className="filtrosbis">
                        
                    <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
                    <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
                    <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
                    <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
                    <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
                </div>
            </form>

        


        </Fragment>
       
    )
};