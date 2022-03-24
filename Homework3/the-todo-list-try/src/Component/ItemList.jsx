import { useState } from 'react';
import { AssignmentDelete } from './AssignmentDelete';
import { AssignmentJudge } from './AssignmentJudge';

function ItsState(props) {
  const { editing, edited } = props;

  if (editing) {
    return 'editing';
  } else if (edited) {
    return 'edited';
  } else {
    return 'watch';
  }
}

export function ItemList(props) {
  const {
    index,
    listOfAssignment,
    setListOfAssignment,
    theListActivated,
    setTheListActived,
    theListArrange,
    setTheListArrange,
    setNumOfAssignment,
  } = props;

  const [ifEditing, setIfEditing] = useState(false);

  return (
    <li
      key={index}
      className={ItsState({
        editing: ifEditing,
        edited: theListActivated[index] === 1 ? 0 : 1,
      })}
      id={`theAssign${index}`}>
      <div className="watch">
        <AssignmentJudge
          index={index}
          theListActivated={theListActivated}
          setTheListActived={setTheListActived}
          setNumOfAssignment={setNumOfAssignment}
        />
        <label
          onDoubleClick={() => {
            setIfEditing(true);
          }}>
          {listOfAssignment[index]}
        </label>
        <AssignmentDelete
          index={index}
          theListActivated={theListActivated}
          theListArrange={theListArrange}
          setTheListArrange={setTheListArrange}
          setNumOfAssignment={setNumOfAssignment}
        />
      </div>
    </li>
  );
}
