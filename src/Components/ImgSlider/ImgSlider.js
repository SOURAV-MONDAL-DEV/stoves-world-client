import React from "react";
import Banner from "../../Pages/Home/Banner/Banner";
import "./ImgSlider.css";
import stove0 from "../../img/stove0.png";
import stove2 from "../../img/logo.png";

function ImgSlider() {
  const colors = [
    {
      heading: "Wellcome To The Biggest Stove Market",
      details: "Buy Sell or Promot your product over 1 Million People ",
      colorA: "rose-500",
      colorB: "pink-500",
      imgSrc: "jdskhfkh",
    },
    {
      heading: "Buy stove",
      details: "somthing",
      colorA: "green-500",
      colorB: "pink-500",
      imgSrc: "jdskhfkh",
    },
    {
      heading: "Sell stove",
      details: "somthing",
      colorA: "rose-500",
      colorB: "cyan-500",
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
          <div className="slide" key={0}>
            <div
              className={`md:flex whitespace-normal mb-2 mt-10 mx-2 md:mx-10 lg:mx-20 p-5 md:p-8 lg:p-10 rounded-lg bg-gradient-to-r from-cyan-500 to-lime-500`}
            >
              <div class="basis-1/2 ">
                <h1 className="text-2xl lg:text-4xl font-bold text-yellow-500">
                  {colors[0].heading}
                </h1>
                <h1 className=" md:text-xl">{colors[0].details}</h1>
              </div>
              <div className="basis-1/2 ">
                <img
                  className=" "
                  src={stove0}
                  alt="stove"
                ></img>
              </div>
            </div>
          </div>

          <div className="slide" key={1}>
            <div
              className={`md:flex whitespace-normal mb-2 mt-10 mx-2 md:mx-10 lg:mx-20 p-5 md:p-8 lg:p-10 rounded-lg bg-gradient-to-r from-fuchsia-400 to-rose-400`}
            >
              <div class="basis-1/2 ">
                <h1 className="text-2xl lg:text-4xl font-bold text-yellow-500">
                  {colors[0].heading}
                </h1>
                <h1 className=" md:text-xl">{colors[0].details}</h1>
              </div>
              <div className="basis-1/2 ">
                <img
                  className=" "
                  src={stove0}
                  alt="stove"
                ></img>
              </div>
            </div>
          </div>

          <div className="slide" key={2}>
            <div
              className={`md:flex whitespace-normal mb-2 mt-10 mx-2 md:mx-10 lg:mx-20 p-5 md:p-8 lg:p-10 rounded-lg bg-gradient-to-r from-yellow-300 to-lime-300`}
            >
              <div class="basis-1/2 ">
                <h1 className="text-2xl lg:text-4xl font-bold text-yellow-500">
                  {colors[0].heading}
                </h1>
                <h1 className=" md:text-xl">{colors[0].details}</h1>
              </div>
              <div className="basis-1/2 ">
                <img
                  className=" "
                  src={stove0}
                  alt="stove"
                ></img>
              </div>
            </div>
          </div>

          {/* <div className="slide" key={1}>
            <div
              className={`grid grid-cols-2 mb-2 mt-10 mx-2 md:mx-10 lg:mx-20 p-5 md:p-10 lg:p-20 rounded-lg bg-gradient-to-r from-fuchsia-400 to-rose-400 `}
            >
              <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-yellow-500">
                  {colors[1].heading}
                </h1>
                <h1 className=" md:text-xl">{colors[1].details}</h1>
              </div>
              <img
                className=" -mt-5 md:-mt-10 lg:-mt-20"
                src={stove0}
                alt="stove"
              ></img>
            </div>
          </div>

          <div className="slide" key={2}>
            <div
              className={`grid grid-cols-2 mb-2 mt-10 mx-2 md:mx-10 lg:mx-20 p-5 md:p-10 lg:p-20 rounded-lg bg-gradient-to-r from-yellow-300 to-lime-300`}
            >
              <div>
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-yellow-500">
                  {colors[2].heading}
                </h1>
                <h1 className=" md:text-xl">{colors[2].details}</h1>
              </div>
              <img
                className=" -mt-5 md:-mt-10 lg:-mt-20"
                src={stove0}
                alt="stove"
              ></img>
            </div>
          </div> */}

          {/* {colors.map((bnr, index) => (
            <div
              className="slide"
              key={index}
            >
              <Banner
                key={index}
                bnr={bnr}
              ></Banner>
            </div>
          ))} */}
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
