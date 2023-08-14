function addTask() {
    const taskText = document.querySelector('.text').value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('todo');
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="removeBtn" onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(taskItem);
        document.querySelector('.text').value = '';

        taskItem.addEventListener('click',function(){
            this.classList.toggle('completed');
        });
    }
} 

function removeTask(button) {
    const taskItem = button.parentElement;
    const taskList = document.getElementById('todo');
    taskList.removeChild(taskItem);
}

document.querySelector('.btn').addEventListener('click', addTask);

document.querySelector('.text').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
