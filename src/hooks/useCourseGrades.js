import { useState, useMemo } from 'react';

const useCourseGrades = () => {
  const [courseData, setCourseData] = useState({});

  const setData = (courseName, type, data) => {
    console.log(courseData);
    setCourseData((prevData) => ({
      ...prevData,
      [courseName]: {
        ...prevData[courseName],
        [type]: data,
      },
    }));
  };

  const getData = useMemo(() => {
    return (type, courseName) => {
      return courseData[courseName]?.[type] || [0, 0, 0, 0];
    };
  }, [courseData]);

  return { getData, setData };
};

export default useCourseGrades;
