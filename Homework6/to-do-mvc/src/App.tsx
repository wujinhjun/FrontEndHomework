import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from 'react';
import { useLocation } from '@modern-js/runtime/router';

import { HeaderTitle } from './components/HeaderTitle';
import { MainPage } from './components/MainPage';
import { FooterBar, NowShowing } from './components/FooterBar';
import { ToDoItem, TodoModel } from './models/TodoModel';

import './folderForCss/base.css';
import './folderForCss/index.css';

const keyCodes = {
  Enter: 'Enter',
  Escape: 'Escape',
};

const model = new TodoModel('TodoMVC');

function App() {
  const [newToDo, setNewToDo] = useState('');
  const [editing, setEditing] = useState('');
  const [nowShowing, setNowShowing] = useState<NowShowing>('all');
  const [, forceUpdate] = useState(0);

  const { hash } = useLocation();
  //   accum为现在统计的数目
  const activeToDoCount = model.todos.reduce(function (accum, todo) {
    return todo.completed ? accum : accum + 1;
  }, 0);
  const completedToDoCount = model.todos.length - activeToDoCount;

  let showingToDos = model.todos;

  if (nowShowing === 'active') {
    showingToDos = model.todos.filter(todo => !todo.completed);
  }

  if (nowShowing === 'completed') {
    showingToDos = model.todos.filter(todo => todo.completed);
  }

  useEffect(() => {
    model.subscribe(() => forceUpdate(prev => prev + 1));
  }, []);

  useEffect(() => {
    if (hash.includes('active')) {
      setNowShowing('active');
    } else if (hash.includes('completed')) {
      setNowShowing('completed');
    } else {
      setNowShowing('all');
    }
    // console.log(nowShowing);
  }, [hash]);

  const handleNewToDoKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code !== keyCodes.Enter) {
      return;
    }

    event.preventDefault();

    const val = newToDo.trim();

    if (!val) {
      return;
    }

    model.addToDo(val);
    setNewToDo('');
  };

  const handleNewToDoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(event.target.value);
  };

  const onToggle = (todo: ToDoItem) => {
    model.toggle(todo);
  };

  const onToggleAll = (checked: boolean) => {
    model.toggleAll(checked);
  };

  const onDestory = (todo: ToDoItem) => {
    model.destroy(todo);
  };

  const onEdit = (todo: ToDoItem) => {
    setEditing(todo.id);
  };

  const onSave = (todo: ToDoItem, val: string) => {
    model.save(todo, val);
    setEditing('');
  };

  const onCancel = () => {
    setEditing('');
  };

  const onClearCompleted = () => {
    model.clearCompleted();
  };

  return (
    <React.Fragment>
      <section className="todoapp">
        <HeaderTitle
          newToDo={newToDo}
          handleNewToDoKeyDown={handleNewToDoKeyDown}
          handleNewToDoChange={handleNewToDoChange}
        />
        {Boolean(model.todos.length) && (
          <React.Fragment>
            <MainPage
              editing={editing}
              todos={showingToDos}
              onToggle={onToggle}
              onToggleAll={onToggleAll}
              onDestroy={onDestory}
              onEdit={onEdit}
              onSave={onSave}
              onCancel={onCancel}
            />
            <FooterBar
              activeToDoCount={activeToDoCount}
              nowShowing={nowShowing}
              onClearCompleted={onClearCompleted}
              hasCompletedToDos={completedToDoCount !== 0}
            />
          </React.Fragment>
        )}
      </section>
      <footer className="info">
        <div className="tips">
          <p>Double-click to edit a todo</p>
        </div>
        <p>A try for learing the react</p>
        <p>
          Created by the bigwig{' '}
          <a href="http://github.com/petehunt/">petehunt</a>
        </p>
        <p>
          Maded by a designer{' '}
          <a href="https://github.com/wujinhjun">wujinhjun</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default App;
