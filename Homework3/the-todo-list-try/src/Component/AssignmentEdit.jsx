export function AssignmentEdit(props) {
  const { index, listOfAssignment, setListOfAssignment, setIfEditing } = props;
  return (
    <input
      className="edit"
      id={`editing${index}`}
      onBlur={() => {
        const temp = listOfAssignment;
        temp[index] = String(document.getElementById(`editing${index}`).value);
        if (temp[index] === '') {
          return;
        }
        setListOfAssignment(temp);
        setIfEditing(false);
      }}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          const temp = listOfAssignment;
          temp[index] = String(
            document.getElementById(`editing${index}`).value,
          );
          if (temp[index] === '') {
            return;
          }
          setListOfAssignment(temp);
          setIfEditing(false);
        }
      }}></input>
  );
}
