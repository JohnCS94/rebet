import "./overUnder.css";

interface OverUnderProps {
  text: string;
  odds: number;
}

const OverUnder = ({ text, odds }: OverUnderProps) => {
  return (
    <div className="odds-container">
      <div className="odds-inner">
        <span>{text}</span>
        <span className="odd">
          {odds > 0 && "+"}
          {odds}
        </span>
      </div>
    </div>
  );
};

export default OverUnder;
