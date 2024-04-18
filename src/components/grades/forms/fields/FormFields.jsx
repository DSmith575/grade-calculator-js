import Input from '../input/Input';
const FormFields = ({ header, fields, step, handleChange }) => {
  return (
    <>
      <div className="">
        <h1 className={'text-center font-medium pt-2 text-gray-800'}>{header}</h1>
        {fields.map((value, index) => (
          <Input type={'number'} key={index} value={value} step={step} onChange={(event) => handleChange(index, event)} />
        ))}
      </div>
    </>
  );
};

export default FormFields;
