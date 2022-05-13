/** @format */

// //probleme au depart
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// import  "../../styles/style.css"
// import { useFetch } from '../../utils/hooks';

// // const data = [
// //             {
// //                 day: 1,
// //                 sessionLength: 30
// //             },
// //             {
// //                 day: 2,
// //                 sessionLength: 40
// //             },
// //             {
// //                 day: 3,
// //                 sessionLength: 50
// //             },
// //             {
// //                 day: 4,
// //                 sessionLength: 30
// //             },
// //             {
// //                 day: 5,
// //                 sessionLength: 30
// //             },
// //             {
// //                 day: 6,
// //                 sessionLength: 50
// //             },
// //             {
// //                 day: 7,
// //                 sessionLength: 50
// //             }
// //         ]

// //tooltip, le carré avec valeur
// const CustomToolTip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//         background: '#ffffff',
//         fontSize: 10,
//         textAlign: 'center',
//         padding: 8,
//         }}>
//         <p>{`${payload[0].value} min`}</p>
//       </div>
//     );
//   }
//   return null;
// };

// function LineGraph () {

// //fetch
//   const { id: userId } = useParams();
//   const { data, error } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`);
//   const user = data.data;
//   const userSessions = user?.sessions;

//   if (error) {
//     return <span>Il y a un problème</span>
//   }

// //weekdays
//   const weekDays = (day) => {
//   const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
//     return days[day - 1];
//   };

//     return (

//   <div className='averageSessions' >
//     <h3 className='titleline'>Durée moyenne des <br/> sessions</h3>
//       <ResponsiveContainer width="100%" height={263} isTooltipActive = {false}>
//         <LineChart width="100%" height={100} data={userSessions} margin={{
//             top: 65,
//             bottom: 50}}

//   onMouseMove={(e) => {
//   if (e.isTooltipActive === true) {
//     let div = document.querySelector('.averageSessions')
//     let windowWidth = div.clientWidth
//     let mouseXpercentage = Math.round(
//       (e.activeCoordinate.x / windowWidth) * 100
//     )
//     div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
//   }
// }}
//   >
//                  <Tooltip
//             content={<CustomToolTip active={true} payload={userSessions} />}
//             cursor={false}
//           />
//            {/* <Tooltip content={tooltip} cursor={{ stroke: 'black', strokeOpacity: 0.2, strokeWidth: 40}} offset={60}/> */}
//         <Line type="monotone" dot={false} dataKey="sessionLength" activeDot={{ r: 4, strokeWidth: 10 }}
//             stroke="rgba(255, 255, 255, 0.6)"
//             strokeWidth={2}/>
//            <XAxis mirror={false} tick={{fontSize: 12,fill: '#FFFFFF', opacity:0.6 }} dataKey="day" tickLine={false} axisLine={false}
//             style={{ fontSize: 12}} tickFormatter={weekDays} domain={[0, 1]} padding={{left:10, right:10}}/>
//           <YAxis axisLine={false} domain={['dataMin - 20', 'dataMax + 40']} mirror={true}
//             tickCount={0} tickLine={false}/>
//         </LineChart>
//       </ResponsiveContainer>
//   </div>);
//   }
// export default LineGraph
//////////////////////////////////////////////////////////////////////////////
import React from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
//import styled from "styled-components"
import "../../styles/style.css";
import { useFetch } from "../../utils/hooks";
import dataMock from "../../data/mocks.json";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

// const data = [
//             {
//                 day: 1,
//                 sessionLength: 30
//             },
//             {
//                 day: 2,
//                 sessionLength: 40
//             },
//             {
//                 day: 3,
//                 sessionLength: 50
//             },
//             {
//                 day: 4,
//                 sessionLength: 30
//             },
//             {
//                 day: 5,
//                 sessionLength: 30
//             },
//             {
//                 day: 6,
//                 sessionLength: 50
//             },
//             {
//                 day: 7,
//                 sessionLength: 50
//             }
//         ]

