import styled from "@emotion/styled";
import image1 from "../assets/images/pokemon-logo.png";
import {TextMd} from "../styles/typography";

const MainContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px 0px 0px;
`

function Header(){
    return (
       <MainContainer>
            <img src={image1}/>
            <TextMd> Ready to discover the details of your pokemons!</TextMd>
       </MainContainer> 
    );
}

export default Header;