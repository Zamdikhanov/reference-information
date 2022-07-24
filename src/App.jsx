import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
