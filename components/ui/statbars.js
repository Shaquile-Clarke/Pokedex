export default function StatBars({ stat, highestStat }) {
  const barFill = Math.ceil((stat / highestStat) * 100);
  let barColor;

  if (barFill >= 80) barColor = "bg-green-500";

  if (barFill < 80 && barFill >= 50) barColor = "bg-yellow-400";

  if (barFill < 50) barColor = "bg-red-500";

  return (
    <div className="w-full">
      <div
        style={{ width: `${barFill}%` }}
        className={`m-1 px-2 py-1 rounded-full h-3 ${barColor}`}
      />
    </div>
  );
}
