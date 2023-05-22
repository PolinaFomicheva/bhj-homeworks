const tasksList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const add = document.getElementById('tasks__add');

// ENTER
input.addEventListener('keyup', (event) => {
    event.preventDefault();
    if(event.code === 'Enter' && input.value != '') {
        const element = document.createElement('div');
        element.classList.add('task');
        element.innerHTML +=`
        <div class="task__title">
        ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      `;
      tasksList.appendChild(element);
        const remove = element.querySelector('.task__remove');
        remove.addEventListener('click', (el) => {
            el.target.closest('.task').remove()
        });

      input.value ='';
    }
})

// BUTTON
add.addEventListener('click', (event) => {
    event.preventDefault();
    if(input.value != '') {
        const element = document.createElement('div');
        element.classList.add('task');
        element.innerHTML +=`
        <div class="task__title">
        ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      `;
      tasksList.appendChild(element);
        const remove = element.querySelector('.task__remove');
        remove.addEventListener('click', (el) => {
            el.target.closest('.task').remove()
        });

      input.value ='';
    }
})
