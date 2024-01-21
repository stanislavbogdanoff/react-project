const Button = ({ changeCountState, countState }) => {
  return (
    <button
      onClick={() => {
        changeCountState((countState) => countState + 1);
      }}
    >
      +1
    </button>
  );
};

export default Button;
