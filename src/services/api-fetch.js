import { BASE_URI } from "../config"

export async function getPokemonsData(startingRange, finalRange){
    const response = await fetch(`${BASE_URI}pokemon?limit=${finalRange}&offset=${startingRange}`)
    const data = await response.json();
    
    const promises = data.results.map(async(pokemon)=>{
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
    })

    const finalData = await Promise.all(promises);

    return finalData;
}