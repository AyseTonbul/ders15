import React from "react";
import Turuncu from "./Turuncu";

import {TemaGlobal, KullaniciGlobal} from "./contexts/GlobalVeriler";

function App() {
  const [tema, temaGuncelle] = React.useState("acik")
  const [kullanici, kullaniciGuncelle] = React.useState({})

  React.useEffect(()=>{
    kullaniciGuncelle({ad:"Ahmet", soyad:"Yılmaz"})
  }, [])

  function temaDegistir() {
    if( tema === "acik" ) {
      temaGuncelle("koyu")
    } else {
      temaGuncelle("acik")
    }
  }

  return (
    <TemaGlobal.Provider value={tema}>
      <KullaniciGlobal.Provider value={kullanici}>
        <div className="container p-3">
          <h1 className="d-flex justify-content-between">Ana Component  <button onClick={temaDegistir}>{tema==="acik"?"Koyu":"Açık"}</button> </h1>
          <Turuncu />
        </div>
      </KullaniciGlobal.Provider>
    </TemaGlobal.Provider>
  );
}

export default App;
