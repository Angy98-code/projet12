
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import felicitation from "../../assets/felicitation.png";
//import { useFetch } from '../../utils/hooks'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import { renderMatches } from 'react-router-dom';

const DivContainerStyled = styled.div`
    padding-top: 174px;
    width: 100%;
    height: 150px;
    margin-left : 180px;
`
const DivNameStyled = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 24px;
`

// async componentDidMount() {
//     // GET request using fetch with async/await
//     const response = await fetch('https://api.npms.io/v2/search?q=react');
//     const data = await response.json();
//     this.setState({ totalReactPackages: data.total })
// }



function Welcome () {
//    const { id: userId } = useParams();
// const { data, isLoading } = useFetch(`http://localhost:3000/user/${userId}`)

// const { userData } = data

// console.log("userData", userData);
//////////////////////////////////:
const { id: userId } = useParams();

 const { data, error } = useFetch(`http://localhost:3000/user/${userId}`)
 const user = data.data;



  if (error) {
    return <span>Il y a un problème</span>
  } 

  
// /////////////:
// const [data, setdata] = useState({})
// const { id: userId } = useParams();


// useEffect(() => {
//    fetch(`http://localhost:3000/user/${userId}`)
//         .then((response) => response.json())
//         .then(({ data }) => console.log("data",data))
//         .catch((error) => console.log(error))
//         console.log("data dedans", data)
// }, [userId])
// console.log("data en dehors du fetch", data)



return (
<DivContainerStyled>
    <DivNameStyled> Bonjour <span className="colorwelcome"> 
        {user?.userInfos?.firstName}   
        </span> 
    </DivNameStyled>
    <br/><br/><br/>
    <img src={felicitation} alt=""/>
</DivContainerStyled>)

}
export default Welcome



// useEffect(() => {
//    fetch(`http://localhost:3001/user`)
//         .then((response) => response.json()
//         .then(({userdata }) => console.log("userData",userdata))
//         .catch((error) => console.log(error))
//     )
// }, [])





// useEffect(() => {
// fetch("http://localhost:3000/user/${id}/activity").then((response) =>{
//     console.log({response});
//     debugger
// })

// })
/////benjamin
//const { id: userId } = useParams()
//////
// const { id } = params
// const session = data.find((element) => element.id === id)
//   if (!session) {
//     return <PageError />
//   }

//     const firstName = session.userInfos.firstName.split(' ')

//   console.log("firstName",firstName, typeof firstName )
///renvoi données console
// const userArray = data.filter(element => element.id === 12)
// console.log("userArray",userArray);
// let user =  {
//         id: 0,
//         userInfos: {
//             firstName: 'Karl',
//             lastName: '',
//             age: 0,
//         },
//         score: 0.3,
//         keyData: {
//             calorieCount: 2500,
//             proteinCount: 90,
//             carbohydrateCount: 150,
//             lipidCount: 120
//         }
//     };

//Benjamin
// let user;

// fetch(`http://localhost:3000/user/${userId}`)
//       .then((response) => response.json())
//       .then((result) => {
//          // debugger
//          console.log("result",result);
//         user = result.data 
         
//       })
    



//          console.log("user",user);
//Benjamin
// let user;
// fetch(`http://localhost:3000/user/${userId}`)
//       .then((response) => response.json())
//       .then((result) => {
//          // debugger
//          console.log("result",result);
//         user = result.data 
//         console.log("user1",user); 
       
//       })
//       console.log("user2",user);
    







/////////////////////////////////// 

// useEffect(() => {fetch(`http://localhost:3000/user/${userId}`)
//       .then((response) => {
//           console.log("response",{response});
//         if (response.ok) {return response.json();
//         }
//     })
//     .then((data) => {
//         console.log("data.results",data.result);
//     })
//     ; }, []);
     
//      console.log(userId
//         );

        ////////////////////////
     
    //   .then((result) => {
    //       debugger
    //       user = result.data
    //   })
 



//console.log("firstName",user.userInfos.firstName);

//////////////////////////////