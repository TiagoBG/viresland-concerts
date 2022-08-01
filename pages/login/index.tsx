import LoginForm from '@/components/auth/Login'
import Head from 'next/head'
import React from 'react'

function LoginPage() {
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