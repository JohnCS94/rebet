import dollar from "../../assets/dollar.png";

import "./details.css";

const Details = () => {
  const DOLLAR_ICON_SIZE = 22;
  return (
    <div className="details-container">
      <div className="details-side">
        <div className="details-side-title">Risk Amount</div>
        <div className="details-amount-container">
          <div className="details-amount-inner">
            <span>1.00</span>
            <img src={dollar} height={DOLLAR_ICON_SIZE} />
          </div>
        </div>
      </div>
      <div className="details-side">
        <div className="details-side-title">Payout Amount</div>
        <div className="details-amount-container">
          <div className="details-amount-inner">
            <span>1.00</span>
            <img src={dollar} height={DOLLAR_ICON_SIZE} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
