const BASE_URL = `https://pokeapi.co/api/v2`;

export async function searchPokemon(url) {
  let pokemonData = await fetchPokemon(url);
  let pokemon = formatPokemonData(pokemonData);

  if (pokemon.types[1]) {
    let matchups1 = await fetchMatchups(pokemon.types[0]);
    let matchups2 = await fetchMatchups(pokemon.types[1]);
    pokemon.matchups = doubleTypeDamageRelations(formatDamageRelations(matchups1), formatDamageRelations(matchups2));
  } else {
    let matchups = await fetchMatchups(pokemon.types[0]);
    pokemon.matchups = formatDamageRelations(matchups);
  }
  
  return pokemon;
}

async function fetchPokemon(url) {
  let response = await fetch(`${url}`);
  let data = await response.json();

  return data;
}

async function fetchMatchups(types) {
  let response = await fetch(`${BASE_URL}/type/${types}`);
  let data = await response.json();

  return data.damage_relations;
}

function formatPokemonData(data) {
  return {
    name: data.name,
    sprite: data.sprites.other["official-artwork"].front_default,
    info: {
      height: (data.height * 10) / 100,
      weight: (data.weight * 10) / 100,
    },
    types: data.types[1] ? [data.types[0].type.name, data.types[1].type.name] : [data.types[0].type.name],
    stats: {
      HP: data.stats[0].base_stat,
      ATTACK: data.stats[1].base_stat,
      DEFENSE: data.stats[2].base_stat,
      SATTACK: data.stats[3].base_stat,
      SDEFENSE: data.stats[4].base_stat,
      SPEED: data.stats[5].base_stat,
    },
  };
}

function formatDamageRelations(data) {
  let matchups = {
    normal: 1,
    fighting: 1,
    flying: 1,
    poison: 1,
    ground: 1,
    rock: 1,
    bug: 1,
    ghost: 1,
    steel: 1,
    fire: 1,
    water: 1,
    grass: 1,
    electric: 1,
    psychic: 1,
    ice: 1,
    dragon: 1,
    dark: 1,
    fairy: 1,
  }

  let half = typeNamesArrayFromObj(data.half_damage_from);
  let double = typeNamesArrayFromObj(data.double_damage_from);
  let none = typeNamesArrayFromObj(data.no_damage_from);

  half.forEach(type => matchups[type] *= 0.5);
  double.forEach(type => matchups[type] *= 2);
  none.forEach(type => matchups[type] = 0);
  
  return matchups;
}

function doubleTypeDamageRelations(type1, type2) {
   let matchups = {};
   let types = Object.keys(type1);

   types.forEach(type => matchups[type] = type1[type] * type2[type]);

   return matchups;
}

function typeNamesArrayFromObj(obj) {
  let array = [];
  for (const type of obj) {
    array.push(type.name);
  }
  return array;
}

// TODO: might eventually add move lists, but it's a lot of work because PokeAPI is organized weird.
// function formatMoves(data) {
//   let moves = {
//     "red-blue": {},
//     "yellow": {},
//     "gold-silver": {},
//     "crystal": {},
//     "ruby-sapphire": {},
//     "emerald": {},
//     "firered-leafgreen": {},
//     "diamond-pearl": {},
//     "platinum": {},
//     "heartgold-soulsilver": {},
//     "black-white": {},
//     "black-2-white-2": {},
//     "x-y": {},
//     "omega-ruby-alpha-sapphire": {},
//     "sun-moon": {},
//     "ultra-sun-ultra-moon": {},
//     "lets-go": {},
//     "sword-shield": {},
//   };

//   for (const move in data) {
//     let name = move.move.name;
//     let versionGroups = move.version_group_details;

//     for (const group in versionGroups) {
//       if (move[group.version_group.name]) {
//         moves[group.version_group.name][name] = {
//           level: group.level-learned-at,
//           method: group.move-learn-method.name
//         }
//       }
//     }
//   }
//   return moves;
// }
