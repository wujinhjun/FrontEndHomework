// import React from 'react';
import cx from 'classnames';
import { judgePlur } from '@/Control';

interface Props {
  activeToDoCount: number;
  nowShowing: NowShowing;
  hasCompletedToDos: boolean;
  onClearCompleted: () => void;
}

export type NowShowing = 'all' | 'active' | 'completed';

export default function FooterBar(props: Props) {
  const { activeToDoCount, nowShowing, hasCompletedToDos, onClearCompleted } =
    props;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeToDoCount}</strong>
        <span> </span>
        <span>{judgePlur(activeToDoCount, 'item')}</span>
        <span> left</span>
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className={cx({ selected: nowShowing === 'all' })}>
            All
          </a>
        </li>
        <span> </span>
        <li>
          <a
            href="#/active"
            className={cx({ selected: nowShowing === 'active' })}>
            Active
          </a>
        </li>
        <span> </span>
        <li>
          <a
            href="#/completed"
            className={cx({ selected: nowShowing === 'completed' })}>
            Completed
          </a>
        </li>
      </ul>
      {hasCompletedToDos && (
        <button
          className="clear-completed"
          type="button"
          onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}
