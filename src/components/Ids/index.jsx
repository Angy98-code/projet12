import styled from "styled-components"
import { Link } from "react-router-dom"

const ContainerStyled = styled.div`
padding-top : 350px;
margin-left: 180px;
margin-right : 91px;
height : 180px;
display:flex;
justify-content : space-around;
align-content : center;
`

const Id12Styled = styled(Link)`
display: flex;
align-items : center;
justify-content : center;
width: 200px;
height : 100px;
background:#FF0000;
border-radius : 15px;
padding: 10px;
font-size : 40px;
font-weight : 500;
border: none;
cursor: pointer;
text-decoration:none;
`
const Id18Styled = styled(Link)`
display: flex;
align-items : center;
justify-content : center;
border-radius : 15px;
width: 200px;
background:#FF0000;
height : 100px;
padding: 10px;
text-align : center;
font-size : 40px;
font-weight : 500;
border : none;
cursor: pointer;
text-decoration:none;
`

function Ids () {

return (<ContainerStyled>
    <Id12Styled to="/user/12">id 12</Id12Styled>
    <Id18Styled to="/user/18">id 18</Id18Styled>
</ContainerStyled>)
}
export default Ids