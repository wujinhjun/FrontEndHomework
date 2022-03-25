export function AssignmentBox(props) {
  const { setBuildAssignment } = props;
  return (
    <input
      type="text"
      id="BoxText"
      className="new-todo"
      placeholder="What needs to be done?"
      onBlur={() => {
        setBuildAssignment(document.getElementById('BoxText').value);
        const btnTemp = document.getElementById('toggle-all');
        btnTemp.checked = false;
      }}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          setBuildAssignment(document.getElementById('BoxText').value);
          const btnTemp = document.getElementById('toggle-all');
          btnTemp.checked = false;
        }
      }}></input>
  );
}
