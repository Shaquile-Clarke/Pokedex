import Link from "next/link";

export default function MainHeader() {
  return (
    <h1 className="flex">
      <Link href={`/`}>
        <a className="p-3 m-5 border border-yellow-400 font-bold text-xl lg:text-5xl xl:text-5xl 2xl:text-5xl text-yellow-400">
          Pokédex
        </a>
      </Link>
    </h1>
  );
}
