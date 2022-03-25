export function ClassName(props) {
  const { ifSelect, theOrder } = props;
  if (ifSelect === theOrder) {
    return 'selected';
  } else {
    return 'button';
  }
}
