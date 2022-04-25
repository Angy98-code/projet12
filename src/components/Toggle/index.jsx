import styled from "styled-components"

const ContainerStyled = styled.div`
height : 100px;
display : flex;
justify-content: center;
align-items : center;
margin-left: 180px;
margin-right : 91px;
`
const ButtonStyled = styled.button`
width : 100px;
border-radius: 15px;
height : 60px;
border : none;
background: pink;
cursor: pointer;
`

function Toggle () {

    return (<ContainerStyled><ButtonStyled>API / MOCK</ButtonStyled></ContainerStyled>)
}
export default Toggle