export function ClassName(props) {
  const { ifSelect, theOrder } = props;
  console.log(`ifselect${{ ifSelect }}`);
  console.log(`theOrder${{ theOrder }}`);
  if (ifSelect === theOrder) {
    return 'selected';
  } else {
    return 'button';
  }
}
