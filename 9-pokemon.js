const pokemon = new XMLHttpRequest()
pokemon.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
pokemon.send()
pokemon.addEventListener('load', function() {
    const {abilities} = JSON.parse(this.responseText)

        const pokemon = new XMLHttpRequest()
        pokemon.open('GET', `${abilities[0].ability.url}`)
        pokemon.send()
        pokemon.addEventListener('load', function() {
        const {effect_entries} = JSON.parse(this.responseText)
        console.log(effect_entries.find(el => el.language.name === 'en').effect);
    })
})
