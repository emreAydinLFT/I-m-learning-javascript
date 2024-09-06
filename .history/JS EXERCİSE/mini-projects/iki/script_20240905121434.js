const button = document.getElementById('btn')
const content = document.getElementById('content')

// click = tıklama
// dblclick = çift tıklama
// focus = odaklama
// blur = odağı kaybetme

button.addEventListener('click', () =>{
   if (content.style.display === "" æ) {
    content.style.display = "none";
   }else {
    content.style.display = "";
   }
})