const url = "http://hasanadiguzel.com.tr/api/kurgetir";

function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.TCMB_AnlikKurBilgileri)


        const ForexBuying = data.rates.ForexBuying
    });
    
}
getData(url);
