// DOM elementlerini seçelim
const input = document.getElementById('todo-input');
const button = document.getElementById('add-todo');
const todoList =  document.getElementById('todo-list');

// todo ögelerini saklamak için bo bir dizi oluşturalım

const todos = [];

// todo eklemek için fonksiyon oluşturuyoruz

function addTodo() {
    const text = input.value.trim();
    if (text === ''){
        alert ('Lütfen bir görev girin')
        return;
    }
    // yeni todo ögesini diziye ekleyelim
    todos.push(text);

    // listeyi güncelleyelin
    updateTodoList();

    // Input alanını temizleyelim
    input.value = '';
}

// Todo listesini güncellemek için fonksiyon yazalım.

function updateTodoList() {
    //Mevcut listeyi temizleyelim
    todoList.innerHTML = '';

    // Todo listesindeki herögeyi yükleyelim
    for (let i = 0; i < todos.length; i++) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todos[i];

        // Silme butonu oluşturalım
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.onclick = function () {
            deleteTodo(i);
        };

        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
}

// todo'yu silmek için foknskiyon
function deleteTodo(index) {
    todos.splice(index,1);  //seçlilen todo öğesini diziden çıkaralım
    updateTodoList(); // listeyi güncelleyelim
}
// butona tıklama olayını ekleyelim
button.addEventListener('click', addTodo);

 