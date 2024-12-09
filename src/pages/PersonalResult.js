import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/Container";
import LoadingPage from "../components/Loading";
import styles from "./PersonalResult.module.css";
import share from "../assets/share.png";
import save from "../assets/save.png";
import robot from "../assets/robot2.png";
import user from "../assets/robot3.png";

function PersonalResult() {
  const location = useLocation();
  const { previewImage, resultData } = location.state || {}; // 데이터를 수신
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (resultData) {
      // 데이터가 존재하면 로딩 상태를 false로 변경
      setTimeout(() => setLoading(false), 1000); // 로딩 애니메이션을 1초 동안 표시
    } else {
      setLoading(false); // 데이터가 없을 경우 즉시 로딩 종료
    }
  }, [resultData]);

  if (loading) {
    return <LoadingPage robotImage={robot} />; // 로딩 화면 표시
  }

  if (!resultData) {
    return <div>결과 데이터를 불러오지 못했습니다. 다시 시도해주세요.</div>;
  }

  return (
    <>
      <div className={styles.bg} />
      <Container className={styles.container}>
        <div className={styles.texts}>
          <div className={styles.heading}>퍼스널 컬러 진단 결과</div>
          <div className={styles.figure}>
            {previewImage ? (
              <img src={previewImage} alt="선택한 이미지 미리보기" />
            ) : (
              <img src={user} alt="기본 이미지" />
            )}
          </div>
          <p className={styles.description}>
            당신은 <strong>{resultData.personalColor} 톤</strong> 입니다!
            <br />
            당신에게 어울리는 스타일은 다음과 같아요:
          </p>
          <p className={styles.hashtag}>{resultData.recommendations}</p>
        </div>
        <div className={styles.stylerecommendation}>
          <img
            src={robot}
            alt="robot"
            className={styles.stylerecommendationIcon}
          />

          <div className={styles.stylerecommendationDetail}>
            <div className={styles.recommendationHeader}>
              STYLE ROBO
              <span className={styles.subHeader}>가 추천해주는 코디에요!</span>
            </div>

            <div className={styles.imageGrid}>
              {[...Array(8)].map((_, index) => (
                <img key={index} src={user} alt={`추천 스타일 ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.saveButton}>
            <img src={save} alt="save" className={styles.buttonIcon} />
            My Style에 저장하기
          </button>
          <button className={styles.shareButton}>
            <img src={share} alt="share" className={styles.buttonIcon} />
            친구에게 공유하기
          </button>
        </div>
      </Container>
    </>
  );
}

export default PersonalResult; //personalResult.js
