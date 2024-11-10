import CommonForm from '@/components/Common/Form'
import { loginFormControls } from '@/Config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  useName : '' ,
  email : '',
  password: '',
}

function Register() {

  const [formData , setFormData] = useState(initialState)

  function onSubmit() {
    
  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Sign in to your account
        </h1>
        <p className="mt-2">
        Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default Register
