import PokeAbilities from "../components/pokemon/pokeabilities";
import PokeStats from "../components/pokemon/pokestats";
import PokeType from "../components/pokemon/poketype";
import Image from "next/image";
import Head from "next/head";
import { getPokemonByName, getPokemonImage } from "../helpers/pokemon.utils";
import PokeAttributes from "../components/pokemon/pokeattributes";

export default function Pokemon(props) {
  return (
    <>
      <Head>
        <meta name="description" content={`All ${props.name} information`} />
        <title>
          Pokédex - {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
        </title>
      </Head>

      <div className="flex justify-center">
        <div>
          <h2 className="text-center font-bold text-3xl first-letter:uppercase">
            {props.name}
          </h2>
          <div className="flex justify-center">
            <Image
              src={getPokemonImage(props.id)}
              alt={props.name}
              width={200}
              height={200}
            />
          </div>
          <PokeType types={props.types} />
        </div>

        <div>
          <PokeAttributes height={props.height} weight={props.weight} />
          <PokeStats stats={props.stats} highestStat={props.highestStat} />
        </div>
      </div>
      <PokeAbilities abilities={props.abilities} />
    </>
  );
}

export async function getServerSideProps(context) {
  const pokeId = context.params.id;
  const data = await getPokemonByName(pokeId);

  const { stats, name, base_experience, abilities, id, types, height, weight } =
    data;

  const allStats = stats.map((stat) => stat.base_stat);
  const highestStat = Math.max(...allStats);

  return {
    props: {
      stats,
      name,
      base_experience,
      abilities,
      id,
      types,
      weight,
      height,
      highestStat,
    },
  };
}
