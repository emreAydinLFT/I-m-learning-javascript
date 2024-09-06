const buttons = document.querySelectorAll('.b')
const content = document.getElementById('content')


button.innerText = button.dataset.hide

button.addEventListener('click', () =>{
   if (
    content.style.display === "" || 
    content.style.display === "block"

   ) {
    content.style.display = "none";
    button.innerText = button.dataset.show

   }else {
    content.style.display = "block";
    button.innerText = button.dataset.hide
   }
})