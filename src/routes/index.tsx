import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import ProtectedRoute from './ProtectedRoute'
import UnprotectedRoute from './UnprotectedRoute'

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnprotectedRoute />}>
          <Route path='/' element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        <Route path='*' element={<span> 404 - Not Found </span>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRoutes
