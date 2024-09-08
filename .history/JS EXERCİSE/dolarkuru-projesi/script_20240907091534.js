const url = 'http://hasanadiguzel.com.tr/api/kurgetir'

fetch('http://hasanadiguzel.com.tr/api/kurgetir')
    .then(response => response.json())
    .then(data => console.log(data.TCMB_AnlikKurBilgileri));

function 