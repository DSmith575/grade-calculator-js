import { useState, useMemo } from 'react';

const useCourseGrades = () => {
  const [gradeData, setGradeData] = useState({});
  const [weightData, setWeightData] = useState({});

  const setCourseGrades = (courseName, grades) => {
    setGradeData((prevData) => ({
      ...prevData,
      [courseName]: grades,
    }));
  };

  const setCourseWeights = (courseName, weights) => {
    setWeightData((prevData) => ({
      ...prevData,
      [courseName]: weights,
    }));
  };

  const getGrades = useMemo(() => {
    return (courseName) => {
      return gradeData[courseName] || [0, 0, 0, 0];
    };
  });

  const getWeights = useMemo(() => {
    return (courseName) => {
      return weightData[courseName] || [0, 0, 0, 0];
    };
  });

  return { getGrades, getWeights, setCourseGrades, setCourseWeights };
};

export default useCourseGrades;
