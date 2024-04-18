import "./home.css";
import { FaStar } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      <h2 className="title">Crush your Health and fitness goals in no time</h2>
      <p className="description">
        It doesn't matter if your goal is to get stronger,burn fat,or to just
        stay fit. Our world class coaches will guide you every step of the way.
      </p>
      <button className="promo">
        <a href="#pricing">Start 7 day free trial</a>
      </button>
      <div className="mini-review-container">
        <div className="review-box">
          <div className="total-stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
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
