const InputStyle = 'block w-full text-center mb-2 mt-2 rounded border py-2 text-sm text-slate-500 shadow focus:border-pink-200';

const Input = ({ type, value, onChange, step }) => {
  return <input className={InputStyle} onChange={onChange} type={type} value={value} step={step} max={100} min={0} />;
};

export default Input;
