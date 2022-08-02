import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext({
  user: null,
  authReady: false
})

export function AuthContextProvider({ children }) {
  const [
    user,
    setUser
  ] = useState(null)

  useEffect(() => {
    console.log('EFFECT IN CXT')
  }, [])

  const login = (userLogged, token) => {
    console.log(userLogged, token)
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
