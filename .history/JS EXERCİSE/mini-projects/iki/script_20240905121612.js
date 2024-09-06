const button = document.getElementById('btn')
const content = document.getElementById('content')

// click = tıklama
// dblclick = çift tıklama
// focus = odaklama
// blur = odağı kaybetme

button.addEventListener('click', () =>{
   if (content.style.display === || content.style.display === "block"

   ) {
    content.style.display = "none";
    button.innerText = button.dataset.show

   }else {
    content.style.display = "block";
    button.innerText =but
   }
})