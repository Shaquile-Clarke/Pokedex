import { Fragment } from "react";
import StatBars from "../ui/statbars";

export default function PokeStats({ stats, highestStat }) {
  return (
    <div className="p-3">
      {stats.map((stat) => (
        <Fragment key={stat.stat.name}>
          <div className="flex flex-col justify-around text-left">
            <div className="w-full ">
              <p className="first-letter:uppercase">{stat.stat.name}</p>
            </div>
            <div className="flex">
              <p className="text-sm block w-10">{stat.base_stat}</p>
              <StatBars stat={stat.base_stat} highestStat={highestStat} />
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
