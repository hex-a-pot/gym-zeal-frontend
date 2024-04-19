import "./home.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  const title = "Crush your Health and fitness goals in no time".split(" ");
  return (
    <div className="home-container">
      <h2 className="title">
        {title.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: i / 10 }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </h2>
      <p className="description">
        It doesn't matter if your goal is to get stronger,burn fat,or to just
        stay fit. Our world class coaches will guide you every step of the way.
      </p>
      <motion.button
        className="promo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5 }}
      >
        <a href="#pricing">Start 7 day free trial</a>
      </motion.button>
      <div className="mini-review-container">
        <div className="review-box">
          <div className="total-stars">
            {[1, 2, 3, 4, 5].map((el, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, color: "white",scale:0}}
                whileInView={{ opacity: 1, color: "#FFDF00",scale:1}}
                transition={{ duration : 1, delay: i/10}}
              >
                <FaStar key={i} />
              </motion.span>
            ))}
          </div>
          <span className="review-count">83</span>
          <span>Five star reviews</span>
        </div>
        <div className="testimonial">
          <img
            src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="avatar"
          />
          <p className="testimony">
            "6 months after joining I lost 5 kgs and I'm getting stronger"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
