/// <reference types="react" />
declare const PokeData: ({ pokeName, abilities, image, weight, types, marginBottom, }: {
    pokeName: string;
    abilities: any;
    image: string;
    weight: string;
    types: any;
    marginBottom?: number | undefined;
}) => JSX.Element;
export default PokeData;
