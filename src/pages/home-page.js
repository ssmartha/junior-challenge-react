import { useEffect } from "react";
import { getPokemonsData } from "../services/api-fetch";
import { useState } from "react";

function HomePage(){
    const [startingRange, setStartingRange] = useState(0);
    const [finalRange, setFinalRange]=useState(8);
    const [pokemonsList, setPokemonsList]= useState(null)

    console.log("POKEMONS LIST",pokemonsList)

    useEffect(()=>{
        console.log("CURRENT RANGE", startingRange, finalRange)
        getPokemonsData(startingRange, finalRange)
        .then((data)=>{
        setPokemonsList(data);
        })
        .catch(console.log)
    },[startingRange,finalRange]);

    return (
        <>
        </>
    );
}

export default HomePage;