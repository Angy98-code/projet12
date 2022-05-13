
import Graph1BarChart from "../Graph1BarChart"
import Graph2LineChart from "../Graph2LineChart"
import Graph3RadarChart from '../Graph3RadarChart'
import Graph4PieChart from '../Graph4PieChart'
import GraphMultiRightside from '../GraphMultiRightside'
import Welcome from '../Welcome';
import Navbar from "../Navbar"
import Aside from "../Aside"

// const data = http://localhost:3000/user/${userId}
// console.log(data);


function User (){ 
    return (
      <div>
        <Navbar />
        <Aside />
        <Welcome />

        <div className="allgraphcontainercss">
          <div className="graph1">
            <Graph1BarChart />{" "}
          </div>
          <div className="graph2">
            <Graph2LineChart />
          </div>
          <div className="graph3">
            <Graph3RadarChart />
          </div>
          <div className="graph4">
            <Graph4PieChart />
          </div>
          <div className="multigraphright">
            <GraphMultiRightside />
          </div>
        </div>
      </div>
    );
}
export default User