const url = 'https://api.openweathermap.org/data/2.5/'
const key ='6bac4429021f41516e071657246d2ae1'

const setQuery = (e) => {
    if(e.key === '13')
        getResult(searchBar.value)
}

const getResult = (cityN) =>
const searchBar = document.createElement('searchBar')
searchBar.addEventListener('keypress', setQuery)