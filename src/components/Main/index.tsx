import { useState } from "react";
import { Drawer } from "@mui/material";

import Header from "../Header";

import { opponent, player, bengals, cowboys } from "../../data";

import Slider from "./Slider";
import Accept from "../Accept/index";
import BetInformation from "./BetInformation";

const Main = () => {
  const [isOpen, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="app-container">
        <div className="app-inner">
          <Header opponent={opponent} player={player} />
          <div className="app-content">
            <BetInformation
              team1={bengals}
              team2={cowboys}
              over={50}
              under={-50}
              date={new Date()}
              pending={true}
            />
            <Slider setOpen={setOpen} />
          </div>
        </div>
        <Drawer anchor="bottom" open={isOpen} onClose={closeDrawer}>
          <Accept closeDrawer={closeDrawer} />
        </Drawer>
      </div>
    </>
  );
};

export default Main;
