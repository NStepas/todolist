import './Button.scss';
// TODO can be simplified
// const Button = ({text, type}) => (<button>...</button>)
// children is wrong props, children represent ReactNode, ReactElement array or simple object
// "text" is way better name and rather be passed as simple property
// usage ex. <Button type={type} text={"bla bla"} />

const Button = props => {
   return (
      <button type="button" className="button">
         {props.children}
      </button>
   );
};

export default Button;
