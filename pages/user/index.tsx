import AuthContext from 'context/userAuth'
import { useContext } from 'react'
import { useRouter } from 'next/router'

function User() {
  const { user } = useContext(AuthContext)
  const router = useRouter()

  if (user === null) {
    router.replace('/login')
  }

  return (
    <div className="text-white">User PROFILE</div>
  )
}

export default User
