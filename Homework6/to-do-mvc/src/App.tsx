import React, {
  ChangeEvent,
  useState,
  KeyboardEvent,
  useEffect,
  lazy,
} from 'react';
import { useLocation } from '@modern-js/runtime/router';
import { NowShowing } from './components/FooterBar';
import { ToDoItem, TodoModel } from './models/TodoModel';
import { FooterTips } from './components/FooterTips';

import './folderForCss/base.css';
import './folderForCss/index.css';

const HeaderTitle = lazy(() => import('./components/HeaderTitle'));
const MainPage = lazy(() => import('./components/MainPage'));
const FooterBar = lazy(() => import('./components/FooterBar'));

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
    <React.Suspense fallback={<div>加载中……</div>}>
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
        <FooterTips />
      </React.Fragment>
    </React.Suspense>
  );
}

export default App;
