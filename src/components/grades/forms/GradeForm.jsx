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
      <div>
        <form className={''} onSubmit={handleSubmitForm}>
          <FormFields header={gradeHeader} fields={grades} step={0.01} handleChange={onGradeChange} />

          <FormFields header={weightHeader} fields={weights} handleChange={onWeightChange} />
          <Button type="submit" text={buttonText} />
        </form>
      </div>
    </>
  );
};

export default GradeForm;
