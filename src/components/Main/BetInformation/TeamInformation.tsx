import "./teamInformation.css";

interface TeamInformationProps {
  name: string;
  avatar: string;
}

const TeamInformation = ({ name, avatar }: TeamInformationProps) => {
  return (
    <div style={{ marginBottom: 40 }}>
      <div className="image-container">
        <img src={avatar} height={40} />
      </div>
      <div style={{ fontWeight: 600, textWrap: "nowrap" }}>{name}</div>
    </div>
  );
};

export default TeamInformation;
