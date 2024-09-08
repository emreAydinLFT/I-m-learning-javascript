const url = "https://v6.exchangerate-api.com/v6/a059514c7fa073bc5f980801/latest/USD";
const key = 'a059514c7fa073bc5f980801'

function getData(url) {
fetch(url)                                  // 1. 'fetch' fonksiyonu, 'url' parametresindeki adrese bir HTTP isteği yapar.
.then((res) => res.json())                  // 2. İstek başarılı olursa, gelen HTTP cevabını alır ve 'res' değişkenine atar.
                                            // 'res.json()' metodu ise bu cevabı JSON formatına çevirir.               
.then((data) => {                           // 3. JSON verisi, data olarak adlandırılan bir değişkene atanır. Bu noktada JSON verisinin tüm                     içeriğine erişebilirsiniz.
    console.log(data.conversion_rates);     // 4. 'data' içindeki 'conversion_rates' adlı özelliği (döviz kurları) konsola yazdırır.


    const TRY = data.conversion_rates.TRY;
    const USD = data.conversion_rates.USD;
    setData(USD, TRY);
})
.catch((err) => console.warn(err));
}

function setData(USD, TRY){
    const dollar = document.querySelector('.USD');
    const türkLirası = document.querySelector('.TRY');


    dollar.textContent = USD.toString().slice(0, 4);
    türkLirası.textContent = TRY.toString().slice(0, 4);
}

getData(url);

setInterval(() => {
    getData(url);
},30000);


