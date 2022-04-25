import './App.css';
import Home from './page/Home';
import User from './page/User';
import { GlobalStyle } from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom'
import Error from "./page/Error"

function App () {

return(
<div>
    <GlobalStyle/>

   
 <Routes>
      <Route path="/user/:id" element={<User />} />
      <Route path="/" element={<Home/>} />
        
          <Route path="*" element={<Error />} />  
           
      </Routes>  


</div>
)

}
export default App


    // {/* <Home/>
    // <Welcome/>

    // <div className="allgraphcontainercss">
    // <div className='graph1'><Graph1BarChart/> </div>
    // <div className='multigraphright'><GraphMultiRightside/></div>
    // <div className='graph2'><Graph2LineChart/></div>
    // <div className='graph3'><Graph3RadarChart/></div>
    // <div className='graph4'><Graph4PieChart/></div>
    // </div> */}













// // import logo from './logo.svg';
// import './App.css';
// import { Routes, Route } from 'react-router-dom'
// import Home from './page/Home';

// function App() {
//   return (
//     <div className="App">
//     <Home/>
// <Routes>
//         {/* <Route path="*" element={<PageNotFound />} /> */}
//         <Route path="/" element={<Home />} />
//          <Route path="/error" element={<Home />} />
//         <Route path="/Profil" element={<Home />} />
//         <Route path="/Reglage" element={<Home />} />
//      <Route path="/Communaute" element={<Home />} />
//       </Routes> 



//     </div>
//   );
// }

// export default App;


// // {/* <Routes>
// //         {/* <Route path="*" element={<PageNotFound />} /> */}
// //         <Route path="/" element={<Home />} />
// //         {/* <Route path="/error" element={<Error />} />
// //         <Route path="/propos" element={<Propos />} />
// //         <Route path="/appartmentchoice/:id" element={<AppartmentChoice />} /> */}
// //       </Routes> */}