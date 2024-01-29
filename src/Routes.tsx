import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Homepage/HomePage";
import CatalogyPage from "./pages/CatalogyPage/RentalPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import SellPage from "./pages/SellPage/SellPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import ResetPassword from "./pages/Login/ResetPassword";
import HowWork from "./pages/HowWork/HowWork";
import Sobre from "./pages/Sobre/Sobre";


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
        <Route path="/resetPassword" element={<ResetPassword/>}></Route>
        <Route path="/comoFunciona" element={<HowWork/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
    </Router>
  )
}

export default AppRoutes;
