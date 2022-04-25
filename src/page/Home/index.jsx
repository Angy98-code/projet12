import Navbar from "../../components/Navbar"
import Aside from "../../components/Aside"
import Ids from "../../components/Ids"
import Toggle from "../../components/Toggle"
//import BarChart from "../../components/BarChart"
//import { Routes, Route, Link } from 'react-router-dom'

// const data = http://localhost:3000/user/${userId}
// console.log(data);
//import Graph2 from "../components/Graph2"

function Home (){ 
    return (<div>
    <Navbar/>
    <Aside/>
    <Ids/>
    <Toggle/>
   
</div>

    )
}
export default Home