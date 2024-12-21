import { format } from "date-fns";

import Pending from "./Pending";
import TeamInformation from "./TeamInformation";

import OverUnder from "./OverUnder";
import Amounts from "./Amounts";

import { Team } from "../../../types";

import "./index.css";

interface BetInformationProps {
  team1: Team;
  team2: Team;
  over: number;
  under: number;
  date: Date;
  pending: boolean;
}

const BetInformation = ({
  team1,
  team2,
  over,
  under,
  date,
  pending,
}: BetInformationProps) => {
  const formattedDate = format(date, "dd MMM").toUpperCase();
  const formattedTime = format(date, "hh:mm a");

  return (
    <div>
      <div className="bet-header">
        <div>NFL</div>
        <div>{pending && <Pending />}</div>
      </div>
      <div className="main-content">
        <div className="content-center">
          <TeamInformation avatar={team1.avatar} name={team1.name} />
          <OverUnder text="Under" odds={under} />
        </div>
        <div className="center-information">
          <div style={{ height: 15 }} />
          <div className="odd bold">{formattedDate}</div>
          <div className="bold">{formattedTime}</div>
          <div style={{ height: 40 }} />
          <div className="odd" style={{ fontSize: 13 }}>
            ODDS
          </div>
          <div className="odds-bubble">1:1</div>
        </div>
        <div>
          <TeamInformation avatar={team2.avatar} name={team2.name} />
          <OverUnder text="Over" odds={over} />
        </div>
      </div>
      <Amounts opponentBet={1} opponentPayout={2} myBet={1} myPayout={2} />
    </div>
  );
};

export default BetInformation;
