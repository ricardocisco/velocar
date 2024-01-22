import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Homepage/HomePage";
import CatalogyPage from "./pages/CatalogyPage/RentalPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import SellPage from "./pages/SellPage/SellPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aluguel" element={<CatalogyPage />} />
        <Route path="/pagamento/:carroId" element={<PaymentPage />} />
        <Route path="/vender" element={<SellPage />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/registrar" element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes;
