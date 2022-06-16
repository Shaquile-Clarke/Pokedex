import { getType } from "../../helpers/pokemon.utils";

function Type({ damage_relations }) {
  return (
    <>
      {damage_relations.double_damage_from.map((data) => (
        <div key={data.name}>{data.name}</div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await getType(context.params.typeId);
  const { damage_relations } = response;

  // console.log(damage_relations);
  return {
    props: { damage_relations },
  };
}

export default Type;
