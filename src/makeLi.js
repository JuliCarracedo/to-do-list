const getChecked = (bool) => {
  if (bool) {
    return 'checked';
  }

  return '';
};

const getClass = (bool) => {
  if (bool) {
    return 'overlined';
  }

  return '';
};

export default function makeLi(description, completed, index) {
  const element = document.createElement('li');
  const list = document.getElementById('list');
  element.innerHTML = `
    <input type="checkbox" ${getChecked(completed)} id="${index}-check" value="${index}">
    <p id="${index}-description" class="${getClass(completed)}">${description}</p>
    <div class="dropdown">
    <div class="dropdown">
    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton-${index}" data-bs-toggle="dropdown" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-${index}">
      <li><a class="dropdown-item dropdown-editor" id="edit-${index}" href="#">Edit</a></li>
      <li><a class="dropdown-item dropdown-remover" id="remove-${index}" href="#">Remove</a></li>
    </ul>
</div> `;
  element.classList.add('list-element', 'd-flex', 'justify-content-between', 'align-content-center', 'py-3');
  element.setAttribute('id', index);
  list.appendChild(element);
}
