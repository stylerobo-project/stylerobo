import React, { useState } from "react";
import Container from "../components/Container";
import styles from "./MyStyleFavDetail.module.css";
import Mystyle from "../assets/mystyle.png";
import robot from "../assets/robot.png";
import robot2 from "../assets/robot2.png";
import robot3 from "../assets/robot3.png";
import youtube from "../assets/youtube.svg";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";

const ImageSlider = ({ images, date, title, tags }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < images.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container className={styles.container}>
      <div className={styles.textimagecontainer}>
        <div className={styles.texts}>
          <div className={styles.heading}>
            <p className={styles.date}>{date}</p>
            <strong>{title}</strong>
            <p>{tags}</p>
          </div>
        </div>
        <div className={styles.image}>
          <button className={styles.arrowButton} onClick={goToPrevious}>
            <img src={LeftArrow} alt="Previous" />
          </button>
          <div className={styles.imageContainer}>
            {images.slice(currentIndex, currentIndex + 2).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Mystyle"
                className={styles.imageItem}
              />
            ))}
          </div>
          <button className={styles.arrowButton} onClick={goToNext}>
            <img src={RightArrow} alt="Next" />
          </button>
        </div>
      </div>
    </Container>
  );
};

function MyStyleFavDetail() {
  const images = [Mystyle, robot, robot2, robot3]; // 이미지 배열
  const images2 = [youtube, robot2, robot3];
  return (
    <>
      <ImageSlider
        images={images}
        date="2024.10.21."
        title="클래식"
        tags="내가 적었던 입고 싶은 스타일에 대한 부가 설명을 보여주기"
      />
      <ImageSlider
        images={images2}
        date="2024.12.01."
        title="캐주얼"
        tags="내가 적었던 입고 싶은 스타일에 대한 부가 설명을 보여주기"
      />
    </>
  );
}

export default MyStyleFavDetail;
