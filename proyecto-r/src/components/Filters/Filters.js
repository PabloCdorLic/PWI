import { Fragment } from "react";

import Filter from "../Filter/Filter";

export default function Filters({filterCharacter}) {

    return(
        <Fragment>
         <section className="section-filters">
            <h2 className="h2-filters">Filters</h2>
            <form className="d-flex justify-content-around">
                <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
                <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
                <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
                <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
                <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
            </form>
         </section>
        </Fragment>
       
    )
}