import SignInForm from '@/components/auth/Signin'
import Head from 'next/head'

function SignInPage() {
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
