

 function Lacivert({temaRengi}){
    let buttonClass=temaRengi=== "acik" ? "btn btn-light":"btn btn-dark"

  return (
    <div>
        <h4>Lacivert Component</h4>
        <button className={buttonClass}>Action</button>
    </div>
  )
}
export default Lacivert
