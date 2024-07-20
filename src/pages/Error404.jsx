import { Link } from "react-router-dom";

function Error() {

  return (
    <>
      <h1>Error 404</h1>
      <button><Link to="/ProductList">Voltar para Home</Link></button>
    </>
  )
}

export default Error