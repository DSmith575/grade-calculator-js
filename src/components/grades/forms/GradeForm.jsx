import Input from '../../input/Input';
import Button from '../../button/Button';

const GradeForm = ({ handleSubmit, grades, weights, buttonText, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Current Results</h1>
            {grades.map((grade, index) => (
              <Input
                type={'number'}
                key={index}
                value={grade}
                step={0.01}
                onChange={(event) => handleChange('grades', index, event)}
              />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Assessment %</h1>
            {weights.map((weight, index) => (
              <Input type={'number'} key={index} value={weight} onChange={(event) => handleChange('weights', index, event)} />
            ))}
          </div>
        </div>
        <Button type="submit" text={buttonText} />
      </form>
    </>
  );
};

export default GradeForm;
