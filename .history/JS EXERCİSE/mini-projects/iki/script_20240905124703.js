const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

    const content = document.querySelector(button.dataset.target)
    button.innerText = button.dataset.hide

    button.addEventListener('click', () => {
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
})



const test ?










