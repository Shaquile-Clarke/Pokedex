import Image from "next/image";

export default function PokeCard({ name, indexNo, imageUrl, indexOffset }) {
  return (
    <div className="flex flex-col justify-center items-center border-2 rounded-xl bg-gray-300 drop-shadow-xl hover:bg-gray-200 hover:-translate-y-1 transition-all">
      <p className="py-2 text-center text-xl font-semibold text-blue-600 first-letter:uppercase">
        {name}
      </p>
      <div className="m-auto">
        <Image src={imageUrl} alt={name + " image"} width={150} height={150} />
      </div>
      <span className="py-2 font-bold text-2xl text-red-700">
        #{indexNo + indexOffset}
      </span>
    </div>
  );
}
