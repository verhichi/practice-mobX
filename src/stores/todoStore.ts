import { observable, autorun, computed, action, makeObservable } from "mobx";

export type tTodo = {
  task: string;
  completed: boolean;
};

class TodoStore {
  todos: tTodo[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
      toggleCompleted: action,
      changeTask: action,
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  get report() {
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : "none"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task: string) {
    this.todos.push({
      task,
      completed: false,
    });
  }

  toggleCompleted(todo: tTodo) {
    todo.completed = !todo.completed;
  }

  changeTask(todo: tTodo, task: string) {
    todo.task = task;
  }
}

export const todoStore = new TodoStore();
