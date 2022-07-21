var axios = require('axios');


const indexController = {
    index: async (req, res) => {



        var config = {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/',
        headers: { }
        };

        axios(config)
        .then((response) => {

        var pokemons = response.data.results

        // for(var i = 0; i < pokemons.length; i++) {
            var config2 = {
                method: 'get',
                url: 'https://pokeapi.co/api/v2/pokemon/' + pokemons[0],
                headers: { }
                };

                // axios(config2[i])((responses) => {
                    console.log(config2)
                // }).catch((error) => {
                //     console.log('deu erro aqui')
                // })
                
        // }
       
        
                
        res.render('index', {
            title: 'API de Pokémons | Trigg - Test',
            description: 'Teste aplicado pela empresa Trigg - API de Pokémons',
            pokemons: pokemons
        })
                
        
    }).catch((error) => {
        console.log('deu erro aqui')
    })

        
    },
    pokemon: async (req, res) => {

        const { name } = req.params

        var config = {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/' + name,
        headers: { }
        };

        axios(config)
        .then(function (response) {
        
        var pokemon = response.data

        // console.log(pokemon)
        // console.log(pokemon.types.name)
        // console.log(pokemon.abilities.is_hidden)
        // console.log(pokemon.moves.length)

        
        // console.log(teste)

        for(var i = 0; i < pokemon.moves.length; i++) {
        if (i % 2 === 0) {

            

            console.log(i)
            
            }

            teste = pokemon.moves.slice(0, 5)
            console.log(teste)

        }
        
        res.render('pokemon', {
            title: 'API de Pokémons | Trigg - Test',
            description: 'Teste aplicado pela empresa Trigg - API de Pokémons',
            pokemon: pokemon   
        })

        })
        .catch(function (error) {
            console.log(error);
            res.render('404')
        });




        
    }

}

module.exports = indexController