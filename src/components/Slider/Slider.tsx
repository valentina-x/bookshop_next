import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../public/slides/slide1.jpg";
import slide2 from "../../../public/slides/slide2.jpg";
import slide3 from "../../../public/slides/slide3.jpg";
import arrow from "../../../public/icons/arrow.svg";
import styles from "./styles.module.scss";

const Slider: React.FC = () => {
  return (
    <>
      <div className={styles.sliderouter}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
          className={styles.slider}
        >
          <SwiperSlide className={styles.slider_slide}>
            <Image
              src={slide1}
              alt={"slide 1"}
              width={1120}
              height={702}
              priority
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slider_slide}>
            <Image src={slide2} alt={"slide 2"} width={1120} height={702} />
          </SwiperSlide>
          <SwiperSlide className={styles.slider_slide}>
            <Image src={slide3} alt={"slide 3"} width={1120} height={702} />
          </SwiperSlide>
        </Swiper>

        <div className={`${styles.topscard} ${styles.topscard_type1}`}>
          <span>
            Change <br />
            old book <br /> on new
          </span>
          <Image src={arrow} alt={"arrow icon"} width={55} height={12} />
        </div>
      </div>
      <div className={`${styles.topscard} ${styles.topscard_type2}`}>
        <span>
          top <br /> 100 <br />
          books <br />
          2022
        </span>
        <Image src={arrow} alt={"arrow icon"} width={55} height={12} />
      </div>
    </>
  );
};

export default Slider;
