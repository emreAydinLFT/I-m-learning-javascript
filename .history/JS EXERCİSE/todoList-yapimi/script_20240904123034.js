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
        return 
    }
    // yeni todo ögesini diziye ekleyelim
    todos.push(text);

    // listeyi güncelleyelin
    updateTodosList();

    // Input alanını temizleyelim
    input.value = '';
}

// Todo listesini güncellemek

 
