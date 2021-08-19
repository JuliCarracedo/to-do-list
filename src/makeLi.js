export default function makeLi(description, completed, index){
    const element = document.createElement('li');
    element.innerHTML = `
    <input type="checkbox" ${getChecked(completed)} id="${index}-check" value="${index}">
    <p id="${index}-description" class="${getClass(completed)}">${description}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
    `;
    element.classList.add('list-element', 'd-flex', 'justify-content-between', 'align-content-center', 'py-3');
    element.setAttribute('id', index);
    list.appendChild(element);
}

let getChecked = (bool) => {
    if( bool ){
        return 'checked';
    }
    else {
        return '';
    }
}

let getClass = (bool) =>{
    if( bool ){
        return 'overlined';
    }
    else {
        return '';
    }
}