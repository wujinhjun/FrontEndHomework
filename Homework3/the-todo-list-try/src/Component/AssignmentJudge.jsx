export function AssignmentJudge(props) {
  const { index, theListActivated, setTheListActived, setNumOfAssignment } =
    props;
  return (
    <input
      type="checkbox"
      id={`checkbox${index}`}
      className="toggle"
      checked={theListActivated[index] === 0 ? 1 : 0}
      onChange={() => {
        const tempId = document.getElementById(`checkbox${index}`);
        if (theListActivated[index] === 0) {
          tempId.checked = true;
          setNumOfAssignment(prev => prev - 1);
        } else {
          tempId.checked = false;
          setNumOfAssignment(prev => prev + 1);
        }
      }}
      onClick={() => {
        const temp = theListActivated;
        if (temp[index] === 0) {
          temp[index] = 1;
        } else {
          temp[index] = 0;
        }
        setTheListActived(temp);
      }}></input>
  );
}
