import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../src/components/Input'
import { useForm } from 'react-hook-form'
import Wrap from '../src/layouts/Wrap'
import Header from '../src/layouts/Header'
import { AuthStyled, Button } from '../src/GlobalStyles'
import {
  IconCancel,
  IconCheckCirce,
  IconChevRight,
  IconDot,
} from '../src/icons'
import Link from 'next/link'
import { api } from '../src/api'
import { useRouter } from 'next/router'

import ReCAPTCHA from 'react-google-recaptcha'

interface IRegisterForm {
  email: string
  password: string
  repassword: string
}
export default function RegisterPage() {
  const [step, setStep] = useState()
  return (
    <Wrap>
      <AuthStyled>
        <div className="left">
          <Link href="/">
            AI4VN
            <img src="/images/logo.svg" />
          </Link>
        </div>
        <div className="right">
          <Form />
        </div>
      </AuthStyled>
    </Wrap>
  )
}

const Form = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRegisterForm>({
    mode: 'onChange',
  })

  const router = useRouter()

  const onSubmit = (values: IRegisterForm) => {}

  return (
    <div className="form">
      <h3>Reset password</h3>
      <p className="mb-2">Enter your email address to receive an OTP code.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <Input
            register={register}
            label="Email address"
            error={errors.email}
            name={'email'}
            type="email"
            required
            watch={watch}
            placeholder={'Email address'}
          />
        </div>

        <div className="mb-3">
          <Button type="submit" block>
            Send code
            <IconChevRight />
          </Button>
        </div>
        <p className="footer">
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </p>
      </form>
    </div>
  )
}
