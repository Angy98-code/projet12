import  "../../styles/style.css"
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
    {value:400,
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]



const PieDivStyled = styled.div`
  width: 100%;
  height: 300px;
  position : relative;
`
const H2Styled = styled.h2`
    padding: 0;
    position: absolute;
    margin: 0;
    z-index: 1;
    padding-left: 20px;
    font-size: 15px;
    padding-top: 40px;
`

const SpanPieStyled = styled.span`
font-size : 12px;
text-align : center;
padding-top : 1px;

`
const TextMiddlePieStyled = styled.div`
left: 81px;
    z-index: 1;
    position: absolute;
    font-size : 26px;
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
`

function piechart () {
  let scoreData;
data.find(element => {
  return scoreData = element.todayScore? element.todayScore : element.score
//console.log("INFO todayScore, score ",element.todayScore, element.score);
});
 //console.log("info function scoreData",scoreData)
  const scoreValue = [
    { value: 1, fill: 'transparent' },
    { value: scoreData, fill: '#ff0101' },
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
      <PieChart className="containerpie" width={800} height={400} >
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
        >
        
        </Pie>
       
         
      </PieChart> 
     
      </ResponsiveContainer>
      
      </PieDivStyled>
    );
  }


export default piechart








// /////
// import  "../../styles/style.css"
// import React from 'react';
// //import { PieChart, Pie, Label, Sector, Cell, ResponsiveContainer } from 'recharts';
// import styled from 'styled-components';
// import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

// const PieDivStyled = styled.div`
//   margin-top: 30px;
//   width: 21%;
//   height: 300px;
// `
// const data = [
//  { name: 'Group A', value: 400 },

// ];
// //const color = ['#FF0000'];

// function piechart () {
//     return (
//       <PieDivStyled>
//           <ResponsiveContainer height="100%" width="100%">
// {/** https://recharts.org/en-US/api/RadialBarChart */}                
//                 <RadialBarChart
//                     cx="50%"
//                     cy="50%"
//                     innerRadius={70}
//                     outerRadius={80}
//                     barSize={8}
//                     data={data}
//                     startAngle={-270}
//                     endAngle={90}
//                     >
// {/** https://recharts.org/en-US/api/PolarAngleAxis */}          
//                 <PolarAngleAxis
//                     type="number"
//                     domain={[0, 100]}
//                     angleAxisId={0}
//                     tick={false}
//                 />
// {/** https://recharts.org/en-US/api/RadialBar */}                
//                 <RadialBar
//                     background={false}
//                     clockWise={true}
//                     dataKey="value"
//                     cornerRadius={15}
//                 />
// {/** https://recharts.org/en-US/api/Text */}
//                 <text
//                     x={35}
//                     y={25}
//                     textAnchor="middle"
//                     dominantBaseline="middle"
//                     className="progress-label"
//                     >
//                     Score
//                 </text>
//                 </RadialBarChart>
//             </ResponsiveContainer>
      
//       </PieDivStyled>
//     );
//   }


// export default piechart





/////



















// import React from 'react';
// import { RadialBar, Legend, Label, RadialBarChart, ResponsiveContainer } from 'recharts';
// import styled from 'styled-components';
// import  "../../styles/style.css"

// // const data = [
// //     {
// //         id: 12,
// //         userInfos: {
// //             firstName: 'Karl',
// //             lastName: 'Dovineau',
// //             age: 31,
// //         },
// //         todayScore: 0.12,
// //         keyData: {
// //             calorieCount: 1930,
// //             proteinCount: 155,
// //             carbohydrateCount: 290,
// //             lipidCount: 50
// //         }
// //     },
// //     {
// //         id: 18,
// //         userInfos: {
// //             firstName: 'Cecilia',
// //             lastName: 'Ratorez',
// //             age: 34,
// //         },
// //         score: 0.3,
// //         keyData: {
// //             calorieCount: 2500,
// //             proteinCount: 90,
// //             carbohydrateCount: 150,
// //             lipidCount: 120
// //         }
// //     }
// // ]

