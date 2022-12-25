import React from "react";
import { PuanGlobal } from "./Global";

function Butonlar() {
    const {puanlar, puanlariGuncelle} = React.useContext(PuanGlobal)

    function guncelle(renk) {
        let yeniPuanlar;
        if( renk === "yesil") {
            yeniPuanlar = { ...puanlar, yesil: puanlar.yesil+1 }
        }

        if( renk === "kirmizi") {
            yeniPuanlar = { ...puanlar, kirmizi: puanlar.kirmizi+1 }
        }

        if( renk === "turuncu") {
            yeniPuanlar = { ...puanlar, turuncu: puanlar.turuncu+1 }
        }

        puanlariGuncelle(yeniPuanlar)
    }


    return (
        <div className="d-flex justify-content-center gap-2">
            <button onClick={()=>{ guncelle("yesil") }} className="btn btn-outline-success">Yeşil</button>
            <button onClick={()=>{ guncelle("kirmizi") }} className="btn btn-outline-danger">Kırmızı</button>
            <button onClick={()=>{ guncelle("turuncu") }}className="btn btn-outline-warning">Turuncu</button>
        </div>
    )
}

export default Butonlar