/* eslint no-restricted-globals: "off", curly: "error" */

import './style.css';
import Task from './task';
import makeLi from './makeLi';
import Storage from './storage';

const addBtn = document.getElementById('add');
const removeAll = document.getElementById('clear');
const formField = document.getElementById('new-item');
const storage = new Storage();
let tasks = storage.getList();
localStorage.setItem('list', JSON.stringify(tasks));

let taskCounter = 1;
if (localStorage.getItem('list') == null) {
  taskCounter = 4;
}

const increaseCounter = () => {
  const res = taskCounter;
  taskCounter += 1;
  return res;
};

const removerListener = (id) => {
  const index = id.slice(7).toString() - 1;
  tasks.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(tasks));
  location.reload();
};

const editorListener = (id) => {
  const index = id.slice(5).toString();
  console.log(index);
  const textField = document.getElementById(`${index}-description`);
  textField.innerHTML = '';
  const editField = document.createElement('input');
  editField.type = 'text';
  editField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      tasks[index - 1].description = editField.value;
      localStorage.setItem('list', JSON.stringify(tasks));
      textField.innerHTML = `${editField.value}`;
    }
  });
  textField.appendChild(editField);
};

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
  const completeRemovers = document.querySelectorAll('a.dropdown-remover');
  completeRemovers.forEach((link) => {
    link.addEventListener('click', () => {
      removerListener(link.id);
    });
  });
  const completeEditors = document.querySelectorAll('a.dropdown-editor');
  completeEditors.forEach((link) => {
    link.addEventListener('click', () => {
      editorListener(link.id);
    });
  });
};

loadPredef(tasks);

formField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const newIndex = increaseCounter();
    const description = document.getElementById('new-item').value;

    if (description === '' || description === ' ' || description == null) { return; }
    makeLi(description, false, newIndex);

    document.getElementById('new-item').value = '';
    const newTask = new Task(description, false, newIndex);

    tasks.push(newTask);
    localStorage.setItem('list', JSON.stringify(tasks));
    location.reload();
  }
});

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
