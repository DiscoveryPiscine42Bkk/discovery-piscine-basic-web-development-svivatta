window.onload = function() {
    const ftList = document.getElementById('ft_list');
    const newBtn = document.getElementById('newBtn');

    // โหลดจาก cookie
    loadTodo();

    newBtn.addEventListener('click', function () {
        const text = prompt("Enter your new TO DO:");
        if (text && text.trim() !== "") {
            createTodo(text.trim());
            saveTodo();
        }
    });

    function createTodo(text) {
        const div = document.createElement('div');
        div.className = "todo";
        div.innerText = text;
        div.addEventListener('click', function () {
            if (confirm("Do you really want to remove this TO DO?")) {
                div.remove();
                saveTodo();
            }
        });
        ftList.appendChild(div);
    }

    function saveTodo() {
        const todos = [];
        const todoElements = document.querySelectorAll('#ft_list .todo');
        todoElements.forEach(el => todos.push(el.innerText));
        document.cookie = "todoList=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/";
    }

    function loadTodo() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === "todoList" && value) {
                const todos = JSON.parse(decodeURIComponent(value));
                todos.forEach(text => createTodo(text));
            }
        }
    }
}
