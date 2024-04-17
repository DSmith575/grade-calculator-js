const Input = ({ type, value, onChange, step }) => {
  return <input onChange={onChange} type={type} value={value} step={step} max={100} min={0} />;
};

export default Input;
