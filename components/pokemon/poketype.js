import Link from "next/link";
import { Fragment } from "react";

export default function PokeType({ types }) {
  return (
    <>
      <div className="flex justify-center">
        {types.map((type) => (
          <Fragment key={type.type.name}>
            <Link href={`/types/${type.type.name}`}>
              <a className="border border-transparent rounded-full bg-green-400 px-3 py-1 m-2 font-normal text-lg drop-shadow-lg">
                {type.type.name}
              </a>
            </Link>
          </Fragment>
        ))}
      </div>
    </>
  );
}
