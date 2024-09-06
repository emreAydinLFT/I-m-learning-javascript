const url = 'https://api.openweathermap.org/data/2.5/'
const key ='6bac4429021f41516e071657246d2ae1'

const setQuery = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `'${url}weather?lat=${cityName}&appid=${key}&units=metric&lang=tr'`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResul)
}

const displayResult = (result) => {
    let city = document.querySelector(':city')
    city.innerText =`${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText =`${Math.round(result.main)}`
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)