import { getCurrentUser } from './mockApi'

export function useSession(){
  const user = getCurrentUser()
  return {
    user,
    isLogged: !!user,
    isAdmin: user?.role === 'admin',
  }
}
