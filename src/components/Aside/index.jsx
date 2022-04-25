import styled from 'styled-components'
import Group1 from "../../assets/Group1.png"
import Group2 from "../../assets/Group2.png"
import Group4 from "../../assets/Group4.png"
import Group3 from "../../assets/Group3.png"

const AsideContainerStyled = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content : center;
align-items: center;
padding-bottom : 480px;
// padding-bottom : 400px;  wip
width: 91px;
color: white;
background-color: #020203;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const ImageGroupsStyled = styled.img`
width : 30px;
height : 27px;
background-color: white;
padding: 10px;
margin-top : 25px;
border-radius : 3px;
`
const DivImageStyled = styled.div`
display:flex;
flex-direction : column;
margin-top: 380px;
`
const CopiryghtTextStyled = styled.span`
transform : rotate(270deg);
font-size: 12px;
bottom: -270px;
color: white;
left: -22px;
position: absolute;

`

function asideContainer () {

    return (
        <div>
    <AsideContainerStyled>
        <DivImageStyled>
            <ImageGroupsStyled src={Group1} alt=""/>
            <ImageGroupsStyled src={Group2} alt=""/>
            <ImageGroupsStyled src={Group3} alt=""/>
            <ImageGroupsStyled src={Group4} alt=""/>
        </DivImageStyled>
        </AsideContainerStyled>       
  <CopiryghtTextStyled>Copiryght. SportSee 2020</CopiryghtTextStyled>
  


        </div>
    )
}
export default asideContainer