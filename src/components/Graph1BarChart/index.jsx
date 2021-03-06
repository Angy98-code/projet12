import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import  "../../styles/style.css"
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import dataMock from "../../data/mocks.json";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

// const data = [
//   {
//     //day: '2020-07-01',
//                 kilogram: 70,
//                 calories: 240,
//   },
//   {
//    // day: '2020-07-02',
//                 kilogram: 69,
//                 calories: 220,
//   },
//   {
//     // day: '2020-07-03',
//                 kilogram: 70,
//                 calories: 280,
//   },
//   {
//     // day: '2020-07-04',
//                 kilogram: 70,
//                 calories: 500, 
//   },
//   {
//     //    day: '2020-07-05',
//                 kilogram: 69,
//                 calories: 160,
//   },
//   {
//     day: '6',
//    //day: '2020-07-06',
//                 kilogram: 69,
//                 calories: 162,
//   },
//   {
//      // day: '2020-07-07',
//                 kilogram: 69,
//                 calories: 390,
//   },
// ];

const DivBarChartStyled = styled.div`
  display:flex;
  flex-direction : raw;
`

function Barfunction () { 
    const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div
          style={{
            display:'flex',
            justifyContent:'space-between',
            flexDirection:'column',
            alignItems:'center',
            padding: '5px 10px',
            borderRadius: '2px',
            background: 'red',
            margin: 'auto',
            color: '#FFF',
          }}
        >
          <p>{`${payload[0].value}Kg`}</p>
          <p>{`${payload[1].value}Kcal`} </p>
        </div>
      )
    }
    return null
  }

  const { theme } = useContext(ThemeContext);
  let userData;
  //API
  const { id: userId } = useParams();
  const { data: dataApi } = useFetch(
    theme === "mock" ? "" : `http://localhost:3000/user/${userId}/activity`
  );

  // //MOCK

 // console.log('theme === "mock"', theme === "mock");

  if (theme === "mock") {
    userData = dataMock.data.activity.data.sessions;
  //  console.log("1?????", userData);
  } else {
    userData = dataApi?.data?.sessions;
  //  console.log("2?????", userData);
  }

//keep the elements from the API
//   const { id: userId } = useParams();
//   const { data, error } = useFetch(`http://localhost:3000/user/${userId}/activity`);
//   const user = data.data;
//   const userSessions = user?.sessions;

// if (error) {
//   return <span>Il y a un probl??me</span>
//   } 

//array of 7 days object
//chande value dayweek   
  const weekDaysGraph1 = (day) => {
  const days = ['1', '2', '3', '4', '5', '6', '7'];
  return days[day];
  };

  return ( 
    <DivBarChartStyled> 
      <h3 className='titlebar'>Activit?? quotidienne</h3>
        <ResponsiveContainer width="100%" height={320} className="barcontainer" >
          <BarChart 
            width={500}
            height={250}
            data={userData}
            margin={{
            top: 100,
            right: 20,
            left: -30,
            bottom: 5,
          }}>
            <CartesianGrid strokeDasharray="1 1" vertical={false} />
              <XAxis tick={{ fill: '#9B9EAC', fontSize: 14}} padding={{ left: -50, right: -50 }} dy={30} tickLine={false} axisLine={false} tickFormatter={weekDaysGraph1} />
              <YAxis dataKey="kilogram" yAxisId="left" orientation="right" stroke="#82ca9d" dx={20} tickLine={false} axisLine={false}  tickCount={3} domain={["dataMin -1", "dataMax + 2"]}  tick={{ fill: '#9B9EAC', fontSize: 14}} />
              <YAxis dataKey="calories" yAxisId="right" orientation="left" stroke="#8884d8" tickLine={false} axisLine={false} tickCount={0} tick={{ fill: '#9B9EAC', fontSize: 14}}/>
                <Tooltip content={<CustomTooltip />} />
                  <Legend height={36} iconType="circle" iconSize={8} align="center" wrapperStyle={{  left: "0px",
                    right: "0px", lineHeight: "-20px"}}/> 
            <Bar yAxisId="left" dataKey="kilogram" type="circle" name="Poids (Kg)"  fill="#282D30" barSize={8} radius={[3.5, 3.5, 0, 0]} />
            <Bar yAxisId="right" dataKey="calories" type="circle" name="Calories br??l??es (kCal)" fill="#E60000" barSize={8} radius={[3.5, 3.5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
    </DivBarChartStyled>);
  }
export default Barfunction
