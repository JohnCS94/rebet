import { useState } from "react";
import dollar from "../../assets/dollar.png";

import "./setOdds.css";
import { Tooltip } from "@mui/material";

const SetOdds = () => {
  const AVATAR_SIZE = 45;
  const DOLLAR_ICON_SIZE = 22;

  const [slit, setSlit] = useState(3);

  const odds = ["4:1", "3:1", "2:1", "1:1", "1:2", "1:3", "1:4"];

  return (
    <>
      <div className="set-odds-title">Set the Odds</div>
      <div className="head-to-head">
        <div style={{ display: "flex" }}>
          <img
            className="avatar"
            src="https://picsum.photos/201"
            height={AVATAR_SIZE}
            width={AVATAR_SIZE}
          />
          <div className="info">
            <span className="odd-amount">
              <span>{"1.00"}</span>
              <img src={dollar} height={DOLLAR_ICON_SIZE} />
            </span>
            <span className="grey">Your risk amount</span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="info">
            <span className="odd-amount" style={{ justifyContent: "end" }}>
              <span>{"1.00"}</span>
              <img src={dollar} height={DOLLAR_ICON_SIZE} />
            </span>
            <span className="grey">Opponents' risk amount</span>
          </div>
          <img
            className="avatar"
            src="https://picsum.photos/200"
            height={AVATAR_SIZE}
            width={AVATAR_SIZE}
          />
        </div>
      </div>
      <div className="odds-slider-container">
        <div className="odds-slider-inner">
          <div className="odds-slider-slits">
            {Array.from({ length: 7 }, (_, index) => (
              <Tooltip
                key={index}
                open={slit === index}
                title={odds[index]}
                arrow
              >
                <div
                  className={`${
                    slit === index ? "selected-slit" : "slider-slit"
                  }`}
                  onClick={() => setSlit(index)}
                />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SetOdds;
