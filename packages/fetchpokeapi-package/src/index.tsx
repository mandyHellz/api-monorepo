import axios from "axios";
import * as React from "react";
import PokeData from "../components/PokeData";

type FetchingProps = {
  pokename: string;
};

const FetchApi: React.FC<FetchingProps> = ({ pokename }) => {
  const [pokemon, setPokemon] = React.useState({
    id: "",
    name: "",
    abilities: [],
    sprites: { front_default: "" },
    types: [],
    weight: "",
  });

  const handleFetching = async (e: { preventDefault: () => void }) => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokename}`
    );
    setPokemon(data);
    e.preventDefault();
  };

  return (
    <>
      <button onClick={handleFetching}>Fetch Poke Api</button>

      {pokemon === null || undefined ? (
        "loading..."
      ) : (
        <PokeData
          key={pokemon.id}
          pokeName={pokemon.name}
          abilities={pokemon.abilities}
          image={pokemon.sprites.front_default}
          weight={pokemon.weight}
          types={pokemon.types}
          marginBottom={10}
        />
      )}
    </>
  );
};
export default FetchApi;
