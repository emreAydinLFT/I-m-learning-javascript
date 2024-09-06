const url = 'https://api.openweathermap.org/data/2.5/'
const key ='6bac4429021f41516e071657246d2ae1'

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = '${url}weather?lat=${cityName}&appid=${key}&units=metric&lang=tr'
    
}
const searchBar = document.createElement('searchBar')
searchBar.addEventListener('keypress', setQuery)