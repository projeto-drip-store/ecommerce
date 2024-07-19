import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ProductList from "./pages/ProductListingPage";
import ProductView from "./pages/ProductViewPage";
import Cart from "./pages/CartPage";
import ConfirmarCompra from "./pages/ConfirmarCompraPage";
import Sucesso from "./pages/PaginaDeSucessoPage";
import Login from "./pages/LoginPage";
import Criar from "./pages/CriarContaPage";
import CriarFormulario from "./pages/CriarFormularioPage";
import Pedidos from "./pages/PedidosPage";
import Informacoes from "./pages/InformacoesPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ProductList/" element={<ProductList />} />
          <Route path="ProductView/" element={<ProductView />} />
          <Route path="Cart/" element={<Cart />} />
          <Route path="ConfirmarCompra/" element={<ConfirmarCompra />} />
          <Route path="Sucesso/" element={<Sucesso />} />
          <Route path="Login/" element={<Login />} />
          <Route path="Criar/" element={<Criar />} />
          <Route path="CriarFormulario/" element={<CriarFormulario />} />
          <Route path="Pedidos/" element={<Pedidos />} />
          <Route path="Informacoes/" element={<Informacoes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
