import React from "react"
import {KullaniciGlobal} from "./contexts/GlobalVeriler"
import Lacivert from "./Lacivert"

function Yesil() {
    const globalKullanici = React.useContext(KullaniciGlobal)

    return (
        <div >
            <h3>Yesil component</h3>
            <p>{globalKullanici.ad}</p>
            <p>{globalKullanici.soyad}</p>
            <Lacivert />
        </div>
    )
}

export default Yesil