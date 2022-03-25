export function ItsState(props) {
  const { editing, completed } = props;

  if (editing) {
    return 'editing';
  } else if (completed) {
    return 'completed';
  } else {
    return 'view';
  }
}
