
const pokemonData = [
    {
        "id": "bulbasaur",
        "name": "Bulbasaur",
        "type": ["Planta", "Veneno"],
        "generation": 1,
        "region": "Kanto",
        "number": 1,
        "rarity": "Comun",
        "shortDescription": "Tras nacer, crece alimentándose durante un tiempo de los nutrientes que contiene el bulbo de su lomo.",
        "description": "Bulbasaur tiene una altura de 0.7m y un peso de 6.9kg. Tiene una categoría semilla y una habilidad de espesura. Es de tipo Planta y Veneno, tiene una debilidad a Fuego, Hielo, Psíquico y Volador. Tiene varias evoluciones: Bulbasaur - Ivysaur - Venusaur.",
        "weakness": ["Fuego", "Hielo", "Psíquico", "Volador"],
        "attack": 49,
        "defense": 49,
        "speed": 45,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "facts": {
            "pokedexNumber": 1,
            "ability": "Tiene la habilidad de hablar y comuniarse con otros pokemon",
            "primaryColor": "Verde",
            
        }
    },
    {
        "id": "charmander",
        "name": "Charmander",
        "type": ["Fuego"],
        "generation": 1,
        "region": "Kanto",
        "number": 4,
        "rarity": "Comun",
        "shortDescription": "La llama de su cola indica su fuerza vital. Si está débil, la llama arderá más tenue.",
        "description": "Charmander tiene una altura de 0.6m y un peso de 8.5kg. Tiene una categoría lagartija y una habilidad de mar llamas. Es de tipo Fuego y su debilidad es Agua, Tierra y Roca. Tiene varias evoluciones: Charmander - Charmeleon - Charizard.",
        "weakness": ["Agua", "Tierra", "Roca"],
        "attack": 52,
        "defense": 43,
        "speed": 65,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        "facts": {
            "pokedexNumber": 4,
            "ability": "Tiene la habilidad de hablar y comuniarse con otros pokemon",
            "primaryColor": "Naranja",
        }
        },
    {
        "id": "squirtle",
        "name": "Squirtle",
        "type": ["Agua"],
        "generation": 1,
        "region": "Kanto",
        "number": 7,
        "rarity": "Comun",
        "shortDescription": "Tras nacer, se le hincha el lomo y se le forma un caparazón. Escupe poderosa espuma por la boca.",
        "description": "Squirtle tiene una altura de 0.5m y un peso de 9.0kg. Tiene una categoría tortuguita y una habilidad torrente. Es de tipo Agua y su debilidad es Planta y Eléctrico. Tiene varias evoluciones: Squirtle - Wartortle - Blastoise.",
        "weakness": ["Planta", "Eléctrico"],
        "attack": 48,
        "defense": 65,
        "speed": 43,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        "facts": {
            "pokedexNumber": 7,
            "ability": "Tiene la habilidad de hablar y comuniarse con otros pokemon",
            "primaryColor": "Azul",
        }
    },
    {
        "id": "pikachu",
        "name": "Pikachu",
        "type": ["Eléctrico"],
        "generation": 1,
        "region": "Kanto",
        "number": 25,
        "rarity": "Comun",
        "shortDescription": "Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas.",
        "description": "Pikachu tiene una altura de 0.4m y un peso de 6.0kg. Tiene una categoría ratón y una habilidad eléctrica estática. Es de tipo Eléctrico y su debilidad es Tierra. Tiene varias evoluciones: Pichu - Pikachu - Raichu.",
        "weakness": ["Tierra"],
        "attack": 55,
        "defense": 40,
        "speed": 90,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        "facts": {
            "pokedexNumber": 25,
            "ability": "Tiene la habilidad de hablar y comuniarse con otros pokemon",
            "primaryColor": "Amarillo",
        }
        },
    {
        "id": "jigglypuff",
        "name": "Jigglypuff",
        "type": ["Normal", "Hada"],
        "generation": 1,
        "region": "Kanto",
        "number": 39,
        "rarity": "Comun",
        "shortDescription": "Cuando le tiemblan sus redondos y adorables ojos, entona una melodía agradable y misteriosa con la que duerme a sus enemigos.",
        "description": "Jigglypuff tiene una altura de 0.5m y un peso de 5.5kg. Tiene una categoría globo y una habilidad gran encanto y tenacidad. Es de tipo Normal y Hada, y su debilidad es Veneno y Acero. Tiene varias evoluciones: Igglybuff - Jigglypuff - Wigglytuff.",
        "weakness": ["Veneno", "Acero"],
        "attack": 45,
        "defense": 20,
        "speed": 20,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
        "facts": {
            "pokedexNumber": 39,
            "ability": "Tiene la habilidad de hablar y comuniarse con otros pokemon",
            "primaryColor": "Rosa",
            }
        },
        {
        "id": "meowth",
        "name": "Meowth",
        "type": ["Normal"],
        "generation": 1,
        "region": "Kanto",
        "number": 52,
        "rarity": "Comun",
        "shortDescription": "Durante el día se dedica a dormir, y de noche vigila su territorio con un brillo en los ojos.",
        "description": "Meowth tiene una altura de 0.4m y un peso de 4.2kg. Tiene una categoría de gato araña y una habilidad recogida y experto. Es de tipo Normal y su debilidad es Lucha. Tiene varias evoluciones: Meowth - Persian.",
        "weakness": ["Lucha"],
        "attack": 45,
        "defense": 35,
        "speed": 90,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
        "facts": {
            "pokedexNumber": 52,
            "ability": "Tiene la habilidad de hablar y comuniarse con otros pokemon",
            "primaryColor": "Beige",
        }
        },
    {
        "id": "psyduck",
        "name": "Psyduck",
        "type": ["Agua"],
        "generation": 1,
        "region": "Kanto",
        "number": 54,
        "rarity": "Comun",
        "shortDescription": "Padece continuamente dolores de cabeza, cuando son muy fuertes, empieza a usar misteriosos poderes.",
        "description": "Psyduck tiene una altura de 0.8m y un peso de 19.6kg. Tiene una categoría de pato y una habilidad húmeda y de aclimatación. Es de tipo Agua y su debilidad es Planta y Eléctrico. Tiene varias evoluciones: Psyduck - Golduck.",
        "weakness": ["Planta", "Eléctrico"],
        "attack": 52,
        "defense": 48,
        "speed": 55,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
        "facts": {
            "pokedexNumber": 54,
            "ability": "Tiene la habilidad de hablar y comuniarse con otros pokemon",
            "primaryColor": "Amarillo",
            }
        },
    
    {
        "id": "machop",
        "name": "Machop",
        "type": ["Lucha"],
        "generation": 1,
        "region": "Kanto",
        "number": 66,
        "rarity": "Comun",
        "shortDescription": "Es una masa de músculos y pese a su pequeño tamaño, tiene fuerza de sobra para levantar en brazos a 100 personas.",
        "description": "Machop tiene una altura de 0.8m y un peso de 19.5kg. Tiene categoría super poder y una habilidad agallas e indefenso. Es de tipo Lucha y su debilidad es Volador, Psíquico y Hada. Tiene varias evoluciones: Machop - Machoke - Machamp.",
        "weakness": ["Volador", "Psíquico", "Hada"],
        "attack": 80,
        "defense": 50,
        "speed": 35,
        "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
        "facts": {
            "pokedexNumber": 66,
            "ability": "Tiene la habilidad de hablar y comuniarse con otros pokemon",
            "primaryColor": "Gris",
        }
        },
    
{
    "id": "magnemite",
    "name": "Magnemite",
    "type": ["Electrico", "Acero"],
    "generation": 1,
    "region": "Kanto",
    "number": 81,
    "rarity": "Comun",
    "shortDescription": "Las unidades laterales crean ondas electromagnéticas que contrastan la gravedad y la permiten florecer.",
    "description": "Magnemite tiene una altura de 0.3m y un peso de 6.0kg. Tiene una categoría imán y una habilidad robustez e imán. Es de tipo eléctrico-acero y su debilidad son fuego-lucha-tierra. Tiene varias evoluciones en las cuales tenemos Magnemite, Magneton, Magnezone.",
    "weakness": ["Fuego", "Lucha", "Tierra"],
    "attack": 35,
    "defense": 70,
    "speed": 45,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
    "facts": {
        "pokedexNumber": 81,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "Gris",
    },
},
{
    "id": "gengar",
    "name": "Gengar",
    "type": ["Fantasma", "Veneno"],
    "generation": 1,
    "region": "Kanto",
    "number": 94,
    "rarity": "Extraño",
    "shortDescription": "Para quitarle la vida a su presa, se desliza en su sombra y espera su oportunidad en silencio.",
    "description": "Gengar tiene una altura de 1.5m y un peso de 40.5kg. Tiene una categoría sombra y una habilidad cuerpo maldito. Es de tipo fantasma-veneno y su debilidad son tierra-psíquico-fantasma-siniestro. Tiene varias evoluciones en las cuales tenemos Gastly, Haunter, Gengar.",
    "weakness": ["Tierra", "Psíquico", "Fantasma", "Siniestro"],
    "attack": 65,
    "defense": 60,
    "speed": 110,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    "facts": {
        "pokedexNumber": 94,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "morado",
    }
},

{
    "id": "eevee",
    "name": "Eevee",
    "type": ["Normal"],
    "generation": 1,
    "region": "Kanto",
    "number": 133,
    "rarity": "Comun",
    "shortDescription": "Es capaz de evolucionar de muchas maneras para adaptarse sin problemas a cualquier medio.",
    "description": "Eevee tiene una altura de 0.3m y un peso de 6.5kg. Tiene una categoría evolución y una habilidad fuego y adaptable. Es de tipo normal y su debilidad es lucha. Tiene varias evoluciones en las cuales tenemos Eevee, Vaporeon, Jolteon, Flareon, Espeon, Umbreon, Leafeon, Glaceon, Sylveon.",
    "weakness": ["Lucha"],
    "attack": 55,
    "defense": 50,
    "speed": 55,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    "facts": {
        "pokedexNumber": 133,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "marrón",
    }
    },

{
    "id": "snorlax",
    "name": "Snorlax",
    "type": ["Normal"],
    "generation": 1,
    "region": "Kanto",
    "number": 143,
    "rarity": "Extraño",
    "shortDescription": "Este Pokémon es un glotón que lo único que hace aparte de comer es dormir, puede ingerir hasta 400 kg de comida en un solo día.",
    "description": "Snorlax tiene una altura de 2.1m y un peso de 460.0kg. Tiene una categoría dormir y una habilidad sebo e inmunidad. Es de tipo normal y su debilidad es lucha. Tiene varias evoluciones en las cuales tenemos Munchlax, Snorlax.",
    "weakness": ["Lucha"],
    "attack": 110,
    "defense": 65,
    "speed": 30,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    "facts": {
        "pokedexNumber": 143,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "negro",
    }
    },

{
    "id": "dragonite",
    "name": "Dragonite",
    "type": ["Dragon", "Volador"],
    "generation": 1,
    "region": "Kanto",
    "number": 149,
    "rarity": "Extraño",
    "shortDescription": "Dicen que viven en una isla en algún lugar del océano que solo ellos habitan.",
    "description": "Dragonite tiene una altura de 2.2m y un peso de 210.0kg. Tiene una categoría dragón y una habilidad fuerza mental. Es de tipo dragón-volador y su debilidad es hielo-roca-dragón-hada. Tiene varias evoluciones en las cuales tenemos Dratini, Dragonair, Dragonite.",
    "weakness": ["Dragon", "Volador"],
    "attack": 134,
    "defense": 95,
    "speed": 80,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    "facts": {
        "pokedexNumber": 149,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "verde",
    }
    },

{
    "id": "mewtwo",
    "name": "Mewtwo",
    "type": ["Psiquico"],
    "generation": 1,
    "region": "Kanto",
    "number": 150,
    "rarity": "Legendario",
    "shortDescription": "Su ADN es casi el mismo que el de Mew. Sin embargo, su tamaño y carácter son muy diferentes.",
    "description": "Mewtwo tiene una altura de 2.0m y un peso de 122.0kg. Tiene una categoría genética y una habilidad presión. Es de tipo psíquico y su debilidad es bicho-fantasma-siniestro. Este Pokémon NO tiene evoluciones.",
    "weakness": ["Este Pokemon NO evoluciona"],
    "attack": 110,
    "defense": 90,
    "speed": 130,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    "facts": {
        "pokedexNumber": 150,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "morado",
    }
    },

{
    "id": "mew",
    "name": "Mew",
    "type": ["Psiquico"],
    "generation": 1,
    "region": "Kanto",
    "number": 151,
    "rarity": "Mitica",
    "shortDescription": "Si se observa a través de un microscopio puede distinguirse cuán corto, fino y delicado es el pelaje de este Pokémon.",
    "description": "Mew tiene una altura de 0.4m y un peso de 4.0kg. Tiene una categoría nueva especie y una habilidad sincronía. Es de tipo psíquico y su debilidad es bicho-fantasma-siniestro. Este Pokémon NO tiene evoluciones.",
    "weakness": ["Este Pokemon NO tiene evoluciones"],
    "attack": 100,
    "defense": 100,
    "speed": 100,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    "facts": {
        "pokedexNumber": 151,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "rosa",
     }
    },

{
    "id": "chikorita",
    "name": "Chikorita",
    "type": ["Planta"],
    "generation": 2,
    "region": "Johto",
    "number": 152,
    "rarity": "Comun",
    "shortDescription": "Le encanta tomar el sol, usa la hoja que tiene en la cabeza para localizar sitios cálidos.",
    "description": "Chikorita tiene una altura de 0.9m y un peso de 6.4kg. Tiene una categoría hoja y una habilidad espesura. Es de tipo planta y su debilidad es fuego-hielo-veneno-volador-bicho. Tiene varias evoluciones en las cuales tenemos Chikorita, Bayleef, Meganium.",
    "weakness": ["Fuego", "Hielo", "Veneno", "Volador", "Bicho"],
    "attack": 49,
    "defense": 65,
    "speed": 45,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
    "facts": {
        "pokedexNumber": 152,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "verde",
    }
    },

{
    "id": "cyndaquil",
    "name": "Cyndaquil",
    "type": ["Fuego"],
    "generation": 2,
    "region": "Johto",
    "number": 155,
    "rarity": "Comun",
    "shortDescription": "Suele estar encorbado. Si se enfada o se asusta lanzará llamas por el lomo.",
    "description": "Cyndaquil tiene una altura de 0.5m y un peso de 7.9kg. Tiene una categoría ratón fuego y una habilidad mar llamas. Es de tipo fuego y su debilidad es agua-tierra-roca. Tiene varias evoluciones en las cuales tenemos Cyndaquil, Quilava, Typhlosion.",
    "weakness": ["Agua", "Tierra", "Roca"],
    "attack": 52,
    "defense": 43,
    "speed": 65,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
    "facts": {
        "pokedexNumber": 155,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "amarillo",
    }
    },

{
    "id": "totodile",
    "name": "Totodile",
    "type": ["Agua"],
    "generation": 2,
    "region": "Johto",
    "number": 158,
    "rarity": "Comun",
    "shortDescription": "Sus desarrolladas y potentes mandíbulas pueden triturar cualquier cosa, por lo que hasta su propio entrenador debe andarse con cuidado.",
    "description": "Totodile tiene una altura de 0.6m y un peso de 9.5kg. Tiene una categoría fauces y una habilidad torrente. Es de tipo agua y su debilidad es planta-eléctrico. Tiene varias evoluciones en las cuales tenemos Totodile, Croconaw, Feraligatr.",
    "weakness": ["Planta", "Eléctrico"],
    "attack": 65,
    "defense": 64,
    "speed": 43,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
    "facts": {
        "pokedexNumber": 158,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "azul",
    }
    },

{
    "id": "togepi",
    "name": "Togepi",
    "type": ["Hada"],
    "generation": 2,
    "region": "Johto",
    "number": 175,
    "rarity": "Comun",
    "shortDescription": "El cascarón parece estar lleno de alegría, dicen que trae buena suerte si se le trata con cariño.",
    "description": "Togepi tiene una altura de 0.3m y un peso de 1.5kg. Tiene una categoría boladavos y una habilidad dicha-entusiasmo. Es de tipo hada y su debilidad es veneno-acero. Tiene varias evoluciones en las cuales tenemos Togepi, Togetic, Togekiss.",
    "weakness": ["Veneno", "Acero"],
    "attack": 20,
    "defense": 65,
    "speed": 20,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/175.png",
    "facts": {
        "pokedexNumber": 175,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "blanco",
    }
    },
{
    "id": "mareep",
    "name": "Mareep",
    "type": ["Eléctrico"],
    "generation": 2,
    "region": "Johto",
    "number": 179,
    "rarity": "Comun",
    "shortDescription": "Cuando almacena electricidad estática en su cuerpo, la lana dobla su volumen. Quien lo toque recibirá una descarga.",
    "description": "Mareep tiene una altura de 0.6m y un peso de 7.8kg. Tiene una categoría lana y una habilidad elc. estática. Es de tipo eléctrico y su debilidad es tierra. Tiene varias evoluciones en las cuales tenemos Mareep, Flaaffy, Ampharos.",
    "weakness": ["Tierra"],
    "attack": 40,
    "defense": 40,
    "speed": 35,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/179.png",
    "facts": {
        "pokedexNumber": 179,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "blanco",
    }
},
{
    "id": "espeon",
    "name": "Espeon",
    "type": ["Psíquico"],
    "generation": 2,
    "region": "Johto",
    "number": 196,
    "rarity": "Extraño",
    "shortDescription": "Al predecir el siguiente movimiento de su rival, los extremos de su cola bifurcada tiemblan ligeramente.",
    "description": "Espeon tiene una altura de 0.9m y un peso de 26.5kg. Tiene una categoría sol y una habilidad sincronía. Es de tipo psíquico y su debilidad es bicho-fantasma-siniestro. Tiene varias evoluciones en las cuales tenemos Eevee, Vaporeon, Jolteon, Flareon, Espeon, Umbreon, Leafeon, Glaceon, Sylveon.",
    "weakness": ["Bicho", "Fantasma", "Siniestro"],
    "attack": 65,
    "defense": 60,
    "speed": 110,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png",
    "facts": {
        "pokedexNumber": 196,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "morado",
    }
    },

{
    "id": "umbreon",
    "name": "Umbreon",
    "type": ["Siniestro"],
    "generation": 2,
    "region": "Johto",
    "number": 197,
    "rarity": "Extraño",
    "shortDescription": "Si se expone al aura de la luna, los anillos de su cuerpo relucen y adquieren un poder misterioso.",
    "description": "Umbreon tiene una altura de 1.0m y un peso de 27.0kg. Tiene una categoría luz lunar y una habilidad sincronía. Es de tipo siniestro y su debilidad es lucha-bicho-hada. Tiene varias evoluciones en las cuales tenemos Eevee, Vaporeon, Jolteon, Flareon, Espeon, Umbreon, Leafeon, Glaceon, Sylveon.",
    "weakness": ["Lucha", "Bicho", "Hada"],
    "attack": 65,
    "defense": 110,
    "speed": 65,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
    "facts": {
        "pokedexNumber": 197,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "negro",
    }
},
{
    "id": "murkrow",
    "name": "Murkrow",
    "type": ["Siniestro", "Volador"],
    "generation": 2,
    "region": "Johto",
    "number": 198,
    "rarity": "Comun",
    "shortDescription": "Temido y odiado por muchos, dicen que trae la desgracia a todos aquellos que lo ven por la noche.",
    "description": "Murkrow tiene una altura de 0.5m y un peso de 2.1kg. Tiene una categoría oscuridad y sus habilidades son insomnio-afortunado. Es de tipo siniestro-volador y su debilidad es eléctrico-hielo-roca-hada. Tiene varias evoluciones en las cuales tenemos Murkrow, Honchkrow.",
    "weakness": ["Eléctrico", "Hielo", "Roca", "Hada"],
    "attack": 85,
    "defense": 42,
    "speed": 91,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/198.png",
    "facts": {
        "pokedexNumber": 198,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "negro",
    }
},
{
    "id": "blissey",
    "name": "Blissey",
    "type": ["Normal"],
    "generation": 2,
    "region": "Johto",
    "number": 242,
    "rarity": "Extraño",
    "shortDescription": "Cualquiera que pruebe un poco de huevo de Blissey se volverá más amable y agradable con todos.",
    "description": "Blissey tiene una altura de 1.5m y un peso de 46.8kg. Tiene una categoría felicidad y sus habilidades son cura natural-dicha. Es de tipo normal y su debilidad es lucha. Tiene varias evoluciones en las cuales tenemos Happiny, Chansey, Blissey.",
    "weakness": ["Lucha"],
    "attack": 10,
    "defense": 10,
    "speed": 55,
    "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/242.png",
    "facts": {
        "pokedexNumber": 242,
        "ability": "Carece de la habilidad de comunicarse con otoros Pokemons",
        "primaryColor": "rosa",
    }
    },

]




















export default pokemonData;





