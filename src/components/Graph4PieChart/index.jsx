/** @format */

import "../../styles/style.css";
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks";
import dataMock from "../../data/mocks.json";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

// const data = [
//     {value:400,
//         id: 12,
//         userInfos: {
//             firstName: 'Karl',
//             lastName: 'Dovineau',
//             age: 31,
//         },
//         todayScore: 0.12,
//         keyData: {
//             calorieCount: 1930,
//             proteinCount: 155,
//             carbohydrateCount: 290,
//             lipidCount: 50
//         }
//     },
//     {
//         id: 18,
//         userInfos: {
//             firstName: 'Cecilia',
//             lastName: 'Ratorez',
//             age: 34,
//         },
//         score: 0.3,
//         keyData: {
//             calorieCount: 2500,
//             proteinCount: 90,
//             carbohydrateCount: 150,
//             lipidCount: 120
//         }
//     }
// ]

const PieDivStyled = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;
const H2Styled = styled.h2`
  padding: 0;
  position: absolute;
  margin: 0;
  z-index: 1;
  padding-left: 20px;
  font-size: 15px;
  padding-top: 40px;
`;

const SpanPieStyled = styled.span`
  font-size: 12px;
  text-align: center;
  padding-top: 1px;
`;
const TextMiddlePieStyled = styled.div`
  left: 81px;
  z-index: 1;
  position: absolute;
  font-size: 26px;
  width: 121px;
  flex-direction: column;
  display: flex;
  top: 71px;
  justify-content: center;
  align-items: center;
  height: 121px;
  background-color: white;
  boder-radius: 100%;
  border-radius: 50%;
`;

function Piechart() {
  // //Fetch
  // const { id: userId } = useParams();
  // const { data, error } = useFetch(`http://localhost:3000/user/${userId}`);

  const { theme } = useContext(ThemeContext);
  let newData;
  //API
  const { id: userId } = useParams();
  const {
    data: dataApi,
    error,
  } = useFetch(theme === "mock" ? "" : `http://localhost:3000/user/${userId}`);

  // //MOCK

  //console.log('theme === "mock"', theme === "mock");

  if (theme === "mock") {
    newData = dataMock.data;
    // console.log("?????", userData);
  } else {
    newData = dataApi?.data;
  }

  // let newData = data?.data;
  // console.log("data4", newData);
  let scoreData =
    (newData?.todayScore && Object(newData?.todayScore)) ||
    (newData?.score && Object(newData?.score));
  //console.log("scoreData",scoreData);

  if (error) {
    return <span>Il y a un problème</span>;
  }

  //  //console.log("info function scoreData",scoreData)
  const scoreValue = [
    { value: 100, fill: "transparent" },
    { value: scoreData * 270, fill: "#ff0101" },
  ];

  if (!scoreData) {
    return null;
  }

  //console.log("scoreValue",scoreValue);
  return (
    <PieDivStyled>
      <H2Styled>Score</H2Styled>
      <TextMiddlePieStyled>
        <strong>{100 * scoreData}%</strong>
        <SpanPieStyled>
          de votre <br />
          objectif
        </SpanPieStyled>
      </TextMiddlePieStyled>

      <ResponsiveContainer width="100%" height={263}>
        <PieChart
          className="containerpie"
          width={800}
          height={400}
          data={newData}
        >
          <Pie
            data={scoreValue}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            cornerRadius={40}
            endAngle={-270}
          ></Pie>
        </PieChart>
      </ResponsiveContainer>
    </PieDivStyled>
  );
}
export default Piechart;
