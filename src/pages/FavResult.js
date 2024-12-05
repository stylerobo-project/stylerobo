import Container from "../components/Container";
import styles from "./FavResult.module.css";
import person from "../assets/person.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import robot from "../assets/robot3.png";
import user from "../assets/robot3.png";

function FavResult() {
  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <div className={styles.heading}>취향 스타일 진단 결과</div>
        </div>
        <div className={styles.stylerecommendation}>
          <img
            src={robot}
            alt="robot"
            className={styles.stylerecommendationIcon}
          />

          <div className={styles.stylerecommendationDetail}>
            <div className={styles.recommendationHeader}>
              당신이 선호하는 스타일은 다음과 같아요!
            </div>

            <div className={styles.imageGrid}>
              <img src={user} alt="추천 스타일 1" />
              <img src={user} alt="추천 스타일 2" />
              <img src={user} alt="추천 스타일 3" />
              <img src={user} alt="추천 스타일 4" />
              <img src={user} alt="추천 스타일 5" />
              <img src={user} alt="추천 스타일 6" />
              <img src={user} alt="추천 스타일 7" />
              <img src={user} alt="추천 스타일 8" />
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.saveButton}>
            <img src={share} alt="share" className={styles.buttonIcon} />
            My Style에 저장하기
          </button>
          <button className={styles.shareButton}>
            <img src={save} alt="save" className={styles.buttonIcon} />
            친구에게 공유하기
          </button>
        </div>
      </Container>
    </>
  );
}

export default FavResult;
