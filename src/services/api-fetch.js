import { BASE_URI } from "../config"

export async function getPokemonsData(startingRange){
    const response = await fetch(`${BASE_URI}pokemon?limit=9&offset=${startingRange}`)
    const data = await response.json();
    
    const promises = data.results.map(async(pokemon)=>{
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
    })

    const finalData = await Promise.all(promises);

    return finalData;
}