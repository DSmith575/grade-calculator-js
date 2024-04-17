import { useState } from 'react';
import GradeForm from '../forms/GradeForm';
import { weightPercentage, weightedGrades, gradeRounding } from '../../../utils/gradeCalculations';
import useCourseGrades from '../../../hooks/useCourseGrades';

const courses = [
  'Maths for IT',
  'Programming 1',
  'Platforms and Devices',
  'Programming 2',
  'Fundamentals of Web Development',
  'Intro to Networks',
];

import Dropdown from '../../dropdown/Dropdown';

const GradeCalculator = () => {
  const { getGrades, getWeights, setCourseGrades, setCourseWeights } = useCourseGrades(courses);
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [overAllGrade, setOverallGrade] = useState('');
  const [error, setError] = useState('');

  const grades = getGrades(selectedCourse);
  const weights = getWeights(selectedCourse);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const weightedGradeSum = weightedGrades(grades, weights);
    const totalWeightPercentage = weightPercentage(weights);

    if (isNaN(weightedGradeSum)) return setError('Input field is not in range 0-100');

    if (totalWeightPercentage > 100) return setError('Weight total must not exceed 100%');

    setOverallGrade(`${gradeRounding(weightedGradeSum).toString()}%`);
  };

  const handleDropDown = (event) => {
    const selected = courses.find((course) => course === event.target.value);
    setSelectedCourse(selected);
  };

  const handleChange = (type, index, event) => {
    if (isNaN(parseFloat(event.target.value))) return (event.target.value = 0);
    const updatedArray = type === 'grades' ? [...grades] : [...weights];
    updatedArray[index] = parseFloat(event.target.value);
    (type === 'grades' ? setCourseGrades : setCourseWeights)(selectedCourse, updatedArray);
  };

  return (
    <>
      <Dropdown headerTitle={'Select Course'} courseList={courses} value={selectedCourse} onChange={handleDropDown} />
      <GradeForm
        handleSubmit={handleSubmit}
        grades={grades}
        weights={weights}
        buttonText={'Submit'}
        handleChange={handleChange}
      />
      {error ? <p>{error}</p> : <p>{overAllGrade}</p>}
    </>
  );
};

export default GradeCalculator;
