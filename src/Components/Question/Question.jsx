import { useState } from "react";
import "./question.css";
import React from "react";
import { RxCaretDown } from "react-icons/rx";

function Question({ question, answer }) {
  const [viewAnswer, setViewAnswer] = useState(false);
  return (
    <div className="question-container">
      <span
        onClick={() => {
          setViewAnswer(!viewAnswer);
        }}
        className="question"
      >
        Q. {question}
      </span>
      <span
        className="view"
        onClick={() => {
          setViewAnswer(!viewAnswer);
        }}
      >
        <RxCaretDown className="view-arrow" style={viewAnswer ? {transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}} />
      </span>
      {viewAnswer && <span className="answer">{answer}</span>}
      <span className="line"></span>
    </div>
  );
}

export default React.memo(Question);
