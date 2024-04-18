import Button from './button/Button';
import FormFields from './fields/FormFields';
import { useCallback } from 'react';

const GradeForm = ({ gradeHeader, weightHeader, handleSubmit, grades, weights, buttonText, onGradeChange, onWeightChange }) => {
  const handleSubmitForm = useCallback(
    (event) => {
      event.preventDefault();
      handleSubmit();
    },
    [handleSubmit],
  );

  return (
    <>
      <form className={''} onSubmit={handleSubmitForm}>
        <div className="flex justify-evenly border rounded mx-4">
          <FormFields header={gradeHeader} fields={grades} step={0.01} handleChange={onGradeChange} />

          <FormFields header={weightHeader} fields={weights} handleChange={onWeightChange} />
        </div>
        <div className="flex justify-center pt-2">
          <Button type="submit" text={buttonText} />
        </div>
      </form>
    </>
  );
};

export default GradeForm;
