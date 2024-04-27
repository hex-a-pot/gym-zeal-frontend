import "./reviewCard.css";

function ReviewCard({avatar,name,subscription,feedback}) {
  return (
    <div className="review-container">
      <div className="member-info">
        <img
          src={avatar}
          alt=""
          className="member-avatar"
        />
        <div className="member-details">
          <div className="member-name">{name}</div>
          <div className="subscription-type"> {subscription}</div>
        </div>
      </div>
      <div className="feedback">
        {feedback}
      </div>
    </div>
  );
}

export default ReviewCard;
