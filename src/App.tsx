import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AccessoriesDetailPage from './pages/AccessoriesDetailPage/AccessoriesDetailPage';
import AccessoriesPage from './pages/AccessoriesPage/AccessoriesPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import LampDetailPage from './pages/LampDetailPage/LampDetailPage';
import LampsPage from './pages/LampsPage/LampsPage';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import css from './styles/App.module.scss';

function App() {
    return (
        <div className={css.app_container}>
            <Header />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/lamps" element={<LampsPage />} />
                <Route path="/lamps/:id" element={<LampDetailPage />} />
                <Route path="/accessories" element={<AccessoriesPage />} />
                <Route path="/accessories/:id" element={<AccessoriesDetailPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />

            <ToastContainer />
        </div>
    );
}

export default App;
