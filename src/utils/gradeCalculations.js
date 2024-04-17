const weightedGrades = (gradeValues, weightValues) => {
  return gradeValues.reduce((acc, grade, index) => {
    return acc + (grade * weightValues[index]) / 100;
  }, 0);
};

const weightPercentage = (weightValues) => {
  return weightValues.reduce((acc, weight) => {
    return acc + weight;
  }, 0);
};

const gradeRounding = (grade) => Math.round(grade);

export { weightedGrades, weightPercentage, gradeRounding };
