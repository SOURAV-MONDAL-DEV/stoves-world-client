import React from "react";
import Banner from "../../Pages/Home/Banner/Banner";
import "./ImgSlider.css";
import stove0 from "../../img/stove0.png";
import stove2 from "../../img/logo.png";

function ImgSlider() {
  const colors = [
    {
      heading: "Lets Fun",
      details:"somthing",
      color1: "cyan-500",
      color2: "lime-500",
      imgSrc: "jdskhfkh",
    },
    {
      heading: "Buy stove",
      details:"somthing",
      color1: "cyan-500",
      color2: "lime-500",
      imgSrc: "jdskhfkh",
    },
    {
      heading: "Sell stove",
      details:"somthing",
      color1: "cyan-500",
      color2: "lime-500",
      imgSrc: "jdskhfkh",
    },
  ];
  const delay = 2500;

  function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((bnr, index) => (
            <div
              className="slide"
              key={index}
              // style={{ backgroundColor }}
            >
              <Banner
                bnr={bnr}
              ></Banner>
            </div>
          ))}
        </div>

        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return <Slideshow></Slideshow>;
}

export default ImgSlider;
