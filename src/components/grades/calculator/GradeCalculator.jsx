import { useState, useCallback } from 'react';
import GradeForm from '../forms/GradeForm';
import { weightPercentage, weightedGrades, gradeRounding } from '../../../utils/gradeCalculations';
import useCourseGrades from '../../../hooks/useCourseGrades';
import Dropdown from '../../dropdown/Dropdown';

const courses = [
  'Maths for IT',
  'Programming 1',
  'Platforms and Devices',
  'Programming 2',
  'Fundamentals of Web Development',
  'Intro to Networks',
];

const GradeCalculator = () => {
  const { getData, setData } = useCourseGrades();
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [overAllGrade, setOverallGrade] = useState({
    total: '',
    rounded: '',
  });
  const [error, setError] = useState('');

  const grades = getData('grades', selectedCourse);
  const weights = getData('weights', selectedCourse);

  const handleSubmit = () => {
    setError('');

    const weightedGradeSum = weightedGrades(grades, weights);
    const totalWeightPercentage = weightPercentage(weights);

    if (isNaN(weightedGradeSum)) return setError('Input field is not in range 0-100');

    if (totalWeightPercentage > 100) return setError('Weight total must not exceed 100%');

    const totalGrade = `${weightedGradeSum.toFixed(2).toString()}%`;
    const roundedTotalGrade = `${gradeRounding(weightedGradeSum).toString()}%`;

    setOverallGrade({
      total: totalGrade,
      rounded: roundedTotalGrade,
    });
  };

  const handleDropDown = (event) => {
    const selected = courses.find((course) => course === event.target.value);
    setSelectedCourse(selected);
    setError('');
    setOverallGrade('');
  };

  const handleChange = (type, index, event) => {
    if (isNaN(parseFloat(event.target.value))) return;
    const updatedArray = [...getData(type, selectedCourse)];
    updatedArray[index] = parseFloat(event.target.value);
    setData(selectedCourse, type, updatedArray);
  };

  const handleGradeChange = useCallback((index, event) => handleChange('grades', index, event), [handleChange]);
  const handleWeightChange = useCallback((index, event) => handleChange('weights', index, event), [handleChange]);

  return (
    <>
      <div className="">
        <Dropdown courseList={courses} value={selectedCourse} onChange={handleDropDown} />
        <GradeForm
          handleSubmit={handleSubmit}
          grades={grades}
          gradeHeader={'Results'}
          weightsHeader={'Weights%'}
          weights={weights}
          buttonText={'Submit'}
          onGradeChange={handleGradeChange}
          onWeightChange={handleWeightChange}
        />
        <div className="">
          {overAllGrade.total && (
            <div>
              <p>Total: {overAllGrade.total}</p>
              <p>Rounded: {overAllGrade.rounded}</p>
            </div>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default GradeCalculator;
