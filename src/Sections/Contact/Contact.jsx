import MakeVisible from "../../MotionUtitlities/MakeVisible/MakeVisible";
import Typing from "../../MotionUtitlities/Typing/Typing";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <span className="contact-label">About Gym Zeal</span>
      <div className="contact-intro">
        <span>Hi, We're a local MultiFunctional gym in</span>
        <div className="location">
          <Typing text={"Kesura, Hazaribagh"} splitDelimitter={" "} once />
        </div>
      </div>
      <div className="contact-description">
        Gym Zeal was started by Rohit,Surya and Manoj in 2021. It's our mission
        to help people in Hazaribagh get fit, stay helathy, and live life on
        their terms without fitness being an obstacle. <div>|| जय श्री राम ||</div>
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
