import "./trainingHero.css";
import { FaRegCheckCircle } from "react-icons/fa";
import React from "react";

function TrainingHero(props) {
  const { leftAligned, title, image, checklists,tag,information} = props;
  return (
    <div
      className="training-hero-container"
      style={
        leftAligned
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "row" }
      }
    >
      <div className="hero-information">
        <div className="tag">{tag}</div>
        <h1 className="hero-title">{title}</h1>
        {information && <div className="information">{information}</div> }
        <div className="checklists">
          {checklists.map((listItem, i) => {
            return (
              <div className="checklist" key={i}>
                <span className="check-logo">
                  <FaRegCheckCircle style={{color:"#39ff14"}}/>
                </span>
                {listItem}
              </div>
            );
          })}
        </div>
      </div>
      <img src={image} alt="" className="banner" />
    </div>
  );
}

export default TrainingHero;
