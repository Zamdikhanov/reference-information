import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LampsPage from "./pages/LampsPage/LampsPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFound from "./pages/NotFound/NotFound";
import css from "./styles/App.module.scss";

function App() {
  return (
    <div className={css.app_container} >
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lamps" element={<LampsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
