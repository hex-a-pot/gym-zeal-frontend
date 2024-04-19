import PriceCard from "../../Components/PriceCard/PriceCard";
import MakeVisible from "../../MotionUtitlities/MakeVisible/MakeVisible";
import Typing from "../../MotionUtitlities/Typing/Typing";
import "./pricing.css";

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-title">
        <Typing
          text={"Crushing your health and fitness goals starts here..."}
          splitDelimitter={" "}
        />
      </div>
      <MakeVisible>
        <div className="price-cards">
          <PriceCard type={"month"} />

          <PriceCard type={"quarter"} />

          <PriceCard type={"6months"} />
        </div>
      </MakeVisible>
    </div>
  );
}

export default Pricing;
