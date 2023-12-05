const submit = document.querySelector('.submit');
const btn = document.querySelector('.btn');
const toDoConainer = document.querySelector('.toDoContainer')

btn.addEventListener('click', () => {
    const task = document.createElement('li');
    task.innerText=submit.value;
    task.classList.add('addedTask');
    toDoConainer.appendChild(task);
    submit.value = '';

    task.addEventListener('click', () => {
        task.classList.add('doneTask');
    })

    task.addEventListener('dblclick', () => {
        toDoConainer.removeChild(task);
    })

})
