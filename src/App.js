import React from "react";
import { varsayilanListe, islemFonksiyonu } from "./reducers/Yapilacaklar";

function App() {
  const [yeniIs, yeniIsguncelle] = React.useState("")
  const [yapilacaklarListesi, vekilFonksiyon] = React.useReducer(islemFonksiyonu, varsayilanListe);

  const durumDegistir = (yapilacakIs) => {
    vekilFonksiyon({ type: "COMPLETE", id: yapilacakIs.id });
  };

  const isKaydet = () => {
    vekilFonksiyon({ type: "EKLE", baslik: yeniIs });
  }

  const isSil = (isId) => {
    vekilFonksiyon({ type: "SIL", id: isId });
  }

  return (
    <>
      <section className="container">
        <input type="text" value={yeniIs} onChange={(olay) => yeniIsguncelle(olay.target.value)} />
        <button onClick={isKaydet}>Kaydet</button>

        {yapilacaklarListesi.map((yapilacakIs) => (
          <div className="d-flex gap-5 justify-content-between" key={yapilacakIs.id}>
            <label>
              <input
                type="checkbox"
                checked={yapilacakIs.complete}
                onChange={() => durumDegistir(yapilacakIs)}
              />
              {yapilacakIs.title}
            </label>

            <a onClick={(olay)=>{ olay.preventDefault(); isSil(yapilacakIs.id)  }} href="#">Sil</a>
          </div>
        ))}

      </section>
    </>
  );
}

export default App;
