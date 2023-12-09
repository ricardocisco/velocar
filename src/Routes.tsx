import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Homepage/HomePage";
import CatalogyPage from "./pages/CatalogyPage/RentalPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aluguel" element={<CatalogyPage />} />
        <Route path="/pagamento" element={<PaymentPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;
