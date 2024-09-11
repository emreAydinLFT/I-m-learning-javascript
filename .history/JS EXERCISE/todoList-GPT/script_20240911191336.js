
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
</script>