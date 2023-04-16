import styled from "@emotion/styled";
import Header from "../components/header";
import { getPokemonDataById } from "../services/api-fetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import imageBackground from "../assets/svg/blob.svg";
import * as fonts from "../styles/typography"

const MainContainer= styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:5px;
`
const ImageContainer = styled.div`
  background-image: url(${imageBackground});
  background-repeat: no-repeat;
  backgorund-position: center;
  width: 450px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledImage = styled.img`
  width: 300px;
  height: 300px;
`

const PokemonDataContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`

const DetailsContainer = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: left;
    padding: 0px 5px;
`
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`
const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
`

function PokemonPage(){
    const {id} = useParams();
    const [pokemonData, setPokemonData]= useState(null);
    
    useEffect(()=>{
        getPokemonDataById(id)
        .then((data)=> setPokemonData(data))
        .catch(console.log);
    },[]);

    return(
        <MainContainer>
            <Header/>
            <PokemonDataContainer>
                <ImageContainer>
                    <StyledImage 
                    src={pokemonData?.sprites.front_default}
                    alt={`Pokemon ${pokemonData?.name}`}
                    />
                </ImageContainer>

                <DetailsContainer>
                    <fonts.TextMd style={{textTransform: "uppercase"}}>Pokedex data</fonts.TextMd>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Type:</fonts.TextSm>
                        <FlexColumn>
                            {pokemonData?
                                pokemonData?.types.map((type)=>(
                                    <fonts.TextSm>{type.type.name}</fonts.TextSm>
                                ))
                                :
                                <fonts.TextSm>undefined</fonts.TextSm>
                            }
                        </FlexColumn>
                    </FlexRow>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Height:</fonts.TextSm>
                        {pokemonData?
                            <fonts.TextSm>{pokemonData.height}</fonts.TextSm>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Weight:</fonts.TextSm>
                        {pokemonData?
                            <fonts.TextSm>{pokemonData?.weight}</fonts.TextSm>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Abilities:</fonts.TextSm>
                        {pokemonData?
                            <FlexColumn style={{justifyContent:"right", alignItems:"right"}}>
                                {pokemonData.abilities.map((ability)=>(
                                    <fonts.TextSm >{ability.ability.name}</fonts.TextSm>
                                ))}
                            </FlexColumn>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Base Experience:</fonts.TextSm>
                        {pokemonData?
                             <fonts.TextSm>{pokemonData?.base_experience}</fonts.TextSm>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                </DetailsContainer>

                <DetailsContainer>
                    <fonts.TextMd style={{textTransform: "uppercase"}}>Base stats</fonts.TextMd>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Hp:</fonts.TextSm>
                        {pokemonData?
                            <fonts.TextSm>{pokemonData.stats[0].base_stat}</fonts.TextSm>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Attack:</fonts.TextSm>
                        {pokemonData?
                            <fonts.TextSm>{pokemonData.stats[1].base_stat}</fonts.TextSm>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Defense:</fonts.TextSm>
                        {pokemonData?
                            <fonts.TextSm>{pokemonData.stats[2].base_stat}</fonts.TextSm>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Special Attack:</fonts.TextSm>
                        {pokemonData?
                            <fonts.TextSm>{pokemonData.stats[3].base_stat}</fonts.TextSm>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Special Defense:</fonts.TextSm>
                        {pokemonData?
                            <fonts.TextSm>{pokemonData.stats[4].base_stat}</fonts.TextSm>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                    <FlexRow style={{justifyContent: "space-between"}}>
                        <fonts.TextSm>Speed:</fonts.TextSm>
                        {pokemonData?
                             <fonts.TextSm>{pokemonData.stats[5].base_stat}</fonts.TextSm>
                            :
                            <fonts.TextSm>undefined</fonts.TextSm>
                        }
                    </FlexRow>
                </DetailsContainer>

            </PokemonDataContainer>
        </MainContainer>
    );
}

export default PokemonPage;