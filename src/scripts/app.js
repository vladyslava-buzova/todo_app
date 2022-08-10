const root  = document.querySelector('.todo-app');

const newInput = root.querySelector('.todo-input');
const todoList = root.querySelector('.todo-list');
const clearComplet = root.querySelector('.clear-complet');
const filter = root.querySelector('.filter');



// ----- function renew the amount of unfinished todos

function updateInfo(){
  const notCompleted = root.querySelectorAll('.toggle:not(:checked)');
  const counter = root.querySelector('.todo-count');
  counter.innerHTML = `${notCompleted.length} items left`;
}


// ---- add elem by click on the button

const btn = root.querySelector('.btn');

btn.addEventListener("click", (event) => { 
  if(!newInput.value) {
    return;
  }

  // generate id
  const id = +new Date();

  // add a new todo in our list
  todoList.insertAdjacentHTML('beforeend', `
    <li class="todo-item">
      <input type="checkbox" class="toggle color" id="to-do${id}">
      <label for="to-do${id} text">${newInput.value}</label>
      <button class="button delete">
        <i class="fa-solid fa-xmark delete"></i>
      </button>
    </li>
  `);

  // clear the input
  newInput.value = '';

  // renew the amount of unfinished todos
  updateInfo();

});

// -------------



// filter.addEventListener('click', (event) =>  {
//   if (!event.target.dataset.filter) {
//     return;
//   }

// const filterButtons = root.querySelectorAll('[data-filter]');
//   for (const button of filterButtons) {
//     button.classList.toggle('selected', event.target === button)
//   }

// const togglers = root.querySelectorAll('.toggle');

// for (const toggler of togglers) {
//   const item = toggler.closest('.todo-item');

//   switch (event.target.dataset.filter) {
//     case 'all':
//       item.hidden = false;
//       break;

//     case 'active':
//       item.hidden = toggler.checked;
//       break;

//     case 'complited':
//       item.hidden = !toggler.checked;
//       break; 
//   }
//  }
// })


//=========== complete all butten

clearComplet.addEventListener('click', () => {
  const notCompleted = root.querySelectorAll('.toggle:checked');

  for(const toggle of notCompleted) {
    toggle.closest('.todo-item').remove();
  }

})
// ------ add item by pressinf 'Enter'

newInput.addEventListener('keydown', (event) => {
  if(event.key !== 'Enter') {
    return;
  }

  if(!newInput.value) {
    return;
  }

  // generate id
  const id = +new Date();

  // add a new todo in our list
  todoList.insertAdjacentHTML('beforeend', `
    <li class="todo-item">
      <input type="checkbox" class="toggle color" id="to-do${id}">
      <label for="to-do${id} text">${newInput.value}</label>
      <button class="button delete">
        <i class="fa-solid fa-xmark delete"></i>
      </button>
    </li>
  `);

  // clear the input
  newInput.value = '';

  // renew the amount of unfinished todos
  updateInfo();

})


// ------delete element from todo
todoList.addEventListener('click', (event) => {
//if we didnt click on the element witch matches '.delete' class, then no need to do anything
  if(!event.target.matches('.delete')) {
    return;
  }

  event.target.closest('.todo-item').remove();

  // renew the amount of unfinished todos
  updateInfo();
});

//-------change element from todo
todoList.addEventListener('change', (event) => {
  //if we didnt click on the element witch matches '.delete' class, then no need to do anything
  if(!event.target.matches('.toggle')) {
    return;
  }

  event.target.closest('.todo-item').classList.toggle('completed', event.target.checked);

  // renew the amount of unfinished todos
  updateInfo();
});
  




