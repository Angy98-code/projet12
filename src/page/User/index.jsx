
import Graph1BarChart from "../../components/Graph1BarChart"
import Graph2LineChart from "../../components/Graph2LineChart"
import Graph3RadarChart from '../../components/Graph3RadarChart'
import Graph4PieChart from '../../components/Graph4PieChart'
import GraphMultiRightside from '../../components/GraphMultiRightside'
import Welcome from '../../components/Welcome';
import Navbar from "../../components/Navbar"
import Aside from "../../components/Aside"

// const data = http://localhost:3000/user/${userId}
// console.log(data);


function User (){ 
    return (<div>
         <Navbar/>
    <Aside/>
    <Welcome/>

    <div className="allgraphcontainercss">
    <div className='graph1'><Graph1BarChart/> </div>
    <div className='multigraphright'><GraphMultiRightside/></div>
    <div className='graph2'><Graph2LineChart/></div>
    <div className='graph3'><Graph3RadarChart/></div>
    <div className='graph4'><Graph4PieChart/></div>
    </div> 
</div>

    )
}
export default User