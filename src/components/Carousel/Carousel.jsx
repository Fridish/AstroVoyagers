import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import ArrowLeft from "../../../public/arrowLeft.svg?react";
import ArrowRight from "../../../public/arrowRight.svg?react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevBtn = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? children.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextBtn = () => {
    const isLastSlide = currentIndex === children.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {}, [currentIndex]);
  return (
    <main className={styles.carousel}>
      <div>
        <div className={styles.content} key={currentIndex}>
          {React.cloneElement(children[currentIndex])}
        </div>
        <div className={styles.buttons}>
          <button className={styles.prevButton} onClick={prevBtn}>
            <ArrowLeft />
          </button>
          <button className={styles.nextButton} onClick={nextBtn}>
            <ArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
};
export default Carousel;
