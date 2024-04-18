const InputStyle = 'text-center mb-2 mt-2 block rounded border border-gray-200 py-2 text-sm text-slate-500 shadow';

const Input = ({ type, value, onChange, step }) => {
  return <input className={InputStyle} onChange={onChange} type={type} value={value} step={step} max={100} min={0} />;
};

export default Input;
