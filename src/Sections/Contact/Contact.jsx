import { useState } from "react";
import MakeVisible from "../../MotionUtitlities/MakeVisible/MakeVisible";
import Typing from "../../MotionUtitlities/Typing/Typing";
import { TbCubeSend } from "react-icons/tb";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import "./contact.css";

function Contact() {
  const [result, setResult] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", "a8ee54f5-7346-4694-bc40-f5b40a9f579b");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("sent");
      e.target.reset();
    } else {
      setResult("Something Went wrong!!");
    }
  };
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
        their terms without fitness being an obstacle.{" "}
        <div>|| जय श्री राम ||</div>
      </div>
      <MakeVisible>
        <div className="form-container">
          <form className="contact-us-form" onSubmit={handleSubmit}>
            <span className="form-intro">Feel free to drop a message</span>
            <input type="text" placeholder="Name" name="Name" required/>
            <input type="text" placeholder="Phone number" name="Phone" required/>
            <textarea
              name="message"
              rows="10"
              placeholder="Write your message here..."
            ></textarea>
            <button className="submit" type="submit">
              {result ? (
                <div className="result-container">
                  {result === "Sending..." ? (
                    <>
                      <span className="icon">
                        <TbCubeSend />
                      </span>
                      <Typing
                        text={result.toUpperCase()}
                        splitDelimitter={" "}
                        once
                      />
                    </>
                  ) : (
                    <>
                      <IoCheckmarkDoneCircleOutline />
                      <Typing
                        text={result.toUpperCase()}
                        splitDelimitter={" "}
                        once
                      />
                    </>
                  )}
                </div>
              ) : (
                "Submit"
              )}
            </button>
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
