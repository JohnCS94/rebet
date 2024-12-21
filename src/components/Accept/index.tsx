import Header from "../Header";
import YourBet from "./YourBet";

import { opponent, player } from "../../data";

import "./index.css";
import SetOdds from "./SetOdds";
import Details from "./Details";

interface AcceptProps {
  closeDrawer: () => void;
}

const Accept = ({ closeDrawer }: AcceptProps) => {
  return (
    <div className="drawer-container">
      <button onClick={closeDrawer}>Close</button>
      <div className="content-container">
        <Header opponent={opponent} player={player} accept />
        <YourBet />
        <SetOdds />
        <Details />
      </div>
    </div>
  );
};

export default Accept;
