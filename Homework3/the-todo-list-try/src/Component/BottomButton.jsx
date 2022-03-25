// import { ClassName } from './ClassName';

function ClassName(props) {
  const { ifSelect, theOrder } = props;
  if (ifSelect === theOrder) {
    return 'selected';
  } else {
    return 'button';
  }
}

export function BottomButton(props) {
  const { setTheUserStage, choice, content, ifSelect, setIfSelect, theOrder } =
    props;
  return (
    <button
      type="button"
      className={ClassName(ifSelect, theOrder)}
      onClick={() => {
        setTheUserStage(choice);
        setIfSelect(theOrder);
      }}>
      {content}
    </button>
  );
}
