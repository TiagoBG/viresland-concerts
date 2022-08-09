import SignInForm from '@/components/auth/Signin'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function SignInPage() {

  const router = useRouter()

  useEffect(() => {
    if (sessionStorage.getItem('pumpkin') !== null) {
      router.replace('/')
    }
  }, [])

  return (
    <div>
      <Head>
        <title>VC Sign In</title>
      </Head>
      <SignInForm />
    </div>
  )
}

export default SignInPage
