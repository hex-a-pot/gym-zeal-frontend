import "./Testimonials.css";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
function Testimonials() {
  const containerRef = useRef(0);
  const handleBack = () => {
    console.log(containerRef.current.scrollLeft);
    containerRef.current.scrollLeft === 0 ||
    containerRef.current.scrollLeft <= 30
      ? (containerRef.current.scrollLeft = 703 * 5)
      : (containerRef.current.scrollLeft -= 703);
  };
  const handleForward = () => {
    console.log(containerRef.current.scrollLeft);
    containerRef.current.scrollLeft >= 2800
      ? (containerRef.current.scrollLeft = 0)
      : (containerRef.current.scrollLeft += 703);
  };
  return (
    <div className="testimonial-container">
      <div className="wrapper">
        <h1 className="apostropes">
          <span>"</span>
        </h1>
        <div className="intro">
          <h2 className="intro-text">Connect with other members</h2>
          <h3 className="intro-description">
            These testimonials are the part of a feedback survey we initiated in
            our gym after the members completed their initial program duration.
            You can also be a part of your fitness journey custom tailored by
            us.
          </h3>
          <div className="controls">
            <motion.span
              className="backward"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={handleBack}
            >
              <FaAngleLeft />{" "}
            </motion.span>
            <motion.span
              className="forward"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={handleForward}
            >
              <FaAngleRight />
            </motion.span>
          </div>
        </div>

        <div className="testimonial-cards" ref={containerRef}>
          <ReviewCard
            avatar={
              "https://media.istockphoto.com/id/1155234248/photo/fitness-instructor-standing-at-a-fitness-centre-and-smiling-at-the-camera.webp?b=1&s=612x612&w=0&k=20&c=FBMgZwaZc4gBs1PoLw--jgVxJPldTbI23n3jMQoqSyQ="
            }
            name={"Sudhanshu"}
            subscription={"Quarter - 3 Months"}
            feedback={
              "I joined on 2021 and i am still continuing. At first my goal was to reduce weight. Over time it grew into passion and i am a powerlifter now. I am a software developer by profession and a fitness freak by passion. This was my first gym to start the journey."
            }
          />
          <ReviewCard
            avatar={
              "https://media.istockphoto.com/id/673537770/photo/portrait-of-a-young-man-of-indian-origin.webp?b=1&s=612x612&w=0&k=20&c=PUw9TUrFc7DTWkwjBeZBR-UPDcdEwnp62X-ftrk5_QQ="
            }
            name={"Anish"}
            subscription={"Quarter - 3 Months"}
            feedback={
              "I joined on 2022 and by the guidance and proper training routine as well as proper consultaion i have participated in Jharkhand Powerlifting competition where i  scored 3rd position. This is one of the greatest achievement. Thanks to the Gym Zeal."
            }
          />
          <ReviewCard
            avatar={
              "https://media.istockphoto.com/id/1226865237/photo/indian-wrestler-showing-muscles-new-delhi-india.webp?b=1&s=612x612&w=0&k=20&c=q_v3DYZCA4VLhRVzjHberg0qFtpAQpb1iHlHMQbIxiE="
            }
            name={"Rohit"}
            subscription={"6 Months"}
            feedback={
              "I was friends with Rohit and Surya bhaiya and due to their passion fo9r fitness community, I also started my journey and  i am still continuing. My goal was to gain muscles and strength. Over time i feel much more confident now. I can confodently say that this the best place to achieve your passion. "
            }
          />
          <ReviewCard
            avatar={
              "https://media.istockphoto.com/id/1427221641/photo/man-training-with-battle-rope-in-gym-gym.webp?b=1&s=612x612&w=0&k=20&c=HCkIRuFm78mfD3zC_So0fkVjRL9XEZmx_JZUSE5b3R0="
            }
            name={"Mukendra"}
            subscription={"Per Month"}
            feedback={
              "I really love the way the trainers program the routine depending upon their availability and capability. I was afraid i was not going to progress in my fitness journey but they proved me wrong by breaking the plateau. I can lift my dream weight now which was once seems very difficult to achieve."
            }
          />
          <ReviewCard
            avatar={
              "https://media.istockphoto.com/id/1155224042/photo/asian-muscular-man-man-working-out-at-the-gym.webp?b=1&s=612x612&w=0&k=20&c=It6VVNOiBqp6Ne0H7lJ2znThsaTCfjkk0LLtmofQmcQ="
            }
            name={"Manoj"}
            subscription={"Annually - 12 months"}
            feedback={
              "I saw the potential the trainers had and i joined them in their journey to make the hazaribagh fit. I am trainer by profession and also train at the gym in order to stay in the game as we prepare and enroll ourselves into various platforms which really proves the effort results."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
