import { Link } from "react-router-dom";
import Button from "../Button";
export default function PageBtnWithLink({ to, text, handleClick }: any) {
  return (
    <Link to={to || ""}>
      <Button text={text} handleClick={handleClick} />
    </Link>
  );
}
