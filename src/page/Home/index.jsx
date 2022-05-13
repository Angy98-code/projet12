/** @format */

import Navbar from "../../components/Navbar";
import Aside from "../../components/Aside";
import Ids from "../../components/Ids";
import Toggle from "../../components/Toggle";
import styled from "styled-components";
// import { ThemeContext } from "styled-components";
// import { useContext } from "react";
// import styled from "styled-components";
//import BarChart from "../../components/BarChart"
//import { Routes, Route, Link } from 'react-router-dom'

// const data = http://localhost:3000/user/${userId}
// console.log(data);
//import Graph2 from "../components/Graph2"

// const NightModeButton = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   color: orange;
// `;

const ContainerDivStyled = styled.div`
width : 100%;
`

function Home() {
  //  const { toggleTheme, theme } = useContext(ThemeContext)
  return (
    <ContainerDivStyled>
      <Navbar />
      <Aside />
      <Ids />
      <Toggle />
    </ContainerDivStyled>
  );
}
export default Home;
