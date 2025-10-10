import { Navigate } from 'react-router-dom'
import { useSession } from '../auth'

export function RequireLogin({children}){
  const { isLogged } = useSession()
  if(!isLogged) return <Navigate to='/' replace />
  return children
}

export function RequireAdmin({children}){
  const { isAdmin } = useSession()
  if(!isAdmin) return <Navigate to='/' replace />
  return children
}