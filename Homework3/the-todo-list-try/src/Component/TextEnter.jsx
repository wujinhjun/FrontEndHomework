export function TextEnter(props) {
  const {
    theListActivated,
    setTheListActived,
    theListArrange,
    setNumOfAssignment,
  } = props;

  return (
    <span>
      <input
        type="checkbox"
        className="toggle-all"
        id="toggle-all"
        onClick={() => {
          const tempVar = theListActivated;
          let countTemp = 0;
          for (let i = 0; i < theListActivated.length; i++) {
            countTemp += tempVar[i] + theListArrange[i] <= 1 ? 0 : 1;
          }

          if (countTemp > 0) {
            for (let i = 0; i < theListActivated.length; i++) {
              tempVar[i] = 0;
              const thisTemp = document.getElementById(`button${i}`);
              if (thisTemp != null) {
                thisTemp.checked = true;
              }
            }
            setNumOfAssignment(0);
          } else {
            for (let i = 0; i < theListActivated.length; i++) {
              tempVar[i] = 1;
              const thisTemp = document.getElementById(`button${i}`);
              if (thisTemp != null) {
                thisTemp.checked = false;
              }
              countTemp += tempVar[i] + theListArrange[i] <= 1 ? 0 : 1;
            }
            setNumOfAssignment(countTemp);
          }
          setTheListActived(tempVar);
        }}
      />
      {/* <label htmlFor="toggle-all"></label> */}
    </span>
  );
}
