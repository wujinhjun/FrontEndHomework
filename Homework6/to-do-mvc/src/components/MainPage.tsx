// import React from 'react';
import { ToDoItem } from '../models/TodoModel';
import { ToDo } from './ToDo';

interface Props {
  todos: Array<ToDoItem>;
  editing: string;
  onToggle: (todo: ToDoItem) => void;
  onToggleAll: (checked: boolean) => void;
  onEdit: (todo: ToDoItem) => void;
  onSave: (v: ToDoItem, val: string) => void;
  onCancel: () => void;
  onDestroy: (todo: ToDoItem) => void;
}

export default function MainPage(props: Props) {
  const {
    todos,
    editing,
    onToggle,
    onToggleAll,
    onEdit,
    onSave,
    onCancel,
    onDestroy,
  } = props;

  const activeToDoCount = todos.reduce(function (accum, todo) {
    return todo.completed ? accum : accum + 1;
  }, 0);

  return (
    <section className="main">
      <input
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
        checked={activeToDoCount === 0}
        onChange={event => onToggleAll((event.target as any).checked)}
      />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">
        {todos.map(todo => (
          <ToDo
            key={todo.id}
            todo={todo}
            editing={editing === todo.id}
            onCancel={onCancel}
            onDestroy={() => onDestroy(todo)}
            onEdit={() => onEdit(todo)}
            onSave={(v: string) => onSave(todo, v)}
            onToggle={() => onToggle(todo)}
          />
        ))}
      </ul>
    </section>
  );
}
