const setQuery = (e) => {
    if (e.keyCOde == '13')
        getResult(searchBar.value)
} 

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
} 

const = displayResult = (result) => {
    
}