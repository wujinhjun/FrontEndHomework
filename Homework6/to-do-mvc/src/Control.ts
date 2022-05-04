import { nanoid } from 'nanoid';
import { ToDoItem } from './models/TodoModel';

export function generateId() {
  return nanoid();
}
export function store(namespace: string, data?: Array<ToDoItem>) {
  if (data) {
    return localStorage.setItem(namespace, JSON.stringify(data));
  }

  const localStore = localStorage.getItem(namespace);
  return (localStore && JSON.parse(localStore)) || [];
}

export function judgePlur(count: number, word: string) {
  return count === 1 ? word : `${word}s`;
}
