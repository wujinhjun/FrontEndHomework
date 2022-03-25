import { useEffect } from 'react';
import { ItemList } from './ItemList';

export function AssignmentList(props) {
  const {
    buildAssignment,
    listOfAssignment,
    setListOfAssignment,
    theListActivated,
    setTheListActived,
    theListArrange,
    setTheListArrange,
    setNumOfAssignment,
    theUserStage,
  } = props;

  useEffect(() => {
    if (buildAssignment !== '') {
      setNumOfAssignment([...listOfAssignment, buildAssignment]);
      setTheListActived([...theListActivated, 1]);
      setTheListArrange([...theListArrange, 1]);
      setNumOfAssignment(prev => prev + 1);
    }
  }, [buildAssignment]);
  useEffect(() => {
    document.getElementById('textBox').value = '';
  }, [listOfAssignment]);

  return (
    <section>
      <ul className="todo-list">
        {theListActivated.map((num, i) => {
          if (
            (theListActivated[i] === theUserStage[0] ||
              theListActivated[i] === theUserStage[1]) &&
            theListArrange[i] === 1
          ) {
            return (
              <ItemList
                key={i}
                index={i}
                listOfAssignment={listOfAssignment}
                setListOfAssignment={setListOfAssignment}
                theListActivated={theListActivated}
                setTheListActived={setTheListActived}
                theListArrange={theListArrange}
                setTheListArrange={setTheListArrange}
                setNumOfAssignment={setNumOfAssignment}
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
    </section>
  );
}
