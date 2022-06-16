export default function PokeMoves({ moves }) {
  return (
    <div className="grid grid-cols-5 ">
      {moves.map((move) => (
        <div key={move.move.name}>{moves.move.name}</div>
      ))}
    </div>
  );
}
