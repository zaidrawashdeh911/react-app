interface Props {
  children: string;
  onClick: () => void;
  //onChange?: (e: string) => number;
  color?: 'primary' | 'secondary' | 'danger' | 'success';
}
//function Button({ children, onClick, color = 'primary' }: Props) {
  //console.log(color);
const Button = ({ children, onClick, color = 'primary' }: Props)=>{
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
