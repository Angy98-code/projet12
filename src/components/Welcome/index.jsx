/** @format */

//import React, { useState, useEffect } from "react";
import styled from "styled-components";
import felicitation from "../../assets/felicitation.png";
//import { useFetch } from '../../utils/hooks'
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
//import { renderMatches } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ThemeContext } from "../../utils/context";
//import mocks from '../data/mocks.json'
import dataMock from "../../data/mocks.json";

//mock
// if (isMock) {
// console.log("voir data mock", data);

// }

const DivContainerStyled = styled.div`
  padding-top: 92px;
  margin-left: 180px;
`;
const DivNameStyled = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 24px;
`;

function Welcome() {
  const { theme } = useContext(ThemeContext);
  let userData;
  //API
  const { id: userId } = useParams();
  const {
    data: dataApi,
    error,
    isLoading,
  } = useFetch(theme === "mock" ? "" : `http://localhost:3000/user/${userId}`);

  // //MOCK
  // console.log("error", error);
  // console.log("isLoading", isLoading);
  //   console.log('theme === "mock"', theme === "mock");
  //   console.log("data", dataApi?.data);

  if (theme === "mock") {
    userData = dataMock.data.userInfos.firstName;
    // console.log("?????", userData);
  } else {
    userData = dataApi?.data?.userInfos?.firstName;
  }
  //console.log("dataApi", dataApi?.data?.id);
  //fonctionne pas
  //console.log({isLoading, error, data});
  if (!isLoading && error) {
    return <Navigate to="/404" replace />;
  }

  // console.log("wwwwww", userId);
  if (userId !== "18" && userId !== "12") {
    return <Navigate to="/404" replace />;
  }
  //console.log("userId", userId, userData);

  // ok avant
  // if ((!isLoading && error) || dataApi === "can not get user") {
  //   return <Navigate to="/404" replace />;
  // }
  //

  //console.log("!!!!",theme, toggleTheme, setTheme);
  //if (theme === "mock") { const user = data mock}
  //console.log(dataMock);
  // const userMock = dataMock.data.id;
  // const firstNameMock = dataMock.data.userInfos.firstName;
  //console.log("userMock", userMock, firstNameMock);
  //console.log("toggleTheme",toggleTheme);
  //
  //const user = userData?.data;
  //const dataUserId = data;

  // console.log("error", error);
  // console.log("DATA", dataUserId);
  // console.log("USER", user);
  // console.log("data.id API : ", user?.id, typeof user?.id);
  // console.log("userId, url : ", parseInt(userId),typeof parseInt(userId)); ///attention string

  //ok retourne erreur ! erreur dans console au départ logique !
  // if (user?.id !== parseInt(userId))
  //  console.log("erreur")
  // if (user?.id === parseInt(userId))
  //  console.log("yes all is ok")
  //return <Navigate to="/404" replace />

  return (
    <DivContainerStyled>
      <DivNameStyled>
        {" "}
        Bonjour <span className="colorwelcome">{userData}</span>
      </DivNameStyled>
      <br />
      <br />
      <br />
      <img src={felicitation} alt="" />
    </DivContainerStyled>
  );
}
export default Welcome;