// const PieDivStyled = styled.div`
//   margin-top: 30px;
//   width: 21%;
//   height: 300px;
// `
// // let scoreData;
// // data.forEach(element => {
// //   scoreData = element.todayScore? element.todayScore : element.score
// // console.log();
// // });
// //  console.log("info",scoreData)

// // const scoreValue = [
// //     { value: 1, fill: 'transparent' },
// //     { value: scoreData, fill: '#ff0101' },
// //   ];

// //////////


// const data = [
//   {
//     name: '18-24',
//     uv: 31.47,
//     pv: 2400,
//     fill: '#8884d8',
//   },
//   {
//     name: '25-29',
//     uv: 26.69,
//     pv: 4567,
//     fill: '#83a6ed',
//   },
//   {
//     name: '30-34',
//     uv: 15.69,
//     pv: 1398,
//     fill: '#8dd1e1',
//   },
//   {
//     name: '35-39',
//     uv: 8.22,
//     pv: 9800,
//     fill: '#82ca9d',
//   },
//   {
//     name: '40-49',
//     uv: 8.63,
//     pv: 3908,
//     fill: '#a4de6c',
//   },
//   {
//     name: '50+',
//     uv: 2.63,
//     pv: 4800,
//     fill: '#d0ed57',
//   },
//   {
//     name: 'unknow',
//     uv: 6.67,
//     pv: 4800,
//     fill: '#ffc658',
//   },
// ];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };



// function piechart () {
// //   const scoreData = keyData.todayScore || keyData.score;
// // console.log("score", scoreData, data);
// return (
// <PieDivStyled>

// <ResponsiveContainer className="containerpie" width="100%" height="100%">
//                     <RadialBarChart
//                         innerRadius="83%"
//                         outerRadius="108%"
//                         data={data}
//                         startAngle={555}
//                         endAngle={195}
//                     >
//                         <RadialBar
//                             dataKey="uv"
//                             background
//                             animationBegin={3200}
//                             animationDuration={1900}
//                         />
//                     </RadialBarChart>
//                 </ResponsiveContainer>

// </PieDivStyled>


// )
// }
// export default piechart



// // <ResponsiveContainer className="containerpie" width="100%" height="100%">
// //          <RadialBarChart
// //            width={200}
// //            height={200}
// //            startAngle={90}
// //            endAngle={450}
// //            innerRadius={90}
// //            outerRadius={55}
// //            barSize={7}
// //            data={scoreData}
// //          >
// //            <RadialBar cornerRadius={50} dataKey="scoreData" />
// //          </RadialBarChart>
// //        </ResponsiveContainer>


// ///

// // function piechart ({ keyData })  {
// //   const scoreData = keyData.data.todayScore || keyData.data.score;

// //   const scoreValue = [
// //     { value: 1, fill: 'transparent' },
// //     { value: scoreData, fill: '#ff0101' },
// //   ];

// //   if (!scoreData) {
// //     return null;
// //   }
// //   return (
// //     <PieDivStyled>
// //       <h3>Score</h3>
// //       <p>
// //         <strong>{100 * scoreData}%</strong>
// //         <br />
// //         <span>
// //           de votre <br />
// //           objectif
// //         </span>
// //       </p>
// //       <ResponsiveContainer width="100%" height="100%">
// //         <RadialBarChart
// //           width={200}
// //           height={200}
// //           startAngle={90}
// //           endAngle={450}
// //           innerRadius={90}
// //           outerRadius={55}
// //           barSize={7}
// //           data={scoreValue}
// //         >
// //           <RadialBar cornerRadius={50} dataKey="value" />
// //         </RadialBarChart>
// //       </ResponsiveContainer>
// //     </PieDivStyled>
// //   );
// // };

// // export default piechart;


