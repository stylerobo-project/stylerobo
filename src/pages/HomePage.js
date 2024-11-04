import Container from "../components/Container";
import styles from "./HomePage.module.css";
import SeasonImg from "../assets/season.png";

function HomePage() {
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <h1 className={styles.heading}>
            <strong>Stylerobo</strong>
          </h1>
          <p className={styles.description}>
            StyleroboStylerobovvvvvvvv
            <br />
            Stylerobo
          </p>
        </div>
        <div className={styles.figure}>
          <img src={SeasonImg} alt="봄여름가을겨울" />
        </div>
      </Container>
    </>
  );
}

export default HomePage;
