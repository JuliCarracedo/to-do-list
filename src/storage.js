export default class Storage {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('list'));
  }

  getList() {
    if (this.list != null) {
      return this.list;
    }

    return ([]);
  }
}