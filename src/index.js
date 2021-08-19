/* eslint no-restricted-globals: "off", curly: "error" */

import './style.css';
import Task from './task';
import makeLi from './makeLi';
import Storage from './storage';

const addBtn = document.getElementById('add');
const removeAll = document.getElementById('clear');
let taskCounter = 1;
if (localStorage.getItem('list') == null) {
  taskCounter = 4;
}
const increaseCounter = () => {
  const res = taskCounter;
  taskCounter += 1;
  return res;
};

const storage = new Storage();
let tasks = storage.getList();

localStorage.setItem('list', JSON.stringify(tasks));

const updateTask = (bool, index) => {
  tasks[index - 1].completed = bool;
  localStorage.setItem('list', JSON.stringify(tasks));
  const text = document.getElementById(`${index}-description`);
  if (bool) {
    text.classList.add('overlined');
  } else {
    text.classList.remove('overlined');
  }
};

const loadPredef = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    makeLi(arr[i].description, arr[i].completed, increaseCounter());
  }
  localStorage.setItem('list', JSON.stringify(tasks));
  const completeCheckBox = document.querySelectorAll("input[type='checkbox']");
  completeCheckBox.forEach((box) => {
    box.addEventListener('click', () => {
      updateTask(box.checked, box.value);
    });
  });
};

loadPredef(tasks);

addBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const newIndex = increaseCounter();
  const description = document.getElementById('new-item').value;

  if (description === '' || description === ' ' || description == null) { return; }
  makeLi(description, false, newIndex);

  document.getElementById('new-item').value = '';
  const newTask = new Task(description, false, newIndex);

  tasks.push(newTask);
  localStorage.setItem('list', JSON.stringify(tasks));
  location.reload();
});

removeAll.addEventListener('click', (event) => {
  event.preventDefault();
  tasks = tasks.filter((task) => task.completed === false);
  localStorage.setItem('list', JSON.stringify(tasks));
  location.reload();
});
