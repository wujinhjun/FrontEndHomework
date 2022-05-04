import { ChangeEvent, KeyboardEvent } from 'react';

interface Props {
  newToDo: string;
  handleNewToDoKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleNewToDoChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function HeaderTitle(props: Props) {
  const { newToDo, handleNewToDoKeyDown, handleNewToDoChange } = props;
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        placeholder="Whats needs to be done"
        className="new-todo"
        value={newToDo}
        onKeyDown={handleNewToDoKeyDown}
        onChange={handleNewToDoChange}
        autoFocus={true}
      />
    </header>
  );
}
