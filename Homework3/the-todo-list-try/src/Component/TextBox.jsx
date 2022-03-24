export function TextBox(props) {
  const { setBuildAssignment } = props;
  return (
    <input
      type="text"
      id="textBox"
      className="new-todo"
      placeholder="What needs to be done?"
      onBlur={() => {
        setBuildAssignment(document.getElementById('textBox').value);
        const btnTemp = document.getElementById('toggle-all');
        btnTemp.checked = false;
      }}
      onKeyDown={e => {
        const enterCode = 13;
        if (e.keyCode === enterCode) {
          setBuildAssignment(document.getElementById('textBox').value);
          const btnTemp = document.getElementById('toggle-all');
          btnTemp.checked = false;
        }
      }}></input>
  );
}
