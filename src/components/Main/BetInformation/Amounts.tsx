import dollar from "../../../assets/dollar.png";

import "./amounts.css";

interface AmountsProps {
  opponentBet: number;
  opponentPayout: number;
  myBet: number;
  myPayout: number;
}

const Amounts = ({
  opponentBet,
  opponentPayout,
  myBet,
  myPayout,
}: AmountsProps) => {
  const DOLLAR_ICON_SIZE = 22;

  return (
    <div className="amount-container">
      <div style={{ width: "100%" }}>
        <div className="amount-split">
          <span className="amount-text">BET AMOUNT</span>
          <span className="amount">
            <span>{opponentBet.toFixed(2)}</span>
            <img src={dollar} height={DOLLAR_ICON_SIZE} />
          </span>
        </div>
        <div className="amount-split">
          <span className="amount-text">PAYOUT</span>
          <span className="amount">
            <span>{opponentPayout.toFixed(2)}</span>
            <img src={dollar} height={DOLLAR_ICON_SIZE} />
          </span>
        </div>
      </div>
      <div className="vertical-line" style={{ height: "55px" }}></div>

      <div style={{ width: "100%" }}>
        <div className="amount-split">
          <span className="amount">
            <span>{myBet.toFixed(2)}</span>
            <img src={dollar} height={DOLLAR_ICON_SIZE} />
          </span>
          <span className="amount-text">BET AMOUNT</span>
        </div>
        <div className="amount-split">
          <span className="amount">
            <span>{myPayout.toFixed(2)}</span>
            <img src={dollar} height={DOLLAR_ICON_SIZE} />
          </span>
          <span className="amount-text">PAYOUT</span>
        </div>
      </div>
    </div>
  );
};

export default Amounts;
