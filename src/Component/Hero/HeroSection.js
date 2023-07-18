import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = (props) => {
  const { data, isLoading, style } = props.posts;

  const [slideIndex, setSlideIndex] = React.useState(1);

  // Previous Button Function
  const nextSlide = () => {
    if (slideIndex !== data?.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSlideIndex(1);
    }
  };

  // Previous Button Function
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(1);
    }
  };

  // Carousel dots
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const Spinner = () => (
    <div
      style={{
        display: "flex",
        height: 400,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
  return (
    <div className="hero-carousel" style={style}>
      {isLoading ? <Spinner /> : null}

      {!isLoading &&
        data?.map((item, index) => {
          if (index + 1 === slideIndex) {
            return (
              <div className="hero-slide" key={index}>
                <div className="hero-data">
                  <div className="hero-title">{item.title}</div>
                  <NavLink to={"/post/" + item.id} state={item}>
                    <button>Read Article</button>
                  </NavLink>
                </div>
                <div className="hero-overlay">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            );
          }
          return null;
        })}
      {!isLoading && (
        <>
          <Sliderbtn moveSlide={nextSlide} direction={"next"} />{" "}
          {/* Next Button */}
          <Sliderbtn moveSlide={prevSlide} direction={"prev"} />{" "}
          {/* Prev Button  */}
          <div className="containerdots">
            {Array.from({ length: data?.length }).map((item, index) => (
              <div
                key={index}
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
const Sliderbtn = (props) => {
  return (
    <button
      onClick={props.moveSlide}
      className={
        props.direction === "next"
          ? "btn-slide next shadow-sm"
          : "btn-slide prev shadow-sm"
      }
    >
      <i
        className={
          props.direction === "next" ? "fa fa-arrow-right" : "fa fa-arrow-left"
        }
      />
    </button>
  );
};
export default React.memo(HeroSection);
