import './priceCard.css'
import { FaRegCheckCircle } from 'react-icons/fa'

function PriceCard({type}) {
  return (
    <div className="card-tile">
        <div className="price-type">{type === "month"?"Per Month Membership":type === "quarter"?"3 Month Membership":"6 Month Membership"}</div>
        <div className="price"><span>{type === "month"?"₹600":type === "quarter"?"₹500":"₹450"}</span>/mo</div>
        <div className="checklists">
            <div className="checklist"><FaRegCheckCircle  /><span>All classes</span></div>
            <div className="checklist"><FaRegCheckCircle /><span>All member events</span></div>
            <div className="checklist"><FaRegCheckCircle /><span>Full gym access</span></div>
        </div>
        <div className="price-condition">Charges every {type === "month"?"month ":type === "quarter"?"3 months ":"6 months "}unless you cancel</div>
        <button className="trial">Start 7 day free trial</button>
    </div>
  )
}

export default PriceCard