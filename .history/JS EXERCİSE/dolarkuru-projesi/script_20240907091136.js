const url = 'http://hasanadiguzel.com.tr/api/kurgetir'




    let getResult = (ForexSelling) => {
        let query =` ${url}ForexBuying `
        fetch('http://hasanadiguzel.com.tr/api/kurgetir')
    .then(response => response.json())
    .then(data => console.log(data.TCMB_AnlikKurBilgileri));
    };