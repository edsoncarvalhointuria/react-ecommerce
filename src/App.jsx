import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import Checkout from "./pages/Checkout/Checkout";
import { useCartContext } from "./contexts/contextCart";

function App() {
    const { productsList } = useCartContext();
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/checkout"
                        element={
                            Object.keys(productsList).length ? (
                                <Checkout />
                            ) : (
                                <Navigate to={"/"} />
                            )
                        }
                    />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
