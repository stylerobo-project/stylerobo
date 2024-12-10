import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // useNavigate 추가
import Container from "../components/Container";
import LoadingPage from "../components/Loading";
import styles from "./PersonalResult.module.css";
import save from "../assets/save.png";
import robot from "../assets/robot2.png";
import user from "../assets/robot3.png";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const springImages = importAll(
  require.context(
    "../assets/personalImage/springMan",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const summerImages = importAll(
  require.context(
    "../assets/personalImage/summerMan",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const fallImages = importAll(
  require.context(
    "../assets/personalImage/fallMan",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const winterImages = importAll(
  require.context(
    "../assets/personalImage/winterMan",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

function PersonalResult() {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate 훅 추가
  const { previewImage, resultData } = location.state || {};
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);
  const [seasonImages, setSeasonImages] = useState([]);

  useEffect(() => {
    if (resultData) {
      setLoading(false);
      const { personalColor, gender } = resultData;
      let recommendation = "";

      if (personalColor === "spring") {
        recommendation +=
          "# 아이보리 계열 # 쉬폰 or 폴리스 소재 \n #밝은 컬러 #화사한 느낌 \n # 페미닌 & 러블리 스타일";
        setSeasonImages(
          gender === "male"
            ? Object.values(springImages)
            : Object.values(
                require.context(
                  "../assets/personalImage/springWoman",
                  false,
                  /\.(png|jpe?g|svg)$/
                )
              )
        );
      } else if (personalColor === "summer") {
        recommendation +=
          "# 연한 회색 or 소라색 계열 # 쉬폰 or 레이스 소재 \n #차가운 컬러 #화사한 느낌 \n # 페미닌 & 캐주얼 스타일";
        setSeasonImages(
          gender === "male"
            ? Object.values(summerImages)
            : Object.values(
                require.context(
                  "../assets/personalImage/summerWoman",
                  false,
                  /\.(png|jpe?g|svg)$/
                )
              )
        );
      } else if (personalColor === "fall") {
        recommendation +=
          "#갈색 계열 #가죽소재 \n #짙은 컬러  #진중한 이미지 \n #에스닉 & 보헤미안 스타일";
        setSeasonImages(
          gender === "male"
            ? Object.values(fallImages)
            : Object.values(
                require.context(
                  "../assets/personalImage/fallWoman",
                  false,
                  /\.(png|jpe?g|svg)$/
                )
              )
        );
      } else if (personalColor === "winter") {
        recommendation +=
          "# 비비드한 색상 계열 # 빳빡한 시스루 or 스웨이드 소재 \n #화이트 & 블랙 #차갑고 모던한 느낌 \n # 오피스 & 올블랙 스타일";
        setSeasonImages(
          gender === "male"
            ? Object.values(winterImages)
            : Object.values(
                require.context(
                  "../assets/personalImage/winterWoman",
                  false,
                  /\.(png|jpe?g|svg)$/
                )
              )
        );
      }

      setRecommendations(recommendation);
    } else {
      setLoading(false);
    }
  }, [resultData]);
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("링크가 복사되었습니다!");
      })
      .catch((err) => {
        console.error("링크 복사 실패:", err);
      });
  };

  const handleSave = () => {
    const userId = 1; // 실제 사용자 ID를 사용해야 함
    const personalColorResultId = resultData?.personalColor; // 데이터베이스에 저장할 값
    const favoriteFashionResultId = resultData?.favoriteFashion; // 데이터베이스에 저장할 값

    // 로그인 상태 확인
    const token = localStorage.getItem("token"); // 예: JWT 토큰을 로컬 스토리지에서 가져옴

    if (!token) {
      alert("로그인이 필요합니다.");
      // 로그인 페이지로 리디렉션
      navigate("/auth/login");
      return;
    }

    fetch("http://localhost:8080/api/myStyle/color", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // 올바른 형식으로 헤더 추가
      },
      body: JSON.stringify({
        user_id: userId,
        personal_color_result_id: personalColorResultId,
        favorite_fashion_result_id: favoriteFashionResultId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (data.statusCode === 200) {
          alert("저장 성공!");
          navigate("/mystyle/Personal-Detail"); // 저장 후 상세 페이지로 이동
        } else {
          alert("저장 실패: " + data.responseMessage);
        }
      })
      .catch((error) => {
        console.error("저장 중 오류 발생:", error);
        alert("저장 중 오류가 발생했습니다.");
      });
  };

  if (loading) {
    return <LoadingPage robotImage={robot} />;
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
            당신에게 어울리는 스타일은 다음과 같아요
          </p>
          <p className={styles.hashtag}>{recommendations}</p>
        </div>

        <div className={styles.stylerecommendation}>
          <img
            src={robot}
            alt="robot"
            className={styles.stylerecommendationIcon}
          />
          <div className={styles.stylerecommendationDetail}>
            <div className={styles.recommendationHeader}>
              STYLEROBO
              <span className={styles.subHeader}>가 추천해주는 코디에요!</span>
            </div>

            <div className={styles.imageGrid}>
              {seasonImages.map((src, index) => (
                <img key={index} src={src} alt={`추천 스타일 ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.saveButton} onClick={handleSave}>
            <img src={save} alt="save" className={styles.buttonIcon} />
            My Style에 저장하기
          </button>
        </div>
      </Container>
    </>
  );
}

export default PersonalResult;
