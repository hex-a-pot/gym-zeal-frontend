import "./trainingHero.css";
import { FaRegCheckCircle } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import Typing from "../../MotionUtitlities/Typing/Typing";

function TrainingHero(props) {
  const { leftAligned, title, image, checklists, tag, information, videoId } =
    props;
  return (
    <div
      className="training-hero-container"
      style={
        leftAligned
          ? {
              flexDirection: "row-reverse",
              background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
          : {
              flexDirection: "row",
              background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
      }
    >
      <motion.div
        className="hero-information"
        initial={leftAligned ? { x: -300 } : { x: 300 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="tag">{tag}</div>
        <h1 className="hero-title">
          <Typing text={title} splitDelimitter={" "} once />
        </h1>
        {information && <div className="information">{information}</div>}
        <div className="checklists">
          {checklists.map((listItem, i) => {
            return (
              <div className="checklist" key={i}>
                <span className="check-logo">
                  <FaRegCheckCircle style={{ color: "#39ff14" }} />
                </span>
                {listItem}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* <motion.img
        initial={leftAligned ? { x: -300 } : { x: 300 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src={image}
        alt=""
        className="banner"
      /> */}
      <motion.video
        id="video-player"
        initial={leftAligned ? { x: -300 } : { x: 300 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        autoPlay={"autoplay"}
        preload="auto"
        loop
        muted
        width="calc(50vw-80px)"
        height="400px"
        style={{ borderRadius: "10px" }}
        controlsList="nodownload"
      >
        <source src={videoId} type="video/mp4" />
      </motion.video>
    </div>
  );
}

export default TrainingHero;
