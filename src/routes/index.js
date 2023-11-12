import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import HomePage from '../app/home/homepage'

export default function Navigator() {
  return (
    <>
     <Routes>
        <Route path='' element={<HomePage/>}/>
     </Routes>
    </>
  )
}
