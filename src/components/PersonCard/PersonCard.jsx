import "./PersonCard.css";

const PersonCard = ({ person }) => {
  return (
    <div className="person_card">
      {person.name}
      <br />
      {person.age}
    </div>
  );
};

export default PersonCard;
