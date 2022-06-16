import { useState, Fragment } from "react";
import {
  getPokemon,
  getPokemonImage,
  loadPokemon,
} from "../helpers/pokemon.utils";
import GridLayout from "../components/ui/gridlayout";
import PokeCard from "../components/pokemon/pokecard";
import Link from "next/link";
import Head from "next/head";

function Home({ fetchPokemon }) {
  const [pokemon, setPokemon] = useState(fetchPokemon);
  const [offset, setOffset] = useState(0);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  async function loadNextHandler() {
    const loadNext = await loadPokemon(pokemon.next);
    setPokemon(loadNext);
    setOffset(offset + 20);
  }

  async function loadPrevHandler() {
    const loadPrev = await loadPokemon(pokemon.previous);
    setPokemon(loadPrev);
    setOffset(offset - 20);
  }

  return (
    <>
      <Head>
        <title>A Pokedex Made For True Trainers</title>
      </Head>
      <GridLayout>
        {pokemon.results.map((pokeInfo, index) => (
          <Fragment key={pokeInfo.name}>
            <Link href={`/${pokeInfo.name}`}>
              <a>
                <PokeCard
                  name={pokeInfo.name}
                  indexNo={index + 1}
                  indexOffset={offset}
                  imageUrl={getPokemonImage(index + 1 + offset)}
                />
              </a>
            </Link>
          </Fragment>
        ))}
      </GridLayout>
      <div className="flex justify-center">
        <button
          onClick={loadPrevHandler}
          className="px-10 py-5 m-2 border rounded-md text-xl drop-shadow-lg bg-gray-300 hover:bg-red-500 transition-all "
          disabled={!pokemon.previous}
        >
          Prev
        </button>
        <button
          onClick={loadNextHandler}
          className="px-10 py-5 m-2 border rounded-md text-xl drop-shadow-lg bg-gray-300 hover:bg-red-500 transition-all"
          disabled={!pokemon.next}
        >
          Next
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const pokemon = await getPokemon();

  return {
    props: {
      fetchPokemon: pokemon,
    },
  };
}

export default Home;
