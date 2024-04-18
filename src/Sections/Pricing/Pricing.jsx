import PriceCard from "../../Components/PriceCard/PriceCard"
import "./pricing.css"

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-title">
        Crushing your health and fitness goals starts here...
      </div>
      <div className="price-cards">
        <PriceCard type={"month"} />
        <PriceCard type={"quarter"} />
        <PriceCard type={"6months"} />
      </div>
    </div>
  )
}

export default Pricing