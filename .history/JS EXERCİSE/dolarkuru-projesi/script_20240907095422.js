const url = "https://v6.exchangerate-api.com/v6/a059514c7fa073bc5f980801/latest/USD";
const key = 'a059514c7fa073bc5f980801'

function getData(url) {
fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data.conversion_rates);


    const TRY = data.conversion_rates.TRY;
    const USD = data.conversion_rates.USD;
    setData(USD, TRY);
})
.catch((err) => console.warn(err));
}

function setData(USD, TRY){
    const dollar = document.querySelector('.USD');
    const türkLirası = document.querySelector('.TRY');


    d.textContent = USD.toString().slice(0, 4);
    TRY.textContent = TRY.toString().slice(0, 4);
}

getData(url);

setInterval(() => {
    getData(url);
},30000);


