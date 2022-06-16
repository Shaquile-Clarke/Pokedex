export default function PokeAbilities({ abilities }) {
  return (
    <div className="flex justify-center">
      {abilities.map((ability) => (
        <div
          key={ability.ability.name}
          className="border border-transparent rounded-full bg-blue-300 px-3 py-1 m-2 font-normal text-lg drop-shadow-lg"
        >
          {ability.ability.name}
        </div>
      ))}
    </div>
  );
}
