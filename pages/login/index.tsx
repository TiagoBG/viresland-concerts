import Head from 'next/head'
import LoginForm from '@/components/auth/Login'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function LoginPage() {

  const router = useRouter()

  useEffect(() => {
    if (sessionStorage.getItem('pumpkin') !== null) {
      router.replace('/')
    }
  }, [])

  return (
    <div>
      <Head>
        <title>VC Login</title>
      </Head>
      <LoginForm />
    </div>
  )
}

export default LoginPage
