import { useState } from 'react';
import { TextBox } from './TextBox';
import { TextEnter } from './TextEnter';
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
        <TextBox setBuildAssignment={setBuildAssignment} />
      </header>
      <TextEnter
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
      />
    </div>
  );
}
