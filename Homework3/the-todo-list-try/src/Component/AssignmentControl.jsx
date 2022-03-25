import { useState } from 'react';
import { BottomButton } from './BottomButton';

export function AssignmentControl(props) {
  const { numOfAssignment, setTheUserStage } = props;

  const [ifSelect, setIfSelect] = useState(1);
  const tempText = numOfAssignment === 1 ? ' item ' : ' items ';
  if (numOfAssignment === 0) {
    return null;
  } else {
    return (
      <footer className="footer">
        <span className="todo-count">
          {numOfAssignment} {tempText} left
        </span>
        <ul className="filters">
          <li>
            <BottomButton
              setTheUserStage={setTheUserStage}
              choice={[0, 1]}
              content=" All "
              ifSelect={ifSelect}
              setIfSelect={setIfSelect}
              theOrder={1}
            />
          </li>
          <li>
            <BottomButton
              setTheUserStage={setTheUserStage}
              choice={[1, 1]}
              content=" Active "
              ifSelect={ifSelect}
              setIfSelect={setIfSelect}
              theOrder={2}
            />
          </li>
          <li>
            <BottomButton
              setTheUserStage={setTheUserStage}
              choice={[0, 0]}
              content=" Completed "
              ifSelect={ifSelect}
              setIfSelect={setIfSelect}
              theOrder={3}
            />
          </li>
        </ul>
      </footer>
    );
  }
}
