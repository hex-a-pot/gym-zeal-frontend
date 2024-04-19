import MakeVisible from "../../MotionUtitlities/MakeVisible/MakeVisible";
import Typing from "../../MotionUtitlities/Typing/Typing";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <span className="contact-label">About Gym Zeal</span>
      <div className="contact-intro">
        <span>Hi, We're a local MultiFunctional gym in</span>
        <div className="location">Kesura, Hazaribagh</div>
      </div>
      <div className="contact-description">
        <Typing
          text={
            "Gym Zeal was started by Rohit,Surya and Manoj in 2021. It's our mission to help people in Hazaribagh get fit, stay helathy, and live life on their terms witjout fitness being an obstacle."
          }
          splitDelimitter={" "}
        />
      </div>
      <MakeVisible>
        <div className="form-container">
          <form className="contact-us-form">
            <span className="form-intro">Feel free to drop a message</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone number" />
            <textarea
              name="message"
              rows="10"
              placeholder="Write your message here..."
            ></textarea>
            <button className="submit">Submit</button>
          </form>
          <div className="banner-container">
            <img
              src="https://images.pexels.com/photos/2480122/pexels-photo-2480122.jpeg"
              alt=""
              className="founders-banner"
            />
          </div>
        </div>
      </MakeVisible>
    </div>
  );
}

export default Contact;
