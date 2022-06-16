import { getTypes } from "../../helpers/pokemon.utils";

function PokeType({ types }) {
  return (
    <>
      {types.results.map((type) => (
        <div key={type.name}> {type.name}</div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const types = await getTypes();
  console.log(types);

  return {
    props: {
      types,
    },
  };
}

export default PokeType;
