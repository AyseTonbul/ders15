import React from "react"
import { PuanGlobal } from "./Global"

function Puanlar() {
    const {puanlar} = React.useContext(PuanGlobal)

    return (
        <div className="d-flex justify-content-center gap-5 mb-5">
            <p className="bg-dark text-success h1 p-5">{puanlar.yesil}</p>
            <p className="bg-dark text-danger h1 p-5">{puanlar.kirmizi}</p>
            <p className="bg-dark text-warning h1 p-5">{puanlar.turuncu}</p>
        </div>
    )
}

export default Puanlar