import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  token: null,
  user: null
})

export function AuthContextProvider({ children }) {
  const [
    user,
    setUser
  ] = useState(null)

  useEffect(() => {
    console.log('EFFECT IN CXT', user)
  }, [user])

  const login = (userLogged) => {
    setUser(userLogged)
  }

  const logout = () => {
    setUser(null)
  }

  const context = { user,
    login, logout }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
