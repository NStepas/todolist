import './Button.scss';

const Button = ({ type, text, onClick }) => (
   <button type={type} onClick={onClick}>
      {text}
   </button>
);

export default Button;
