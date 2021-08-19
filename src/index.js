import './style.css';
import Task from './task';
import makeLi from './makeLi';
import Storage from './storage'

const addBtn = document.getElementById('add');
const list = document.getElementById('list');
let taskCounter = 1;

const increaseCounter = () => {
  const res = taskCounter;
  taskCounter += 1;
  return res;
};

const storage = new Storage();
let tasks = storage.getList();

localStorage.setItem('list', JSON.stringify(tasks));

const loadPredef = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    makeLi(arr[i].description, increaseCounter());
  }
  localStorage.setItem('list', JSON.stringify(tasks));
};

loadPredef(storage.list);

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let newIndex = increaseCounter();
  const description = document.getElementById('new-item').value;
  if (description === '' || description === ' ' || description == null) {return;}
  makeLi(description, newIndex);
  document.getElementById('new-item').value = '';
  let newTask = new Task(description, false, newIndex);
  tasks.push(newTask);
  localStorage.setItem('list', JSON.stringify(tasks));
});


 