import { ClassName } from './ClassName';

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
