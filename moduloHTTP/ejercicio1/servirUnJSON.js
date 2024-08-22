const http = require('http')

const port = 3000;

const server = http.createServer((req, res) => {

    const pokemones = {
        "datos": [
          {
            "id": 1,
            "name": "bulbasaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "type": [
              "grass",
              "poison"
            ],
            "height": 7,
            "weight": 69,
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
          },
          {
            "id": 2,
            "name": "ivysaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "type": [
              "grass",
              "poison"
            ],
            "height": 10,
            "weight": 130,
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
          },
          {
            "id": 3,
            "name": "venusaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            "type": [
              "grass",
              "poison"
            ],
            "height": 20,
            "weight": 1000,
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
          },
          {
            "id": 4,
            "name": "charmander",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            "type": [
              "fire"
            ],
            "height": 6,
            "weight": 85,
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
          },
          {
            "id": 5,
            "name": "charmeleon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            "type": [
              "fire"
            ],
            "height": 11,
            "weight": 190,
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
          },
          {
            "id": 6,
            "name": "charizard",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            "type": [
              "fire",
              "flying"
            ],
            "height": 17,
            "weight": 905,
            "url": "https://pokeapi.co/api/v2/pokemon/6/"
          },
          {
            "id": 7,
            "name": "squirtle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            "type": [
              "water"
            ],
            "height": 5,
            "weight": 90,
            "url": "https://pokeapi.co/api/v2/pokemon/7/"
          },
          {
            "id": 8,
            "name": "wartortle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            "type": [
              "water"
            ],
            "height": 10,
            "weight": 225,
            "url": "https://pokeapi.co/api/v2/pokemon/8/"
          },
          {
            "id": 9,
            "name": "blastoise",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            "type": [
              "water"
            ],
            "height": 16,
            "weight": 855,
            "url": "https://pokeapi.co/api/v2/pokemon/9/"
          },
          {
            "id": 10,
            "name": "caterpie",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            "type": [
              "bug"
            ],
            "height": 3,
            "weight": 29,
            "url": "https://pokeapi.co/api/v2/pokemon/10/"
          },
          {
            "id": 11,
            "name": "metapod",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            "type": [
              "bug"
            ],
            "height": 7,
            "weight": 99,
            "url": "https://pokeapi.co/api/v2/pokemon/11/"
          },
          {
            "id": 12,
            "name": "butterfree",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
            "type": [
              "bug",
              "flying"
            ],
            "height": 11,
            "weight": 320,
            "url": "https://pokeapi.co/api/v2/pokemon/12/"
          },
          {
            "id": 13,
            "name": "weedle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
            "type": [
              "bug",
              "poison"
            ],
            "height": 3,
            "weight": 32,
            "url": "https://pokeapi.co/api/v2/pokemon/13/"
          },
          {
            "id": 14,
            "name": "kakuna",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
            "type": [
              "bug",
              "poison"
            ],
            "height": 6,
            "weight": 100,
            "url": "https://pokeapi.co/api/v2/pokemon/14/"
          },
          {
            "id": 15,
            "name": "beedrill",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
            "type": [
              "bug",
              "poison"
            ],
            "height": 10,
            "weight": 295,
            "url": "https://pokeapi.co/api/v2/pokemon/15/"
          },
          {
            "id": 16,
            "name": "pidgey",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
            "type": [
              "normal",
              "flying"
            ],
            "height": 3,
            "weight": 18,
            "url": "https://pokeapi.co/api/v2/pokemon/16/"
          },
          {
            "id": 17,
            "name": "pidgeotto",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
            "type": [
              "normal",
              "flying"
            ],
            "height": 11,
            "weight": 300,
            "url": "https://pokeapi.co/api/v2/pokemon/17/"
          },
          {
            "id": 18,
            "name": "pidgeot",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
            "type": [
              "normal",
              "flying"
            ],
            "height": 15,
            "weight": 395,
            "url": "https://pokeapi.co/api/v2/pokemon/18/"
          },
          {
            "id": 19,
            "name": "rattata",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
            "type": [
              "normal"
            ],
            "height": 3,
            "weight": 35,
            "url": "https://pokeapi.co/api/v2/pokemon/19/"
          },
          {
            "id": 20,
            "name": "raticate",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
            "type": [
              "normal"
            ],
            "height": 7,
            "weight": 185,
            "url": "https://pokeapi.co/api/v2/pokemon/20/"
          },
          {
            "id": 21,
            "name": "spearow",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
            "type": [
              "normal",
              "flying"
            ],
            "height": 3,
            "weight": 20,
            "url": "https://pokeapi.co/api/v2/pokemon/21/"
          },
          {
            "id": 22,
            "name": "fearow",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
            "type": [
              "normal",
              "flying"
            ],
            "height": 12,
            "weight": 380,
            "url": "https://pokeapi.co/api/v2/pokemon/22/"
          },
          {
            "id": 23,
            "name": "ekans",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
            "type": [
              "poison"
            ],
            "height": 20,
            "weight": 69,
            "url": "https://pokeapi.co/api/v2/pokemon/23/"
          },
          {
            "id": 24,
            "name": "arbok",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
            "type": [
              "poison"
            ],
            "height": 35,
            "weight": 650,
            "url": "https://pokeapi.co/api/v2/pokemon/24/"
          },
          {
            "id": 25,
            "name": "pikachu",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            "type": [
              "electric"
            ],
            "height": 4,
            "weight": 60,
            "url": "https://pokeapi.co/api/v2/pokemon/25/"
          },
          {
            "id": 26,
            "name": "raichu",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
            "type": [
              "electric"
            ],
            "height": 8,
            "weight": 300,
            "url": "https://pokeapi.co/api/v2/pokemon/26/"
          },
          {
            "id": 27,
            "name": "sandshrew",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
            "type": [
              "ground"
            ],
            "height": 6,
            "weight": 120,
            "url": "https://pokeapi.co/api/v2/pokemon/27/"
          },
          {
            "id": 28,
            "name": "sandslash",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
            "type": [
              "ground"
            ],
            "height": 10,
            "weight": 295,
            "url": "https://pokeapi.co/api/v2/pokemon/28/"
          },
          {
            "id": 29,
            "name": "nidoran-f",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
            "type": [
              "poison"
            ],
            "height": 4,
            "weight": 70,
            "url": "https://pokeapi.co/api/v2/pokemon/29/"
          },
          {
            "id": 30,
            "name": "nidorina",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
            "type": [
              "poison"
            ],
            "height": 8,
            "weight": 200,
            "url": "https://pokeapi.co/api/v2/pokemon/30/"
          },
          {
            "id": 31,
            "name": "nidoqueen",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
            "type": [
              "poison",
              "ground"
            ],
            "height": 13,
            "weight": 600,
            "url": "https://pokeapi.co/api/v2/pokemon/31/"
          },
          {
            "id": 32,
            "name": "nidoran-m",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
            "type": [
              "poison"
            ],
            "height": 5,
            "weight": 90,
            "url": "https://pokeapi.co/api/v2/pokemon/32/"
          },
          {
            "id": 33,
            "name": "nidorino",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
            "type": [
              "poison"
            ],
            "height": 9,
            "weight": 195,
            "url": "https://pokeapi.co/api/v2/pokemon/33/"
          },
          {
            "id": 34,
            "name": "nidoking",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
            "type": [
              "poison",
              "ground"
            ],
            "height": 14,
            "weight": 620,
            "url": "https://pokeapi.co/api/v2/pokemon/34/"
          },
          {
            "id": 35,
            "name": "clefairy",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
            "type": [
              "fairy"
            ],
            "height": 6,
            "weight": 75,
            "url": "https://pokeapi.co/api/v2/pokemon/35/"
          },
          {
            "id": 36,
            "name": "clefable",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
            "type": [
              "fairy"
            ],
            "height": 13,
            "weight": 400,
            "url": "https://pokeapi.co/api/v2/pokemon/36/"
          },
          {
            "id": 37,
            "name": "vulpix",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
            "type": [
              "fire"
            ],
            "height": 6,
            "weight": 99,
            "url": "https://pokeapi.co/api/v2/pokemon/37/"
          },
          {
            "id": 38,
            "name": "ninetales",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
            "type": [
              "fire"
            ],
            "height": 11,
            "weight": 199,
            "url": "https://pokeapi.co/api/v2/pokemon/38/"
          },
          {
            "id": 39,
            "name": "jigglypuff",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
            "type": [
              "normal",
              "fairy"
            ],
            "height": 5,
            "weight": 55,
            "url": "https://pokeapi.co/api/v2/pokemon/39/"
          },
          {
            "id": 40,
            "name": "wigglytuff",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
            "type": [
              "normal",
              "fairy"
            ],
            "height": 10,
            "weight": 120,
            "url": "https://pokeapi.co/api/v2/pokemon/40/"
          },
          {
            "id": 41,
            "name": "zubat",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
            "type": [
              "poison",
              "flying"
            ],
            "height": 8,
            "weight": 75,
            "url": "https://pokeapi.co/api/v2/pokemon/41/"
          },
          {
            "id": 42,
            "name": "golbat",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
            "type": [
              "poison",
              "flying"
            ],
            "height": 16,
            "weight": 550,
            "url": "https://pokeapi.co/api/v2/pokemon/42/"
          },
          {
            "id": 43,
            "name": "oddish",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
            "type": [
              "grass",
              "poison"
            ],
            "height": 5,
            "weight": 54,
            "url": "https://pokeapi.co/api/v2/pokemon/43/"
          },
          {
            "id": 44,
            "name": "gloom",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
            "type": [
              "grass",
              "poison"
            ],
            "height": 8,
            "weight": 86,
            "url": "https://pokeapi.co/api/v2/pokemon/44/"
          },
          {
            "id": 45,
            "name": "vileplume",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
            "type": [
              "grass",
              "poison"
            ],
            "height": 12,
            "weight": 186,
            "url": "https://pokeapi.co/api/v2/pokemon/45/"
          },
          {
            "id": 46,
            "name": "paras",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
            "type": [
              "bug",
              "grass"
            ],
            "height": 3,
            "weight": 54,
            "url": "https://pokeapi.co/api/v2/pokemon/46/"
          },
          {
            "id": 47,
            "name": "parasect",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
            "type": [
              "bug",
              "grass"
            ],
            "height": 10,
            "weight": 295,
            "url": "https://pokeapi.co/api/v2/pokemon/47/"
          },
          {
            "id": 48,
            "name": "venonat",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
            "type": [
              "bug",
              "poison"
            ],
            "height": 10,
            "weight": 300,
            "url": "https://pokeapi.co/api/v2/pokemon/48/"
          },
          {
            "id": 49,
            "name": "venomoth",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
            "type": [
              "bug",
              "poison"
            ],
            "height": 15,
            "weight": 125,
            "url": "https://pokeapi.co/api/v2/pokemon/49/"
          },
          {
            "id": 50,
            "name": "diglett",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
            "type": [
              "ground"
            ],
            "height": 2,
            "weight": 8,
            "url": "https://pokeapi.co/api/v2/pokemon/50/"
          },
          {
            "id": 51,
            "name": "dugtrio",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
            "type": [
              "ground"
            ],
            "height": 7,
            "weight": 333,
            "url": "https://pokeapi.co/api/v2/pokemon/51/"
          },
          {
            "id": 52,
            "name": "meowth",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
            "type": [
              "normal"
            ],
            "height": 4,
            "weight": 42,
            "url": "https://pokeapi.co/api/v2/pokemon/52/"
          },
          {
            "id": 53,
            "name": "persian",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
            "type": [
              "normal"
            ],
            "height": 10,
            "weight": 320,
            "url": "https://pokeapi.co/api/v2/pokemon/53/"
          },
          {
            "id": 54,
            "name": "psyduck",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
            "type": [
              "water"
            ],
            "height": 8,
            "weight": 196,
            "url": "https://pokeapi.co/api/v2/pokemon/54/"
          },
          {
            "id": 55,
            "name": "golduck",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
            "type": [
              "water"
            ],
            "height": 17,
            "weight": 766,
            "url": "https://pokeapi.co/api/v2/pokemon/55/"
          },
          {
            "id": 56,
            "name": "mankey",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
            "type": [
              "fighting"
            ],
            "height": 5,
            "weight": 280,
            "url": "https://pokeapi.co/api/v2/pokemon/56/"
          },
          {
            "id": 57,
            "name": "primeape",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
            "type": [
              "fighting"
            ],
            "height": 10,
            "weight": 320,
            "url": "https://pokeapi.co/api/v2/pokemon/57/"
          },
          {
            "id": 58,
            "name": "growlithe",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
            "type": [
              "fire"
            ],
            "height": 7,
            "weight": 190,
            "url": "https://pokeapi.co/api/v2/pokemon/58/"
          },
          {
            "id": 59,
            "name": "arcanine",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
            "type": [
              "fire"
            ],
            "height": 19,
            "weight": 1550,
            "url": "https://pokeapi.co/api/v2/pokemon/59/"
          },
          {
            "id": 60,
            "name": "poliwag",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
            "type": [
              "water"
            ],
            "height": 6,
            "weight": 124,
            "url": "https://pokeapi.co/api/v2/pokemon/60/"
          },
          {
            "id": 61,
            "name": "poliwhirl",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
            "type": [
              "water"
            ],
            "height": 10,
            "weight": 200,
            "url": "https://pokeapi.co/api/v2/pokemon/61/"
          },
          {
            "id": 62,
            "name": "poliwrath",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
            "type": [
              "water",
              "fighting"
            ],
            "height": 13,
            "weight": 540,
            "url": "https://pokeapi.co/api/v2/pokemon/62/"
          },
          {
            "id": 63,
            "name": "abra",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
            "type": [
              "psychic"
            ],
            "height": 9,
            "weight": 195,
            "url": "https://pokeapi.co/api/v2/pokemon/63/"
          },
          {
            "id": 64,
            "name": "kadabra",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
            "type": [
              "psychic"
            ],
            "height": 13,
            "weight": 565,
            "url": "https://pokeapi.co/api/v2/pokemon/64/"
          },
          {
            "id": 65,
            "name": "alakazam",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
            "type": [
              "psychic"
            ],
            "height": 15,
            "weight": 480,
            "url": "https://pokeapi.co/api/v2/pokemon/65/"
          },
          {
            "id": 66,
            "name": "machop",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
            "type": [
              "fighting"
            ],
            "height": 8,
            "weight": 195,
            "url": "https://pokeapi.co/api/v2/pokemon/66/"
          },
          {
            "id": 67,
            "name": "machoke",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
            "type": [
              "fighting"
            ],
            "height": 15,
            "weight": 705,
            "url": "https://pokeapi.co/api/v2/pokemon/67/"
          },
          {
            "id": 68,
            "name": "machamp",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
            "type": [
              "fighting"
            ],
            "height": 16,
            "weight": 1300,
            "url": "https://pokeapi.co/api/v2/pokemon/68/"
          },
          {
            "id": 69,
            "name": "bellsprout",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
            "type": [
              "grass",
              "poison"
            ],
            "height": 7,
            "weight": 40,
            "url": "https://pokeapi.co/api/v2/pokemon/69/"
          },
          {
            "id": 70,
            "name": "weepinbell",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
            "type": [
              "grass",
              "poison"
            ],
            "height": 10,
            "weight": 64,
            "url": "https://pokeapi.co/api/v2/pokemon/70/"
          },
          {
            "id": 71,
            "name": "victreebel",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
            "type": [
              "grass",
              "poison"
            ],
            "height": 17,
            "weight": 155,
            "url": "https://pokeapi.co/api/v2/pokemon/71/"
          },
          {
            "id": 72,
            "name": "tentacool",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
            "type": [
              "water",
              "poison"
            ],
            "height": 9,
            "weight": 455,
            "url": "https://pokeapi.co/api/v2/pokemon/72/"
          },
          {
            "id": 73,
            "name": "tentacruel",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
            "type": [
              "water",
              "poison"
            ],
            "height": 16,
            "weight": 550,
            "url": "https://pokeapi.co/api/v2/pokemon/73/"
          },
          {
            "id": 74,
            "name": "geodude",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
            "type": [
              "rock",
              "ground"
            ],
            "height": 4,
            "weight": 200,
            "url": "https://pokeapi.co/api/v2/pokemon/74/"
          },
          {
            "id": 75,
            "name": "graveler",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
            "type": [
              "rock",
              "ground"
            ],
            "height": 10,
            "weight": 1050,
            "url": "https://pokeapi.co/api/v2/pokemon/75/"
          },
          {
            "id": 76,
            "name": "golem",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
            "type": [
              "rock",
              "ground"
            ],
            "height": 14,
            "weight": 3000,
            "url": "https://pokeapi.co/api/v2/pokemon/76/"
          },
          {
            "id": 77,
            "name": "ponyta",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
            "type": [
              "fire"
            ],
            "height": 10,
            "weight": 300,
            "url": "https://pokeapi.co/api/v2/pokemon/77/"
          },
          {
            "id": 78,
            "name": "rapidash",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
            "type": [
              "fire"
            ],
            "height": 17,
            "weight": 950,
            "url": "https://pokeapi.co/api/v2/pokemon/78/"
          },
          {
            "id": 79,
            "name": "slowpoke",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
            "type": [
              "water",
              "psychic"
            ],
            "height": 12,
            "weight": 360,
            "url": "https://pokeapi.co/api/v2/pokemon/79/"
          },
          {
            "id": 80,
            "name": "slowbro",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
            "type": [
              "water",
              "psychic"
            ],
            "height": 16,
            "weight": 785,
            "url": "https://pokeapi.co/api/v2/pokemon/80/"
          },
          {
            "id": 81,
            "name": "magnemite",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
            "type": [
              "electric",
              "steel"
            ],
            "height": 3,
            "weight": 60,
            "url": "https://pokeapi.co/api/v2/pokemon/81/"
          },
          {
            "id": 82,
            "name": "magneton",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
            "type": [
              "electric",
              "steel"
            ],
            "height": 10,
            "weight": 600,
            "url": "https://pokeapi.co/api/v2/pokemon/82/"
          },
          {
            "id": 83,
            "name": "farfetchd",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
            "type": [
              "normal",
              "flying"
            ],
            "height": 8,
            "weight": 150,
            "url": "https://pokeapi.co/api/v2/pokemon/83/"
          },
          {
            "id": 84,
            "name": "doduo",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
            "type": [
              "normal",
              "flying"
            ],
            "height": 14,
            "weight": 392,
            "url": "https://pokeapi.co/api/v2/pokemon/84/"
          },
          {
            "id": 85,
            "name": "dodrio",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
            "type": [
              "normal",
              "flying"
            ],
            "height": 18,
            "weight": 852,
            "url": "https://pokeapi.co/api/v2/pokemon/85/"
          },
          {
            "id": 86,
            "name": "seel",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
            "type": [
              "water"
            ],
            "height": 11,
            "weight": 900,
            "url": "https://pokeapi.co/api/v2/pokemon/86/"
          },
          {
            "id": 87,
            "name": "dewgong",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
            "type": [
              "water",
              "ice"
            ],
            "height": 17,
            "weight": 1200,
            "url": "https://pokeapi.co/api/v2/pokemon/87/"
          },
          {
            "id": 88,
            "name": "grimer",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
            "type": [
              "poison"
            ],
            "height": 9,
            "weight": 300,
            "url": "https://pokeapi.co/api/v2/pokemon/88/"
          },
          {
            "id": 89,
            "name": "muk",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
            "type": [
              "poison"
            ],
            "height": 12,
            "weight": 300,
            "url": "https://pokeapi.co/api/v2/pokemon/89/"
          },
          {
            "id": 90,
            "name": "shellder",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
            "type": [
              "water"
            ],
            "height": 3,
            "weight": 40,
            "url": "https://pokeapi.co/api/v2/pokemon/90/"
          },
          {
            "id": 91,
            "name": "cloyster",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
            "type": [
              "water",
              "ice"
            ],
            "height": 15,
            "weight": 1325,
            "url": "https://pokeapi.co/api/v2/pokemon/91/"
          },
          {
            "id": 92,
            "name": "gastly",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
            "type": [
              "ghost",
              "poison"
            ],
            "height": 13,
            "weight": 1,
            "url": "https://pokeapi.co/api/v2/pokemon/92/"
          },
          {
            "id": 93,
            "name": "haunter",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
            "type": [
              "ghost",
              "poison"
            ],
            "height": 16,
            "weight": 1,
            "url": "https://pokeapi.co/api/v2/pokemon/93/"
          },
          {
            "id": 94,
            "name": "gengar",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
            "type": [
              "ghost",
              "poison"
            ],
            "height": 15,
            "weight": 405,
            "url": "https://pokeapi.co/api/v2/pokemon/94/"
          },
          {
            "id": 95,
            "name": "onix",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
            "type": [
              "rock",
              "ground"
            ],
            "height": 88,
            "weight": 2100,
            "url": "https://pokeapi.co/api/v2/pokemon/95/"
          },
          {
            "id": 96,
            "name": "drowzee",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
            "type": [
              "psychic"
            ],
            "height": 10,
            "weight": 324,
            "url": "https://pokeapi.co/api/v2/pokemon/96/"
          },
          {
            "id": 97,
            "name": "hypno",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
            "type": [
              "psychic"
            ],
            "height": 16,
            "weight": 756,
            "url": "https://pokeapi.co/api/v2/pokemon/97/"
          },
          {
            "id": 98,
            "name": "krabby",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
            "type": [
              "water"
            ],
            "height": 4,
            "weight": 65,
            "url": "https://pokeapi.co/api/v2/pokemon/98/"
          },
          {
            "id": 99,
            "name": "kingler",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
            "type": [
              "water"
            ],
            "height": 13,
            "weight": 600,
            "url": "https://pokeapi.co/api/v2/pokemon/99/"
          },
          {
            "id": 100,
            "name": "voltorb",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
            "type": [
              "electric"
            ],
            "height": 5,
            "weight": 104,
            "url": "https://pokeapi.co/api/v2/pokemon/100/"
          },
          {
            "id": 101,
            "name": "electrode",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
            "type": [
              "electric"
            ],
            "height": 12,
            "weight": 666,
            "url": "https://pokeapi.co/api/v2/pokemon/101/"
          },
          {
            "id": 102,
            "name": "exeggcute",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
            "type": [
              "grass",
              "psychic"
            ],
            "height": 4,
            "weight": 25,
            "url": "https://pokeapi.co/api/v2/pokemon/102/"
          },
          {
            "id": 103,
            "name": "exeggutor",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
            "type": [
              "grass",
              "psychic"
            ],
            "height": 20,
            "weight": 1200,
            "url": "https://pokeapi.co/api/v2/pokemon/103/"
          },
          {
            "id": 104,
            "name": "cubone",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
            "type": [
              "ground"
            ],
            "height": 4,
            "weight": 65,
            "url": "https://pokeapi.co/api/v2/pokemon/104/"
          },
          {
            "id": 105,
            "name": "marowak",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
            "type": [
              "ground"
            ],
            "height": 10,
            "weight": 450,
            "url": "https://pokeapi.co/api/v2/pokemon/105/"
          },
          {
            "id": 106,
            "name": "hitmonlee",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
            "type": [
              "fighting"
            ],
            "height": 15,
            "weight": 498,
            "url": "https://pokeapi.co/api/v2/pokemon/106/"
          },
          {
            "id": 107,
            "name": "hitmonchan",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
            "type": [
              "fighting"
            ],
            "height": 14,
            "weight": 502,
            "url": "https://pokeapi.co/api/v2/pokemon/107/"
          },
          {
            "id": 108,
            "name": "lickitung",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
            "type": [
              "normal"
            ],
            "height": 12,
            "weight": 655,
            "url": "https://pokeapi.co/api/v2/pokemon/108/"
          },
          {
            "id": 109,
            "name": "koffing",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
            "type": [
              "poison"
            ],
            "height": 6,
            "weight": 10,
            "url": "https://pokeapi.co/api/v2/pokemon/109/"
          },
          {
            "id": 110,
            "name": "weezing",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
            "type": [
              "poison"
            ],
            "height": 12,
            "weight": 95,
            "url": "https://pokeapi.co/api/v2/pokemon/110/"
          },
          {
            "id": 111,
            "name": "rhyhorn",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
            "type": [
              "ground",
              "rock"
            ],
            "height": 10,
            "weight": 1150,
            "url": "https://pokeapi.co/api/v2/pokemon/111/"
          },
          {
            "id": 112,
            "name": "rhydon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
            "type": [
              "ground",
              "rock"
            ],
            "height": 19,
            "weight": 1200,
            "url": "https://pokeapi.co/api/v2/pokemon/112/"
          },
          {
            "id": 113,
            "name": "chansey",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
            "type": [
              "normal"
            ],
            "height": 11,
            "weight": 346,
            "url": "https://pokeapi.co/api/v2/pokemon/113/"
          },
          {
            "id": 114,
            "name": "tangela",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
            "type": [
              "grass"
            ],
            "height": 10,
            "weight": 350,
            "url": "https://pokeapi.co/api/v2/pokemon/114/"
          },
          {
            "id": 115,
            "name": "kangaskhan",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
            "type": [
              "normal"
            ],
            "height": 22,
            "weight": 800,
            "url": "https://pokeapi.co/api/v2/pokemon/115/"
          },
          {
            "id": 116,
            "name": "horsea",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
            "type": [
              "water"
            ],
            "height": 4,
            "weight": 80,
            "url": "https://pokeapi.co/api/v2/pokemon/116/"
          },
          {
            "id": 117,
            "name": "seadra",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
            "type": [
              "water"
            ],
            "height": 12,
            "weight": 250,
            "url": "https://pokeapi.co/api/v2/pokemon/117/"
          },
          {
            "id": 118,
            "name": "goldeen",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
            "type": [
              "water"
            ],
            "height": 6,
            "weight": 150,
            "url": "https://pokeapi.co/api/v2/pokemon/118/"
          },
          {
            "id": 119,
            "name": "seaking",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
            "type": [
              "water"
            ],
            "height": 13,
            "weight": 390,
            "url": "https://pokeapi.co/api/v2/pokemon/119/"
          },
          {
            "id": 120,
            "name": "staryu",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
            "type": [
              "water"
            ],
            "height": 8,
            "weight": 345,
            "url": "https://pokeapi.co/api/v2/pokemon/120/"
          },
          {
            "id": 121,
            "name": "starmie",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
            "type": [
              "water",
              "psychic"
            ],
            "height": 11,
            "weight": 800,
            "url": "https://pokeapi.co/api/v2/pokemon/121/"
          },
          {
            "id": 122,
            "name": "mr-mime",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
            "type": [
              "psychic",
              "fairy"
            ],
            "height": 13,
            "weight": 545,
            "url": "https://pokeapi.co/api/v2/pokemon/122/"
          },
          {
            "id": 123,
            "name": "scyther",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
            "type": [
              "bug",
              "flying"
            ],
            "height": 15,
            "weight": 560,
            "url": "https://pokeapi.co/api/v2/pokemon/123/"
          },
          {
            "id": 124,
            "name": "jynx",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
            "type": [
              "ice",
              "psychic"
            ],
            "height": 14,
            "weight": 406,
            "url": "https://pokeapi.co/api/v2/pokemon/124/"
          },
          {
            "id": 125,
            "name": "electabuzz",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
            "type": [
              "electric"
            ],
            "height": 11,
            "weight": 300,
            "url": "https://pokeapi.co/api/v2/pokemon/125/"
          },
          {
            "id": 126,
            "name": "magmar",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
            "type": [
              "fire"
            ],
            "height": 13,
            "weight": 445,
            "url": "https://pokeapi.co/api/v2/pokemon/126/"
          },
          {
            "id": 127,
            "name": "pinsir",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
            "type": [
              "bug"
            ],
            "height": 15,
            "weight": 550,
            "url": "https://pokeapi.co/api/v2/pokemon/127/"
          },
          {
            "id": 128,
            "name": "tauros",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
            "type": [
              "normal"
            ],
            "height": 14,
            "weight": 884,
            "url": "https://pokeapi.co/api/v2/pokemon/128/"
          },
          {
            "id": 129,
            "name": "magikarp",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
            "type": [
              "water"
            ],
            "height": 9,
            "weight": 100,
            "url": "https://pokeapi.co/api/v2/pokemon/129/"
          },
          {
            "id": 130,
            "name": "gyarados",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
            "type": [
              "water",
              "flying"
            ],
            "height": 65,
            "weight": 2350,
            "url": "https://pokeapi.co/api/v2/pokemon/130/"
          },
          {
            "id": 131,
            "name": "lapras",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
            "type": [
              "water",
              "ice"
            ],
            "height": 25,
            "weight": 2200,
            "url": "https://pokeapi.co/api/v2/pokemon/131/"
          },
          {
            "id": 132,
            "name": "ditto",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
            "type": [
              "normal"
            ],
            "height": 3,
            "weight": 40,
            "url": "https://pokeapi.co/api/v2/pokemon/132/"
          },
          {
            "id": 133,
            "name": "eevee",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
            "type": [
              "normal"
            ],
            "height": 3,
            "weight": 65,
            "url": "https://pokeapi.co/api/v2/pokemon/133/"
          },
          {
            "id": 134,
            "name": "vaporeon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
            "type": [
              "water"
            ],
            "height": 10,
            "weight": 290,
            "url": "https://pokeapi.co/api/v2/pokemon/134/"
          },
          {
            "id": 135,
            "name": "jolteon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
            "type": [
              "electric"
            ],
            "height": 8,
            "weight": 245,
            "url": "https://pokeapi.co/api/v2/pokemon/135/"
          },
          {
            "id": 136,
            "name": "flareon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
            "type": [
              "fire"
            ],
            "height": 9,
            "weight": 250,
            "url": "https://pokeapi.co/api/v2/pokemon/136/"
          },
          {
            "id": 137,
            "name": "porygon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
            "type": [
              "normal"
            ],
            "height": 8,
            "weight": 365,
            "url": "https://pokeapi.co/api/v2/pokemon/137/"
          },
          {
            "id": 138,
            "name": "omanyte",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
            "type": [
              "rock",
              "water"
            ],
            "height": 4,
            "weight": 75,
            "url": "https://pokeapi.co/api/v2/pokemon/138/"
          },
          {
            "id": 139,
            "name": "omastar",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
            "type": [
              "rock",
              "water"
            ],
            "height": 10,
            "weight": 350,
            "url": "https://pokeapi.co/api/v2/pokemon/139/"
          },
          {
            "id": 140,
            "name": "kabuto",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
            "type": [
              "rock",
              "water"
            ],
            "height": 5,
            "weight": 115,
            "url": "https://pokeapi.co/api/v2/pokemon/140/"
          },
          {
            "id": 141,
            "name": "kabutops",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
            "type": [
              "rock",
              "water"
            ],
            "height": 13,
            "weight": 405,
            "url": "https://pokeapi.co/api/v2/pokemon/141/"
          },
          {
            "id": 142,
            "name": "aerodactyl",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
            "type": [
              "rock",
              "flying"
            ],
            "height": 18,
            "weight": 590,
            "url": "https://pokeapi.co/api/v2/pokemon/142/"
          },
          {
            "id": 143,
            "name": "snorlax",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
            "type": [
              "normal"
            ],
            "height": 21,
            "weight": 4600,
            "url": "https://pokeapi.co/api/v2/pokemon/143/"
          },
          {
            "id": 144,
            "name": "articuno",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
            "type": [
              "ice",
              "flying"
            ],
            "height": 17,
            "weight": 554,
            "url": "https://pokeapi.co/api/v2/pokemon/144/"
          },
          {
            "id": 145,
            "name": "zapdos",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
            "type": [
              "electric",
              "flying"
            ],
            "height": 16,
            "weight": 526,
            "url": "https://pokeapi.co/api/v2/pokemon/145/"
          },
          {
            "id": 146,
            "name": "moltres",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
            "type": [
              "fire",
              "flying"
            ],
            "height": 20,
            "weight": 600,
            "url": "https://pokeapi.co/api/v2/pokemon/146/"
          },
          {
            "id": 147,
            "name": "dratini",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
            "type": [
              "dragon"
            ],
            "height": 18,
            "weight": 33,
            "url": "https://pokeapi.co/api/v2/pokemon/147/"
          },
          {
            "id": 148,
            "name": "dragonair",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
            "type": [
              "dragon"
            ],
            "height": 40,
            "weight": 165,
            "url": "https://pokeapi.co/api/v2/pokemon/148/"
          },
          {
            "id": 149,
            "name": "dragonite",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
            "type": [
              "dragon",
              "flying"
            ],
            "height": 22,
            "weight": 2100,
            "url": "https://pokeapi.co/api/v2/pokemon/149/"
          },
          {
            "id": 150,
            "name": "mewtwo",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
            "type": [
              "psychic"
            ],
            "height": 20,
            "weight": 1220,
            "url": "https://pokeapi.co/api/v2/pokemon/150/"
          },
          {
            "id": 151,
            "name": "mew",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
            "type": [
              "psychic"
            ],
            "height": 4,
            "weight": 40,
            "url": "https://pokeapi.co/api/v2/pokemon/151/"
          }
        ]
      }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(pokemones));

})

server.listen(port, () => {
    console.log(`Server listens on port ${port}`);
  });