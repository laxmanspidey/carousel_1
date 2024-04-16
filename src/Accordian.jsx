import React, { useState } from "react";

const Accordian = () => {
  const [currIndex, setcurrIndex] = useState("");
  const qaArray = [
    {
      question: "What is the capital of Japan?",
      answer: "The capital of Japan is Tokyo.",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answer: "William Shakespeare wrote 'Romeo and Juliet'.",
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter is the largest planet in our solar system.",
    },
    {
      question:
        "What is the main programming language used for web development?",
      answer:
        "The main programming language used for web development is JavaScript.",
    },
  ];
  return (
    <div style={{ marginTop: "5%" }}>
       <h1>Accordian</h1> 
      <div>
        {qaArray.map((qn, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                onClick={() => {
                  if (currIndex === index) {
                    setcurrIndex("");
                  } else {
                    setcurrIndex(index);
                  }
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                <h2>{qn.question}</h2>
                <h2>{currIndex === index ? qaArray[index].answer : ""}</h2>
              </div>
              <button
                onClick={() => {
                  if (currIndex === index) {
                    setcurrIndex("");
                  } else {
                    setcurrIndex(index);
                  }
                }}
                style={{
                  width: "40px",
                  height: "40px",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
