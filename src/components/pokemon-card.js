import styled from "@emotion/styled";
import {TextMd} from "../styles/typography"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #02fcdf;
    border-radius: 15%;
    height: 350px;
    width: 320px;
    align-items:center;
    box-shadow: 1px 3px 5px 1px rgba(162,159,159,0.75);
    padding: 20px 0px 20px 0px;
`;

const StyledImage = styled.img`
    width: 300px;
    height: 300px;
`

function PokemonCard({pokemon}){

    return(
        <CardContainer>
            <StyledImage 
            src={pokemon.sprites.front_default}
            alt={`Pokemon ${pokemon?.name}`}
            />
            <TextMd style={{maxWidth:"280px", color:"#000000"}}>
                {pokemon.name}
            </TextMd>
        </CardContainer>
    );
}

export default PokemonCard;