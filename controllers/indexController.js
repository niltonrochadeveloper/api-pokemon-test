var axios = require('axios');


const indexController = {
    index: async (req, res) => {

        var config = {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon?limit=12',
        headers: { }
        };

        axios(config)
        .then((response) => {

        var pokemons = response.data.results
                
        res.render('index', {
            title: 'API de Pokémons | Trigg - Test',
            description: 'Teste aplicado pela empresa Trigg - API de Pokémons',
            pokemons: pokemons
        })
                
        
    }).catch((error) => {
        console.log('deu erro aqui: '+ error)
    })

        
    },

    pokemon: async (req, res) => {

        try {
            const { name } = req.params

        var config = {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/' + name,
        headers: { }
        };

        axios(config)
        .then(function (response) {
        
        var pokemon = response.data     
        
        res.render('pokemon', {
            title: pokemon.name + ' | API de Pokémons | Trigg - Test',
            description: 'Teste aplicado pela empresa Trigg - API de Pokémons',
            pokemon: pokemon
        })
    })
        .catch((error) => {
            console.log('deu erro aqui: '+ error)
        })

        } catch (error) {
            console.log('deu erro aqui: '+ error)
        }

        
    },

    paginaNaoEncontrada: async (req, res) => {

        try {
            
            res.render('404');

        } catch (error) {
            console.log('deu erro aqui: '+ error)
        }
        
    }

}

module.exports = indexController