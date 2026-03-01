import { Suspense,  } from 'react'

import './App.css'
import Bottles from './components/Bottles/Bottles'

const bottlesPromise=fetch('./Bottle.json')
.then(res=>res.json())


function App() {
 

  return (
    <>
      
      <h1>Buy Water Bottle</h1>
      <Suspense fallback={ <h2>Bottles are loading...</h2>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      
     
    </>
  )
}

export default App
