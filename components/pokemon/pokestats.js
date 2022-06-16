import { Fragment } from "react";
import StatBars from "../ui/statbars";

export default function PokeStats({ stats, highestStat }) {
  return (
    <div className="border p-3 ">
      {stats.map((stat) => (
        <Fragment key={stat.stat.name}>
          <div className="flex justify-around text-left">
            <div className="w-full ">
              <p className="uppercase">{stat.stat.name}</p>
            </div>
            <div className=" text-center">
              <p className="uppercase">{stat.base_stat}</p>
            </div>
            <StatBars stat={stat.base_stat} highestStat={highestStat} />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
