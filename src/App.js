import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import WelcomePage from './pages/Welcome/WelcomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginPage from "./pages/Login/LoginPage";

let page = (
  <Routes>
    <Route path="/" element={<WelcomePage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

function App() {
  return (
    <div className="App">
      <Header />
      {page}
      <Footer />
    </div>
  );
}

export default App;
