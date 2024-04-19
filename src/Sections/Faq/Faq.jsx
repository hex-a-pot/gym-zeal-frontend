import Question from "../../Components/Question/Question";
import Typing from "../../MotionUtitlities/Typing/Typing";
import "./faq.css";

function Faq() {
  return (
    <div className="faq-container">
      <div className="img-container">

        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
      <div className="info-section">
        <div className="info-title"><Typing text={"FAQ"} splitDelimitter = {""}/></div>
        <section className="questions-section">
          <Question
            question={"Can I change my training routine anytime?"}
            answer={
              "Yes, you can. We need to work with the training partner and arrange the timings for you. However, we recommend to stick with your training routine for atleast 3 months."
            }
          />
          <Question
            question={"What is the time-line for the fee submission?"}
            answer={
              "As per your plan, please submit the fees between 1 - 10th of the plan ending month. Cash will be much appreciated."
            }
          />
          <Question
            question={"Do you have supplements as well?"}
            answer={
              "We do have ranging supplements starting from whey protein to creatine, L-Glutamine, Pre-workouts etc. but we highly encourage beginners to first focus on the diet plan shared by us,"
            }
          />
          <Question
            question={"Do you train for professional competitions?"}
            answer={
              "We train athletes and help them achieve their goal or compete in the stipulated amount of time. Our members pro-actively participate in the competition not only in Hazaribagh, but through out the state."
            }
          />
          <Question
            question={"Can i get refund after the payment?"}
            answer={
              "We engage ourself in achieving and planning the members requirement. However to support the effort required by our trainers, we cannot refund the payment once it is done."
            }
          />
        </section>
        <div className="more-enquiries">
          <a href="#contact">Contact us</a>For more enquiries please &nbsp;
        </div>
      </div>
    </div>
  );
}

export default Faq;
