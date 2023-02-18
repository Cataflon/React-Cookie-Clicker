import "./Cookie.scss";
import cookieImg from "../../image/cookie.png";
const Cookie = (props) => {
  const { setNumber, number } = props;
  return (
    <div onClick={() => setNumber(number + 1)}>
      <img src={cookieImg} alt="cookie" className="image" />
    </div>
  );
};
export default Cookie;
