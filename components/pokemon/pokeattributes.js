export default function PokeAttributes({ height, weight }) {
  function heightConvert(value) {
    const feet = Math.floor((value * 4) / 12);
    const inches = Math.floor((value * 4) % 12);
    return `${feet}' 0${inches}"`;
  }
  return (
    <>
      <p>Height: {heightConvert(height)}</p>
      <p>Weight: {weight} lbs</p>
    </>
  );
}

 
