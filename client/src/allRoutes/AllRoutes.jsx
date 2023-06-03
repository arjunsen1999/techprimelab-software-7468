import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ProjectListing from '../pages/ProjectListing'
import CreateProject from '../pages/CreateProject'

export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/project-list' element={<ProjectListing />}/>
        <Route path='/create-project' element={<CreateProject  />}/>
    </Routes>
    </>
  )
}
