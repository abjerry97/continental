import Button from "../Button";
export default function PageBtn({ text, handleClick = () => {} }: any) {
  return <Button text={text} handleClick={handleClick} />;
}
