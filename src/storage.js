import Task from './task';

export default class Storage {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('list'));
  }

  getList() {
    if (this.list != null) {
      return this.list;
    }

    return ([new Task('Do the dishes', false, 1), new Task('Wash my mouth', false, 2), new Task('Have a Coffee', false, 3)]);
  }
}