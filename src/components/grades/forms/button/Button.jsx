const ButtonStyles = 'rounded border bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-slate-100';

const Button = ({ type, text }) => {
  return (
    <button className={ButtonStyles} type={type}>
      {text}
    </button>
  );
};

export default Button;
