/** @format */

import { useContext } from "react";
//import colors from '../../utils/style/colors'

import { ThemeContext } from "../../utils/context";
import styled from "styled-components";
//import colors from '../../utils/style/colors'

const ToggleContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const ModeButton = styled.button`
  width: 100px;
  border-radius: 15px;
  height: 60px;
  border: none;
  background: pink;
  cursor: pointer;
`;
const DivTitle = styled.div`
  padding-right: 25px;
`;

function Toggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <ToggleContainer>
      {" "}
      <DivTitle>
        <h5>Data Api ou Mock, à vous de choisir : </h5>
      </DivTitle>
      {/* <NightModeButton>MOCK</NightModeButton> */}
      <ModeButton onClick={() => toggleTheme()}>
        {theme === "mock" ? "MOCK" : "API"}
      </ModeButton>
    </ToggleContainer>
  );
}

export default Toggle;

//
// const ToggleButtonOnOff = () => {
//   const [isOff, setIsOff] = useState(true);

//   return (
//     <button onClick={() => setIsOff(!isOff)}>{ isOff ? 'ON' : 'OFF' }</button>
//   );
// }
//

// import styled from "styled-components"

// const ContainerStyled = styled.div`
// height : 100px;
// display : flex;
// justify-content: center;
// align-items : center;
// margin-left: 180px;
// margin-right : 91px;
// `
// const ButtonStyled = styled.button`
// width : 100px;
// border-radius: 15px;
// height : 60px;
// border : none;
// background: pink;
// cursor: pointer;
// `

// function Toggle () {

//     return (<ContainerStyled><ButtonStyled>API / MOCK</ButtonStyled></ContainerStyled>)
// }
// export default Toggle
