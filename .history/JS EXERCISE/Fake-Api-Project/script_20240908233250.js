const img = document.getElementsByTagName('.cardImage');
const title = document.getElementsByTagName('.title');
const price = document.getElementsByTagName('.price');
const description = document.getElementsByTagName('.description');
const category = document.getElementsByTagName('.category');





fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then((data) => {                           // 3. JSON verisi, data olarak adlandırılan bir değişkene atanır. Bu noktada JSON verisinin tüm     içeriğine erişebilirsiniz.
                console.log(data.conversion_rates);     // 4. 'data' içindeki 'conversion_rates' adlı özelliği (döviz kurları) konsola yazdırır.
                const TRY = data.conversion_rates.TRY;
                const USD = data.conversion_rates.USD;
                setData(USD, TRY);
            })
