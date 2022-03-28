import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

async function FetchApi(query: string) {
  try {
    const { data } = await api.get(query.trim());
    return data;
  } catch (error) {
    console.log("Ops! An error has occurred");
  }
}
export default FetchApi;
