export function AssignmentDelete(props) {
  const [
    index,
    theListActivated,
    theListArrange,
    setTheListArrange,
    setNumOfAssignment,
  ] = props;

  return (
    <button
      className="destroy"
      type="button"
      onClick={() => {
        const temp = theListArrange;
        temp[index] = 0;
        setTheListArrange(temp);
        const tempId = document.getElementById(`theAssign${index}`);
        tempId.style.display = 'none';
        setNumOfAssignment(prev => prev - theListActivated[index]);
      }}></button>
  );
}
