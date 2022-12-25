import React from "react"
import {TemaGlobal} from "./contexts/GlobalVeriler"

function Lacivert() {
    const globalTemaRengi = React.useContext(TemaGlobal)

    let butonClass = globalTemaRengi === "acik" ? "btn btn-light" : "btn btn-dark"

    return (
        <div>
            <h4>Lacivert component</h4>
            <button className={butonClass}>Action</button>
        </div>
    )
}

export default Lacivert