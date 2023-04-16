import styled from "@emotion/styled";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";
import { useState } from "react";
import { getPokemonsData } from "../services/api-fetch";
import Header from "../components/header";
import PokemonCard from "../components/pokemon-card";
import { TextMd } from "../styles/typography";

const MainContainer= styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:5px;
`

const Pagination = styled.div`
    display:flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
`

const PokemonsListContainer= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-content: center;
`

function HomePage(){
    const [page, setPage]= useState(1);
    const [startingRange, setStartingRange] = useState(0);
    const [pokemonsList, setPokemonsList]= useState(null)

    useEffect(()=>{
        getPokemonsData(startingRange)
        .then((data)=>{
        setPokemonsList(data);
        })
        .catch(console.log)
    },[page]);

    function nextPage(){
        if(page!==143){
            setStartingRange(startingRange+9);
            setPage(page+1);
        } else {
            setStartingRange(0);
            setPage(1);
        }
    }

    function previousPage(){
        if (page!==1){
            setStartingRange(startingRange-9);
            setPage(page-1);
        } else{
            setStartingRange(1278);
            setPage(143);
        }
    }

    return (
        <MainContainer>
          <Header/>
          <Pagination>
            <FiChevronLeft onClick={()=> previousPage()}/>
            <TextMd>{page}</TextMd>
            <FiChevronRight onClick={()=> nextPage()}/>
          </Pagination>
          <PokemonsListContainer>
            {pokemonsList? pokemonsList.map((pokemon)=>(
              <PokemonCard pokemon={pokemon}/>))
              :
              <></>}
          </PokemonsListContainer>
        </MainContainer>
    );
}

export default HomePage;