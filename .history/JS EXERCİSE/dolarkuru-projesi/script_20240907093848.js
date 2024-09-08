const url = "https://v6.exchangerate-api.com/v6/a059514c7fa073bc5f980801/latest/USD";
const key = 'a059514c7fa073bc5f980801'

function getData(url) {
fetch(url)
.then((res) => res.json())
.then((data) => {
    console.log(data.conversion_rates);



    const USD = data.conversion_rates.USD;
    setData(USD);
})
.catch((err) => console.warn(err));
}
getData(url);

