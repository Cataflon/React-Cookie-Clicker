import "./Score.scss";

const Score = (props) => {
  const { number } = props;
  return (
    <div>
      <p>{`Score: ${number}`}</p>
    </div>
  );
};
export default Score;
