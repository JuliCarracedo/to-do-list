import makeLi from './makeLi';
import Task from './task';
import increaseCounter from './increaseCounter';
import Storage from './storage';

const storage = new Storage();

const tasks = storage.getList();

const addTodo = () => {
  const newIndex = increaseCounter();
  const description = document.getElementById('new-item').value;

  if (description === '' || description === ' ' || description == null) { return; }
  makeLi(description, false, newIndex);

  document.getElementById('new-item').value = '';
  const newTask = new Task(description, false, newIndex);

  tasks.push(newTask);
  localStorage.setItem('list', JSON.stringify(tasks));
  location.reload();
};

export default addTodo;