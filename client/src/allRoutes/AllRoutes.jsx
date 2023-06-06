import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ProjectListing from '../pages/ProjectListing'
import CreateProject from '../pages/CreateProject'
import MakePrivate from '../hoc/MakePrivate'

export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<MakePrivate><Dashboard /></MakePrivate>}/>
        <Route path='/project-list' element={<MakePrivate><ProjectListing /></MakePrivate>}/>
        <Route path='/create-project' element={<MakePrivate><CreateProject  /></MakePrivate>}/>
    </Routes>
    </>
  )
}
