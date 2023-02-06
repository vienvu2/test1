import React, { useState } from 'react'
import Input from '../src/components/Input'
import { useForm } from 'react-hook-form'
import Wrap from '../src/layouts/Wrap'
import { AuthStyled, Button } from '../src/GlobalStyles'
import { IconChevRight } from '../src/icons'
import Link from 'next/link'
import { api } from '../src/api'

interface IRegisterForm {
  email: string
  password: string
  repassword: string
}
export default function RegisterPage() {
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
            <FormEmail
              onSuccess={() => {
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

const FormEmail = ({ onSuccess }: { onSuccess: Function }) => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRegisterForm>({
    mode: 'onChange',
  })

  const onSubmit = (values: IRegisterForm) => {
    api
      .post('/auth/forgot-password', values)
      .then((res) => {
        onSuccess()
      })
      .catch((e) => {})
  }

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
