import { Player } from "../types";
import "./header.css";

interface HeaderProps {
  opponent: Player;
  player: Player;
  accept?: boolean;
}

const Header = ({ opponent, player, accept = false }: HeaderProps) => {
  const AVATAR_SIZE = 45;
  const BADGE_SIZE = 20;

  return (
    <div className="header" style={accept ? { borderRadius: 26 } : {}}>
      <div className="header-left">
        <img
          className="avatar"
          src="https://picsum.photos/200"
          height={AVATAR_SIZE}
          width={AVATAR_SIZE}
        />
        <img
          className="left-badge"
          src="https://picsum.photos/100"
          height={BADGE_SIZE}
          width={BADGE_SIZE}
        />
        <div className="left-info">{opponent.name}</div>
      </div>
      <div className="vs" style={accept ? { top: 75 } : { top: 35 }}>
        VS
      </div>
      <div className="header-right">
        <div className="right-info">
          <div>{player.name}</div>
          <div>
            {player.waiting && !accept && (
              <span className="waiting">Waiting...</span>
            )}
          </div>
        </div>
        <img
          className="right-badge"
          src="https://picsum.photos/101"
          height={BADGE_SIZE}
          width={BADGE_SIZE}
        />
        <img
          className="avatar"
          src="https://picsum.photos/201"
          height={AVATAR_SIZE}
          width={AVATAR_SIZE}
        />
      </div>
    </div>
  );
};

export default Header;
