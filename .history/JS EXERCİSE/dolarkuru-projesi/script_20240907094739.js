const url = "https://v6.exchangerate-api.com/v6/a059514c7fa073bc5f980801/latest/USD";
const key = 'a059514c7fa073bc5f980801'

function getData(url) {
fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data.conversion_rates);


    const try = data.conversion_rates.TRY;
    const USD = data.conversion_rates.USD;
    setData(USD, TR);
})
.catch((err) => console.warn(err));
}

function setData(USD, TRY){
    const dolar = document.querySelector('.dolar');
    dolar.textContent = USD.toString().slice(0, 4);
    const try = document.querySelector('.try');
    try.textContent = TRY.toString().slice(0, 4);
}

getData(url);

setInterval(() => {
    getData(url);
},30000);


