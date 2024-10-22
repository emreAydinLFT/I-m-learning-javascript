// DOM elementlerini seçelim
const input = document.getElementById('todo-input');
const button = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// todo ögelerini saklamak için boş bir dizi oluşturalım
const todos = [];

// todo eklemek için fonksiyon oluşturuyoruz
function addTodo() {
    const text = input.value.trim();
    if (text === '') {
        alert('Lütfen bir görev girin');
        return;
    }

    // Yeni todo öğesini diziye ekleyelim
    todos.push(text);
    
    // Listeyi güncelleyelim
    updateTodoList();

    // Input alanını temizleyelim
    input.value = '';
}

// Todo listesini güncellemek için fonksiyon
function updateTodoList() {
    // Mevcut listeyi temizleyelim
    todoList.innerHTML = '';

    // Todo listesindeki her öğeyi ekleyelim
    for (let i = 0; i < todos.length; i++) {
        const todoItem = document.createElement('li');
        todoItem.textContent = todos[i];
        
        // Silme butonu oluşturalım
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.onclick = function() {
            deleteTodo(i);
        };
        
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
}

// Todo'yu silmek için fonksiyon
function deleteTodo(index) {
    todos.splice(index, 1); // Seçilen todo öğesini diziden çıkaralım
    updateTodoList(); // Listeyi güncelleyelim
}

// Butona tıklama olayını ekleyelim
button.addEventListener('click', addTodo);
