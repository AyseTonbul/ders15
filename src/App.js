import React from "react";
import Puanlar from "./Puanlar";
import Butonlar from "./Butonlar";
import { PuanGlobal } from "./Global";

function App() {
  const [puanlar, puanlariGuncelle] = React.useState({kirmizi:0, yesil:0, turuncu: 0})


  return (
    <PuanGlobal.Provider value={{puanlar, puanlariGuncelle}}>
      <section className="container">
        <Puanlar />
        <Butonlar />
      </section>
    </PuanGlobal.Provider>
  );
}

export default App;
