import { generateId, store } from '../Control';

export class TodoModel {
  key: string;

  todos: Array<ToDoItem>;

  onChanges: Array<Subscriber>;

  //   析构
  constructor(key: string) {
    this.key = key;
    this.todos = store(key);
    this.onChanges = [];
  }

  //   监听状态
  subscribe(onChange: Subscriber) {
    this.onChanges.push(onChange);
  }

  //   触发与监听
  inform() {
    store(this.key, this.todos);
    this.onChanges.forEach(function (cb) {
      cb();
    });
  }

  //   添加todo
  addToDo(title: string) {
    this.todos = this.todos.concat({
      id: generateId(),
      title,
      completed: false,
    });

    this.inform();
  }

  //   切换所有状态
  toggleAll(checked: boolean) {
    this.todos = this.todos.map(function (todo) {
      return {
        ...todo,
        completed: checked,
      };
    });
    this.inform();
  }

  //   切换状态
  toggle(todoToToggle: ToDoItem) {
    this.todos = this.todos.map(function (todo) {
      return todo !== todoToToggle
        ? todo
        : {
            ...todo,
            completed: !todo.completed,
          };
    });

    this.inform();
  }

  //   删除
  destroy(todo: ToDoItem) {
    this.todos = this.todos.filter(function (candidate) {
      return candidate !== todo;
    });

    this.inform();
  }

  //   修改
  save(todoSave: ToDoItem, text: string) {
    this.todos = this.todos.map(function (todo) {
      return todo !== todoSave
        ? todo
        : {
            ...todo,
            title: text,
          };
    });

    this.inform();
  }

  //   删除已完成todo
  clearCompleted() {
    this.todos = this.todos.filter(function (todo) {
      return !todo.completed;
    });

    this.inform();
  }
}

export type Subscriber = () => void;

export interface ToDoItem {
  id: string;
  title: string;
  completed: boolean;
}
