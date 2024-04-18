const OverAllGrade = ({ overAllTotal, overAllRounded }) => {
  return (
    <>
      <div className="rounded border px-4 py-2 mx-4 mt-2 text-sm font-medium text-gray-800 text-center">
        <p>Total: {overAllTotal}</p>
        <p>Rounded: {overAllRounded}</p>
      </div>
    </>
  );
};

export default OverAllGrade;
