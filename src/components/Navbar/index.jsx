import styled from 'styled-components'
import logophoto from "../../assets/logophoto.png"
import { Link } from 'react-router-dom'

const ContainerDivStyled = styled.div`
  background-color: #020203;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 91px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  align-items: center;
  padding-left: 20px;
  padding-right: 80px;
 
  height: 91px;
  left: 0px;
  top: 0px;
  color: white;
`;
const NavContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  align-items: center;
  padding-left: 20px;
  padding-right: 80px;
  width: 1420px;
  height: 91px;
  left: 0px;
  top: 0px;
  color: white;
`;
//   display: flex;
//   justify-content : space-between;
//   z-index: 1;
//   align-items : center;
//   padding-left : 20px;
//   padding-right : 80px;
//   width: 1420px;
//   height: 91px;
//   left: 0px;
//   top: 0px;
//   color: white;
//   background-color: #020203;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


const ImageLogoStyled = styled.img`
  width: 160px;
  height : 54px;
`

const LinkStyled = styled.div`
color : white;
font-size : 20px;
`

function navContainer () {

    return (
    
        <ContainerDivStyled>
          
            <Link to="/">
              <ImageLogoStyled src={logophoto} alt="logo" />
            </Link>
            <Link to="/">
              <LinkStyled to="/">Accueil</LinkStyled>
            </Link>
            <LinkStyled to="/Profil">Profil</LinkStyled>
            <LinkStyled to="/Reglage">Réglage</LinkStyled>
            <LinkStyled to="/Communaute">Communauté</LinkStyled>
        
        </ContainerDivStyled>
     
    );
}
export default navContainer