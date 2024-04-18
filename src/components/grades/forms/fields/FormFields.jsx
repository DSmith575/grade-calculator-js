import Input from '../input/Input';
const FormFields = ({ header, fields, step, handleChange }) => {
  return (
    <>
      <h1 className={''}>{header}</h1>
      {fields.map((value, index) => (
        <Input type={'number'} key={index} value={value} step={step} onChange={(event) => handleChange(index, event)} />
      ))}
    </>
  );
};

export default FormFields;
