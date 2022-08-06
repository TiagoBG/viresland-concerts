import Head from 'next/head'
import LoginForm from '@/components/auth/Login'
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
