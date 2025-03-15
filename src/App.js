// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Side1 from "./components/Sidebar1";
// import Side2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// import './global.css';



/* 
function App(){
  return(
    <div className="app">
      <Navbar/>
      <Main></Main>
      <div className="side">
        <Side1/>
        <Side2/>
      </div>
      <Footer/>
    </div>
  )

} */

// import App from 'App';
// function App(){
//   let username="Sathvik";
//   return(
//     <div>
//       <h1>ExcelR</h1>
//       <p>para</p>
//       {username}

//       {100*100}
//     </div>
//   );
// };


/* class App extends React.Component{
  render(){
    return(
      <div><h1>Class Component</h1></div>
    )
  }
}    */

/*  const App=()=>{
    return(
      <h1>Arrow Functional Component</h1>
    )
  }   */
  
// export default App;


/*import React, { Component } from 'react'
import CBCPropEx1 from './propexample/CBCPropEx1'

export default class App extends Component {
  render() {
    return (
      <div>App
        <CBCPropEx1 
          username="Sandhya"
          age={19}
          hobbies={["playing", "eating", "sleeping"]}
          address={{ city: "hyd", area: "" }}  
          isMarried={false}  
          sendFun={function(){alert("Hello...")}}  
        />
        
      </div>
    )
  }
}          */

/*  import React from 'react'
import FBCPropEx1 from './propexample/FBCPropEx1'
  
  function App() {
    return (
      <div>App
        <FBCPropEx1 
        username="sandhya"
        isLoggedIn={true}
        profiles={["insta","snapchat","facebook","youtube"]}
        />
      </div>
    )
  }
  export default App  */

/*  import React from "react";
  import PropsChildern from "./propexample/PropsChildern";
  import SubChildProps from "./propexample/SubChildProps";
  const App=()=>{
    return(
      <div>
        <PropsChildern username="Sandhya" company="Microsoft" Hobbies="Drawing">
          <h1>This data is passing as a props chihren to child component</h1>
          <SubChildProps/>
        </PropsChildern>
      </div>

    )
  }
  export default App         */
 /*
import React from 'react'
import CBCStateEx from './statesamples/CBCStateEx'
  
  const App = () => {
    return (
      <div>App
        <CBCStateEx/>
      </div>
    )
  }
  
  export default App     */

//   import React from 'react'
//   // import UseEffectEx from './hooksEx/UseEffectEx'
//   import RefEx from './hooksEx/RefEx'
// // import RefExAudio from './hooksEx/RefEXAudio'
  
//   const App = () => {
//     return (
//       <div>App
//         {/* <UseEffectEx/> */}
//         <RefEx/>
//         {/* <RefExAudio/> */}
//       </div>
//     )
//   }
//   export default App


// function App() {
//   return (
//       <div style={{ textAlign: 'center', padding: '20px' }}>
//           <h1>Welcome to My First React App</h1>
//           <p>This is a simple React application!</p>
//       </div>
//   );
// }

// export default App;



import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import DisasterDetails from './components/DiasterDetails';
import DisasterList from './components/DisasterList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <DisasterList />
        <DisasterDetails />
      </div>
      <Footer />
    </div>
  );
}

export default App;


