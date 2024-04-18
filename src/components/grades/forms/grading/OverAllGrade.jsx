const OverAllGrade = ({ overAllTotal, overAllRounded }) => {
  return (
    <>
      <div className="">
        <p>Total: {overAllTotal}</p>
        <p>Rounded: {overAllRounded}</p>
      </div>
    </>
  );
};

export default OverAllGrade;
