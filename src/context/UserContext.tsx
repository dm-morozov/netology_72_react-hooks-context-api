import { createContext, useContext } from 'react'

type User = string | null

interface UserContextType {
  user: User
  login: (name: string) => void
  logout: () => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within UserProvider')
  }
  return context
}
