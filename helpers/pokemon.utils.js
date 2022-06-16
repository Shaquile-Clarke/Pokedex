export async function getPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}

export async function loadPokemon(link) {
  try {
    const response = await fetch(link);
    const data = response.json();
    return data;
  } catch (e) {
    return e;
  }
}

export async function getPokemonByName(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}

export function getPokemonImage(id) {
  try {
    const convertedId = "00" + id;
    const pokeId = convertedId.slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeId}.png`;
  } catch (e) {
    return console.log(e);
  }
}

//? Pokemon Types Functions

export async function getTypes() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/`);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}

export async function getType(type) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}
