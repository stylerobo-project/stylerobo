import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Favorite from "../pages/Favorite";
import PersonalColorMain from "../pages/PersonalColorMain";
import FavDiagnosis from "../pages/FavDiagnosis";
import FavResult from "../pages/FavResult";
import PersonalColorCheck from "../pages/PersonalColorCheck";
import PersonalImageUpload from "../pages/PersonalImageUpload";
import PersonalColorConsulting from "../pages/PersonalColorConsulting";
import PersonalResult from "../pages/PersonalResult";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyStyle from "../pages/MyStyle";
import MyStylePersonalDetail from "../pages/MyStylePersonalDetail";
import MyStyleFavDetail from "../pages/MyStyleFavDetail";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./App.module.css";
import "./App.font.css";

function App() {
  const [userName, setUserName] = useState(null);

  const handleLoginSuccess = (name) => {
    setUserName(name);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.statusCode === 200) {
        alert(data.data.message);
        setUserName(null);
      } else {
        alert("로그아웃 실패: " + data.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  };

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Nav userName={userName} onLogout={handleLogout} />
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/auth/login"
            element={
              <Login userName={userName} onLoginSuccess={handleLoginSuccess} />
            }
          />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/consulting/favorite" element={<Favorite />} />
          <Route
            path="/consulting/personal-color-main"
            element={<PersonalColorMain />}
          />
          <Route
            path="/consulting/favorite/diagnosis"
            element={<FavDiagnosis />}
          />
          <Route path="/consulting/favorite/result" element={<FavResult />} />
          <Route
            path="/personal-color-check"
            element={<PersonalColorCheck />}
          />
          <Route
            path="/personal-image-upload"
            element={<PersonalImageUpload />}
          />
          <Route
            path="/personal-color-consulting"
            element={<PersonalColorConsulting />}
          />
          <Route
            path="/personal-color-consulting/personal-color-result"
            element={<PersonalResult />}
          />
          <Route path="/mystyle" element={<MyStyle />} />
          <Route
            path="/mystyle/Personal-Detail"
            element={<MyStylePersonalDetail />}
          />
          <Route path="/mystyle/Fav-Detail" element={<MyStyleFavDetail />} />
        </Routes>
      </div>
      <Footer className={styles.footer} />
    </Router>
  );
}

export default App;
