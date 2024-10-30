import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Favorite from "../pages/Favorite.js";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styles from "./App.module.css";
import "./App.font.css";

function App() {
  return (
    <Router>
      <Nav className={styles.nav} />
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
      <Footer className={styles.footer} />
    </Router>
  );
}

export default App;
