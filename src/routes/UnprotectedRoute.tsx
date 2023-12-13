import { Navigate, Outlet } from 'react-router-dom'

import * as React from 'react'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = () => {
  const { token } = useAuth()

  return token ? <Navigate to='/dashboard' /> : <Outlet />
}

export default ProtectedRoute
