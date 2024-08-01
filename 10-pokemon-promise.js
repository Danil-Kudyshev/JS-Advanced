function getData(url) {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error ('Ошибка:' + response.status)
        }
        return response.json()
    })
}
getData('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(({abilities}) => getData(`${abilities[0].ability.url}`))
    .then(({effect_entries}) => console.log(effect_entries.find(el => el.language.name === 'en').effect))
    .catch(error => console.error(error))

//Второй вариант 

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(({abilities}) => fetch(`${abilities[0].ability.url}`))
    .then(response => response.json())
    .then(({effect_entries}) => console.log(effect_entries.find(el => el.language.name === 'en').effect))
    .catch(error => console.error(error))