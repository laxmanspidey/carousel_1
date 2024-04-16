import React, { useState } from "react";
import pic1 from "./assets/brooke-cagle-aVT8VkmzML4-unsplash.jpeg";
import pic2 from "./assets/chris-ghinda-wK2ESlRRZQ8-unsplash.jpeg";
import pic3 from "./assets/jc-gellidon-JM8TkWJ9UIY-unsplash.jpeg";
import pic4 from "./assets/larm-rmah-R1Ku62Z7zqE-unsplash.jpeg";
import pic5 from "./assets/toa-heftiba-dti56waifB4-unsplash.jpeg";
import "./mainHeader.css"
const Carousel = () => {
  const picArr = [pic1, pic2, pic3, pic4, pic5];
  const [currIndex, setcurrIndex] = useState(0);
  const setLeftChevronIndex = (index) => {
    index === 0 ? setcurrIndex(picArr.length - 1) : setcurrIndex(index - 1);
  };
  const setRightChevronIndex = (index) => {
    index === picArr.length - 1 ? setcurrIndex(0) : setcurrIndex(index + 1);
  };
  return (
    <div>
      <div style={{ position: "relative", width: "100%" }} >
        <img
          src={picArr[currIndex]}
          style={{
            objectFit: "cover",
            display: "block",
            height: "97.6vmin",
            width: "100%",
          }}
          className="carousel"
          alt="pic"
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            margin: "-30px",
            left: "46%",
            width: "10%",
            gap: "10%",
          }}
        >
          {picArr.map((pic, index) => {
            return (
              <div>
                <div onClick={() => setcurrIndex(index)}>
                  {currIndex === index ? (
                    <span
                      style={{
                        backgroundColor: "black",
                        borderRadius: "100%",
                        padding: "1px",
                        cursor: "pointer",
                      }}
                    >
                      O
                    </span>
                  ) : (
                    <span
                      style={{
                        cursor: "pointer",
                        borderRadius: "100%",
                        padding: "1px",
                      }}
                    >
                      O
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            width: "100px",
            height: "100px",
            position: "absolute",
            top: "47%",
            cursor: "pointer",
          }}
          onClick={() => setLeftChevronIndex(currIndex)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            top: "47%",
            width: "100px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            cursor: "pointer",
          }}
          onClick={() => setRightChevronIndex(currIndex)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
