const Dropdown = ({ value, courseList, onChange }) => {
  return (
    <select
      className={'mt-2 mb-2 border shadow rounded px-1 py-1 text-sm text-slate-500 border-gray-200'}
      value={value}
      onChange={onChange}>
      {courseList.map((course) => (
        <option key={course} value={course}>
          {course}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
