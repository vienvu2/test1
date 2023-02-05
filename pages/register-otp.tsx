import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../src/components/Input'
import { useForm } from 'react-hook-form'
import Wrap from '../src/layouts/Wrap'
import Header from '../src/layouts/Header'
import { AuthStyled, Button } from '../src/GlobalStyles'
import { IconChevRight } from '../src/icons'
import Link from 'next/link'
import { api } from '../src/api'

interface IRegisterForm {
  email: string
  password: string
  repassword: string
}
export default function RegisterOTPPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    mode: 'onChange',
  })

  const onSubmit = (values: IRegisterForm) => {
    console.log(values)

    api
      .post('/auth/local/register', { ...values, username: values.email })
      .then((res) => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
  }
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
          <div className="form">
            <h3>Verify your email</h3>
            <p className="mb-2">
              An OTP code has been sent to your email a*****@123.com Please
              check and enter the verification code.
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
        </div>
      </AuthStyled>
    </Wrap>
  )
}
