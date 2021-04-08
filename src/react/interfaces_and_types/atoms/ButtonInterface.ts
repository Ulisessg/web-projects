interface ButtonProps {
  text: string;
  type: 'button' | 'reset' | 'submit';
  handleClick: () => void;
}

export default ButtonProps;
