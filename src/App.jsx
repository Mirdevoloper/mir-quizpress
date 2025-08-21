import React from 'react'
import Main from './component/Main'
import Head from './component/Head'
import Question from './component/Question'
import { Rounter } from './component/router'


const App = () => {

  return (
    <div>
 <Head />
 <Main />
 <Question />
 <Rounter></Rounter>
      
    </div>
  )
}

export default App