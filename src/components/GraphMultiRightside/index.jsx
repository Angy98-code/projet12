import styled from "styled-components"
import caloriesicon from "../../assets/caloriesicon.png"
import carbsicon from "../../assets/carbsicon.png"
import faticon from "../../assets/faticon.png"
import proteinicon from "../../assets/proteinicon.png"
//import { useParams } from 'react-router-dom'
//import PageError from "../PageError"

const data = [
    {
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
    
]


const dataCalories = data.map(element => {
return element.keyData.calorieCount

})


function separator(dataCalories) {
    var str = dataCalories.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}





const dataProteines = data.map(element => {
    return element.keyData.proteinCount
})

const dataGlucides = data.map(element => {
    return element.keyData.carbohydrateCount
})
 
const dataLipides = data.map(element => {
    return element.keyData.lipidCount
})


const ImgIconStyled = styled.img`
width : 60px;
height : 60px;
`
const DivInfoStyled = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
`
const TextStyled = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
`

function MultiInfo () {


    return (
<div>
     <div className="divcalories">
        <div className="diviconscss"><ImgIconStyled src={caloriesicon} alt=""></ImgIconStyled></div>
        
    <div className="divtextcss">
        <DivInfoStyled>{separator(dataCalories)}kCal</DivInfoStyled>
        <TextStyled>Calories</TextStyled>
    </div>
    </div>

<div className="divproteines">
    <div className="diviconscss"><ImgIconStyled src={proteinicon} alt=""></ImgIconStyled></div>
 
    <div className="divtextcss">
        <DivInfoStyled>{dataProteines}g</DivInfoStyled>
        <TextStyled>Proteines</TextStyled>
    </div>
</div>

<div className="divglucides">
    <div className="diviconscss"><ImgIconStyled src={carbsicon} alt=""></ImgIconStyled></div>
 
    <div className="divtextcss">
        <DivInfoStyled>{dataGlucides}g</DivInfoStyled>
        <TextStyled>Glucides</TextStyled>
    </div>
</div>

<div className="divlipides">
    <div className="diviconscss"><ImgIconStyled src={faticon} alt=""></ImgIconStyled></div>

    <div className="divtextcss">
        <DivInfoStyled>{dataLipides}g</DivInfoStyled>
        <TextStyled>Lipides</TextStyled>
    </div>
</div>

</div>)
}
export default MultiInfo