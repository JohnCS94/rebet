import cowboys_logo from "../../assets/logos/cowboys.png";
import bengals_logo from "../../assets/logos/bengals.png";

import "./yourBet.css";

const YourBet = () => {
  return (
    <>
      <span className="you-bet-title">You Bet</span>
      <div className="your-bet-container">
        <div className="your-bet-inner">
          <div className="your-bet-info">
            <div className="you-bet-logo">
              <img src={cowboys_logo} height={50} />
            </div>
            <div className="you-bet-text">
              <div className="you-bet-text-title">Over / Under</div>
              <div className="you-bet-text-content">Under</div>
            </div>
          </div>
          <div className="you-bet-summary">
            <div className="you-bet-image-container">
              <img src={cowboys_logo} height={20} />
            </div>
            <span>Dallas Cowboys</span>
            <span style={{ margin: "0 15px", color: "#fd6a32" }}>VS</span>
            <div className="you-bet-image-container">
              <img src={bengals_logo} height={20} />
            </div>
            <span>Cincinnati Bengals</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourBet;
