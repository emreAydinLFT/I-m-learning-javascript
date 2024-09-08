const url = "https://v6.exchangerate-api.com/v6/a059514c7fa073bc5f980801/latest/USD";
const key 
function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.TCMB_AnlikKurBilgileri)


        const ForexBuying = data.rates.ForexBuying;
    });
    
}
getData(url);
