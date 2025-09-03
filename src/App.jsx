import React from 'react'
import Main from './component/Main'
import Question from './component/Question'
import Head from './component/Head'
import Selectquestion from './component/Selectquestion'
import Allquestion from './component/Allquestion'
import Menubar from './component/Menubar'
import { Outlet } from 'react-router'



const App = () => {


  return (
    <>

      {/* <Head /> */}
      {/* <Main />
      <Question />
      <Selectquestion />
      <Allquestion /> */}
      
       <Menubar />

      <Outlet />
     


    </>
  )
}

export default App