import Turuncu from "./Turuncu";
import React from "react";

function App() {
  const[tema,temaGuncelle]=React.useState("acik")

  function temaDegistir(){
    if(tema==="acik"){
      temaGuncelle("koyu")
    }else {
      temaGuncelle("acik")
    }

  }
  return (
    <div className="container p3">
   <h1 className="d-flex justify-content-between">Ana Compenent <button onClick={temaDegistir}>{tema==="acik"?"koyu":"acik" }</button></h1>
   <Turuncu tema={tema}/>
   </div>
  );
}

export default App;
