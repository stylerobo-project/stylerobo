import { useState } from "react";
import Container from "../components/Container";
import styles from "./Login.module.css";
import Button from "../components/Button.js";
import { useNavigate } from "react-router-dom";
import robot from "../assets/robot3.png";

function Login({ userName, onLoginSuccess }) {
  // userName prop 추가
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navHome = () => {
    navigate("/");
  };

  const navSignup = () => {
    navigate("/auth/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // 이미 로그인 상태인 경우
    if (userName) {
      alert("이미 로그인 상태입니다."); // 로그인 상태 확인
      return;
    }

    const requestData = {
      userName: username,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (data.statusCode === 200 && data.data.status === 1) {
        alert(data.data.message);
        onLoginSuccess(username); // 로그인 성공 시 사용자 이름 설정
        navHome();
      } else {
        alert("로그인 실패: " + data.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <Container className={styles.welcomecontainer}>
            <strong>
              반갑습니다! 당신의 패션 스타일을 찾아주는 스타일 로보입니다.
            </strong>
            <div className={styles.figure}>
              <img src={robot} alt="로봇 이미지" />
            </div>
            <div className={styles.heading}>STYLEROBO</div>
          </Container>
          <Container className={styles.logincontainer}>
            <div className={styles.heading2}>스타일로보 로그인</div>

            <form onSubmit={handleLogin}>
              <input
                type="text"
                id="id"
                placeholder="아이디"
                className={styles.inputcontainer}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="password"
                id="password"
                placeholder="비밀번호"
                className={styles.inputcontainer}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className={styles.button1} type="submit">
                로그인하기
              </Button>
              <Button className={styles.button2} onClick={navSignup}>
                회원가입하기
              </Button>
              <div className={styles.text2}>
                아이디 혹은 비밀번호를 잊으셨나요?
                <div className={styles.text3}>아이디/비밀번호 찾기</div>
              </div>
            </form>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default Login;
