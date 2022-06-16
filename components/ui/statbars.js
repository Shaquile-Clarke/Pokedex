export default function StatBars({ stat, highestStat }) {
  const barFill = Math.ceil((stat / highestStat) * 100);

  return (
    <div className="w-full">
      <div
        style={{ width: `${barFill}%` }}
        className={`m-1 px-2 py-1 rounded-full h-3 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500`}
      />
    </div>
  );
}
