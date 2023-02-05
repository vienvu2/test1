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
  const [validateToken, setValidateToken] = useState('')
  const [step, setStep] = useState(1)
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
          {step === 1 && (
            <FormRegister
              onSuccess={(e: string) => {
                setValidateToken(e)
                setStep(2)
              }}
            />
          )}
          {step === 2 && <FormOTP onSuccess={() => setStep(3)} />}
          {step === 3 && <Success />}
        </div>
      </AuthStyled>
    </Wrap>
  )
}

const Success = () => {
  return <div>Success</div>
}

const FormOTP = ({ onSuccess }: { onSuccess: Function }) => {
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

  const onSubmit = (values: IRegisterForm) => {
    api
      .post('/auth/local/verify', { ...values, username: values.email })
      .then((res) => {
        onSuccess()
      })
      .catch((e) => {})
  }

  return (
    <div className="form">
      <h3>Verify your email</h3>
      <p className="mb-2">
        An OTP code has been sent to your email a*****@123.com Please check and
        enter the verification code.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <Input
            register={register}
            label="OTP"
            error={errors.email}
            name={'email'}
            type="otp"
            required
            watch={watch}
            placeholder={'OTP'}
          />
        </div>

        <p className="term mb-2">
          By creating an account, you agree to{' '}
          <Link href="/terms">Terms & Conditions</Link> of AI4VN
        </p>
        <div className="mb-3">
          <Button type="submit" block>
            Confirm
            <IconChevRight />
          </Button>
        </div>
        <p className="footer">
          Resend the OTP code after <Link href="/sign-in">01:29s</Link>
        </p>
      </form>
    </div>
  )
}

const FormRegister = ({ onSuccess }: { onSuccess: Function }) => {
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

  const onSubmit = (values: IRegisterForm) => {
    api
      .post('/auth/local/register', { ...values, username: values.email })
      .then((res) => {
        onSuccess(res.jwt)
        // router.replace('/register-otp?token=' + res.jwt)
      })
      .catch((e) => {
        console.log(e)
        // setError('email', 'Cỗ lôi xảy ra')
      })
  }

  const password = watch('password') || ''
  const repassword = watch('repassword') || ''

  const validations = [
    {
      text: 'Be a minimum of 8 characters',
      value: password ? password.length > 8 : '',
    },
    {
      text: 'Include at least one letter (a-z) and one number (0-9)',
      value: password
        ? /[0-9]/.test(password) && /[a-zA-Z]/.test(password)
        : '',
    },
  ]

  return (
    <div className="form">
      <h3>Create new account</h3>
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
        <div className="mb-2">
          <Input
            register={register}
            label="Password"
            error={errors.password}
            name={'password'}
            watch={watch}
            placeholder={'Password'}
            type="password"
            required
          />
        </div>
        <div className="mb-2">
          <Input
            register={register}
            label="Re-enter password"
            error={errors.repassword}
            name={'repassword'}
            type="password"
            watch={watch}
            placeholder={'Re-enter password'}
            required
          />
        </div>
        <div className="validations mb-2">
          {validations.map((a) => (
            <p
              key={a.text}
              style={{
                color: a.value === '' ? '' : a.value ? 'green' : 'red',
              }}
            >
              {a.value === false && <IconCancel size={24} />}
              {a.value === '' && <IconDot size={24} />}
              {a.value === true && <IconCheckCirce size={24} />}
              {a.text}
            </p>
          ))}
        </div>
        <div className="mb-2">
          <ReCAPTCHA
            sitekey="6LcrTg4cAAAAALDiDWau-BFeDFoUQoIoNSTLxZLz"
            size="normal"
            onChange={(value) => {
              console.log(value)
            }}
          />
        </div>
        <p className="term mb-2">
          By creating an account, you agree to{' '}
          <Link href="/terms">Terms & Conditions</Link> of AI4VN
        </p>
        <div className="mb-3">
          <Button type="submit" block>
            Register
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
