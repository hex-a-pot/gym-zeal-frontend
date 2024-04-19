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
      <div className="price-cards">
        <MakeVisible>
          <PriceCard type={"month"} />
        </MakeVisible>
        <MakeVisible>
          <PriceCard type={"quarter"} />
        </MakeVisible>
        <MakeVisible>
        <PriceCard type={"6months"} />
        </MakeVisible>
      </div>
    </div>
  );
}

export default Pricing;
