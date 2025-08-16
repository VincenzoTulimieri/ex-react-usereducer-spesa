import { useState } from 'react'
import ListPruduct from './componets/ListPruduct'

function App() {


  return (
    <>
      <div className='container'>
        <h1>Lista della Spesa</h1>
          <ListPruduct />
      </div>
    </>
  )
}

export default App
