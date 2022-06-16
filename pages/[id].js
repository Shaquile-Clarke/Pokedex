import PokeAbilities from "../components/pokemon/pokeabilities";
import PokeStats from "../components/pokemon/pokestats";
import PokeType from "../components/pokemon/poketype";
import Image from "next/image";
import { getPokemonByName, getPokemonImage } from "../helpers/pokemon.utils";
import PokeAttributes from "../components/pokemon/pokeattributes";

export default function Pokemon(props) {
  return (
    <>
      <div className="flex justify-center">
        <Image
          src={getPokemonImage(props.id)}
          alt={props.name}
          width={200}
          height={200}
        />
      </div>
      <PokeType types={props.types} />
      <PokeAbilities abilities={props.abilities} />
      <PokeAttributes height={props.height} weight={props.weight} />
      <PokeStats stats={props.stats} highestStat={props.highestStat} />
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
