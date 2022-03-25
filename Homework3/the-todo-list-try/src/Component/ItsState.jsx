export function ItsState(props) {
  const { editing, edited } = props;

  if (editing) {
    return 'editing';
  } else if (edited) {
    return 'completed';
  } else {
    return 'view';
  }
}
