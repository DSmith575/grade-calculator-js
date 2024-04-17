const Dropdown = ({ headerTitle, value, courseList, onChange }) => {
  return (
    <>
      <h2>{headerTitle}</h2>
      <select value={value} onChange={onChange}>
        {courseList.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
