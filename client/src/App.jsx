import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/bills" element={<BillPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
