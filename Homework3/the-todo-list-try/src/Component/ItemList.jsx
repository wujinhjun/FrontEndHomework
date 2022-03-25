import { useState } from 'react';
import { AssignmentDelete } from './AssignmentDelete';
import { AssignmentJudge } from './AssignmentJudge';
import { AssignmentEdit } from './AssignmentEdit';
import { ItsState } from './ItsState';

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
        completed: theListActivated[index] === 1 ? 0 : 1,
      })}
      id={`theAssign${index}`}>
      <div className="view">
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
          {/* {index} */}
        </label>
        <AssignmentDelete
          index={index}
          theListActivated={theListActivated}
          theListArrange={theListArrange}
          setTheListArrange={setTheListArrange}
          setNumOfAssignment={setNumOfAssignment}
        />
      </div>
      <AssignmentEdit
        index={index}
        listOfAssignment={listOfAssignment}
        setListOfAssignment={setListOfAssignment}
        setIfEditing={setIfEditing}
      />
    </li>
  );
}
