import "./trainingHero.css";
import { FaRegCheckCircle } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

function TrainingHero(props) {
  const { leftAligned, title, image, checklists,tag,information} = props;
  return (
    <motion.div
      className="training-hero-container"
      style={
        leftAligned
          ? { flexDirection: "row-reverse" }
          : { flexDirection: "row" }
      }
      initial = {leftAligned?{x:-1000}:{x:1000}}
      whileInView={{x:0}}
      viewport={{once:true}}
      transition={{duration:1}}
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
    </motion.div>
  );
}

export default TrainingHero;
