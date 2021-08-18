import './style.css';
import {Task} from './task.js'

  const addBtn = document.getElementById('add');
  const list = document.getElementById('list');
  
  let taskCounter = 1;
  let tasks = [new Task("Do the dishes",false, taskCounter++), new Task("Wash my mouth",false, taskCounter++), new Task("Have a Coffee",false, taskCounter++)];

  console.log(tasks);

  addBtn.addEventListener('click', (event) => {
      const element = document.createElement('li');

      event.preventDefault
      let description = document.getElementById("new-item").value;
      if(description === ""|| description ===" " || description == null){
        alert("Description can't be empty");
        return;
      }
 
      element.innerHTML = `
                    <input type="checkbox" id="check">
                    <p>${description}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
              `;
      element.classList.add('list-element', 'd-flex', 'justify-content-between', 'align-content-center', 'py-3');
      element.id = " "
      list.appendChild(element);
      alert(`'${description}' added.`);
      document.getElementById("new-item").value =" ";
    }
);