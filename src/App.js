// // // //  import React from 'react'
// // // //  import ReactPlayer from 'react-player';
// // // // import Header from './Components/Header'
// // // // import Body1 from './Components/Body1';
// // // // import Footer from './Components/Footer'
// // // //  const App = () => {
// // // //   return (
// // // //     <div>
// // // //       <Header/>
// // // //       <Body1/>
// // // //       <Footer/>
// // // //     </div>
// // // //   )
//  // }
//  //export default App;
//   import React from 'react'
//  import Navigation from './Components/Navigation'

//  const App = () => {
//    return (
//     <div>       
//         <Navigation/>
//      </div>
//    )
//  }

//  export default App



 import React from 'react'
 import Navigation from './Components/Navigation'
 import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
 import Home from './Components/Home'
 import Contact from './Components/Contact'
 import Todolist from './Components/Todolist'
 import Footer from './Components/Footer'
 import { BottomNavigation } from '@mui/material'
 const App =() =>{
   return(
     <div>
       <Router>
         <div>
           <Navigation/>
         </div>
         <Routes>
           <Route path='/Home' element={<Home/>}/>
         <Route path='/contact' element={<Contact />}/>
                <Route path='/todolist' element={<Todolist/>}/>
       </Routes>
       </Router>
     
     <div>
      <Footer/>
     </div>
     </div>
     
   )
 }

 export default App