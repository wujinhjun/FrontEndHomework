import { useState } from 'react';
import { AssignmentBox } from './AssignmentBox';
import { AssignmentCondition } from './AssignmentCondition';
import { AssignmentList } from './AssignmentList';
import { AssignmentControl } from './AssignmentControl';

export function MainPage() {
  const [buildAssignment, setBuildAssignment] = useState('');
  const [listOfAssignment, setListOfAssignment] = useState([]);
  const [theListActivated, setTheListActived] = useState([]);
  const [theListArrange, setTheListArrange] = useState([]);
  const [numOfAssignment, setNumOfAssignment] = useState(0);
  const [theUserStage, setTheUserStage] = useState([0, 1]);
  return (
    <div className="todoapp">
      <h1>todos</h1>
      <header className="header">
        <AssignmentBox setBuildAssignment={setBuildAssignment} />
      </header>
      <AssignmentCondition
        theListActivated={theListActivated}
        setTheListActived={setTheListActived}
        theListArrange={theListArrange}
        setNumOfAssignment={setNumOfAssignment}
      />
      <AssignmentList
        buildAssignment={buildAssignment}
        listOfAssignment={listOfAssignment}
        setListOfAssignment={setListOfAssignment}
        theListActivated={theListActivated}
        setTheListActived={setTheListActived}
        theListArrange={theListArrange}
        setTheListArrange={setTheListArrange}
        setNumOfAssignment={setNumOfAssignment}
        theUserStage={theUserStage}
      />
      <AssignmentControl
        numOfAssignment={numOfAssignment}
        setTheUserStage={setTheUserStage}
        listOfAssignment={listOfAssignment}
        theListActivated={theListActivated}
        theListArrange={theListArrange}
        setTheListArrange={setTheListArrange}
      />
    </div>
  );
}
