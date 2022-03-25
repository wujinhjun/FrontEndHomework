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
      setListOfAssignment([...listOfAssignment, buildAssignment]);
      setTheListActived([...theListActivated, 1]);
      setTheListArrange([...theListArrange, 1]);
      setNumOfAssignment(prev => prev + 1);
    }
  }, [buildAssignment]);
  useEffect(() => {
    document.getElementById('BoxText').value = '';
  }, [listOfAssignment]);

  return (
    <section>
      <ul className="todo-list">
        {listOfAssignment.map((num, index) => {
          if (
            (theListActivated[index] === theUserStage[0] ||
              theListActivated[index] === theUserStage[1]) &&
            theListArrange[index] === 1
          ) {
            return (
              <ItemList
                index={index}
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
