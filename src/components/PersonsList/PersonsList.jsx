import PersonCard from "../PersonCard/PersonCard";
import "./PersonsList.css";

const PersonsList = ({ data }) => {
  return (
    <div className="persons_box">
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((person, i) => {
          return <PersonCard key={i} person={person} />;
        })}
    </div>
  );
};

export default PersonsList;
