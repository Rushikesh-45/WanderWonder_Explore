import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TouristTable from './TouristTable'
import AgencyTable from './AgencyTable'

function A2() {
  return (
    <>
      <Routes>
        <Route path='/admintourist' element={<TouristTable/>}></Route>
        <Route path='/adminagencies' element={<AgencyTable/>}></Route>
      </Routes>
    </>
  )
}

export default A2