function LineGraph() {
  function CustomToolTip({ active, payload }) {
    if (active) {
      return (
        <div
          style={{
            padding: "3px 5px",
            borderRadius: "2px",
            background: "#FFF",
            margin: "auto",
          }}
        >
          <p style={{ fontSize: "10px" }}>{payload[0].value} min</p>
        </div>
      );
    }
    return null;
  }

  const { theme } = useContext(ThemeContext);
  let userData;
  //API
  const { id: userId } = useParams();
  const { data: dataApi } = useFetch(
    theme === "mock"
      ? ""
      : `http://localhost:3000/user/${userId}/average-sessions`
  );

  // //MOCK

  //console.log('theme === "mock"', theme === "mock");

  if (theme === "mock") {
    userData = dataMock.data.averageSessions.data.sessions;
   // console.log("1?????", userData);
  } else {
    userData = dataApi?.data?.sessions;
   // console.log("2?????", userData);
  }

  // //fetch
  //   const { id: userId } = useParams();
  //   const { data, error } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`);
  //   const user = data.data;
  //   const userSessions = user?.sessions;

  //   if (error) {
  //     return <span>Il y a un problème</span>
  //   }

  //weekdays
  const weekDays = (day) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[day - 1];
  };

  return (
    <div className="linecontainer">
      <div className="averageSessions">
        <h3 className="titleline">
          Durée moyenne des <br /> sessions
        </h3>
        <ResponsiveContainer width="100%" height={263}>
          <LineChart
            width="100%"
            height={100}
            data={userData}
            margin={{
              top: 65,
              bottom: 50,
            }}
            onMouseMove={(e) => {
              if (e.isTooltipActive === true) {
                let div = document.querySelector(".averageSessions");
                let windowWidth = div.clientWidth;
                let mouseXpercentage = Math.round(
                  (e.activeCoordinate.x / windowWidth) * 100
                );
                div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
                div.style.borderRadius = "5px";
              }
            }}
          >
            <Tooltip
              content={<CustomToolTip active={true} payload={dataApi} />}
              cursor={false}
            />
            <Line
              type="monotone"
              dot={false}
              dataKey="sessionLength"
              activeDot={{ r: 4, strokeWidth: 10 }}
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth={2}
            />
            <XAxis
              mirror={false}
              tick={{ fontSize: 12, fill: "#FFFFFF", opacity: 0.6 }}
              dataKey="day"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: 12 }}
              tickFormatter={weekDays}
              domain={[0, 1]}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={false}
              domain={["dataMin - 20", "dataMax + 40"]}
              mirror={true}
              tickCount={0}
              tickLine={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
export default LineGraph;
//////////////////////////////////////////////////////////////////////////////:
// //copie originale
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
// import styled from "styled-components"
// import  "../../styles/style.css"
// import { useFetch } from '../../utils/hooks';

// //tooltip
// const tooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//         background: '#ffffff',
//         fontSize: 10,
//         textAlign: 'center',
//         padding: 10,
//         }}>
//         <p>{`${payload[0].value} min`}</p>
//       </div>
//     );
//   }
//   return null;
// };

// // const data = [
// //             {
// //                 day: 1,
// //                 sessionLength: 30
// //             },
// //             {
// //                 day: 2,
// //                 sessionLength: 40
// //             },
// //             {
// //                 day: 3,
// //                 sessionLength: 50
// //             },
// //             {
// //                 day: 4,
// //                 sessionLength: 30
// //             },
// //             {
// //                 day: 5,
// //                 sessionLength: 30
// //             },
// //             {
// //                 day: 6,
// //                 sessionLength: 50
// //             },
// //             {
// //                 day: 7,
// //                 sessionLength: 50
// //             }
// //         ]

// const DivLineStyled = styled.div`
//   width: 100%;
//   height: 300px;
// `

// function LineGraph () {
// //fetch
//   const { id: userId } = useParams();
//   const { data, error } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`);
//   const user = data.data;
//   const userSessions = user?.sessions;

//   if (error) {
//     return <span>Il y a un problème</span>
//   }

// //weekdays
//   const weekDays = (day) => {
//   const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
//     return days[day - 1];
//   };

//     return (
//   <DivLineStyled>
//     <h3 className='titleline'>Durée moyenne des <br/> sessions</h3>
//       <ResponsiveContainer width="100%" height={263} className="linecontainer" >
//         <LineChart width="100%" height={100} data={userSessions} margin={{
//             top: 65,
//             bottom: 50}}>
//            <Tooltip content={tooltip} cursor={{ stroke: 'black', strokeOpacity: 0.2, strokeWidth: 40}} offset={60}/>
//         <Line type="monotone" dot={false} dataKey="sessionLength" activeDot={{ r: 4, strokeWidth: 10 }}
//             stroke="rgba(255, 255, 255, 0.6)"
//             strokeWidth={2}/>
//            <XAxis mirror={false} tick={{fontSize: 12,fill: '#FFFFFF', opacity:0.6 }} dataKey="day" tickLine={false} axisLine={false}
//             style={{ fontSize: 12}} tickFormatter={weekDays} domain={[0, 1]} padding={{left:10, right:10}}/>
//           <YAxis axisLine={false} domain={['dataMin - 20', 'dataMax + 40']} mirror={true}
//             tickCount={0} tickLine={false}/>
//         </LineChart>
//       </ResponsiveContainer>
//   </DivLineStyled>);
//   }
// export default LineGraph
