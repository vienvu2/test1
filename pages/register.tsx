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
import { useRouter } from 'next/router'

interface IRegisterForm {
  email: string
  password: string
  repassword: string
}
export default function RegisterPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    mode: 'onChange',
  })

  const router = useRouter()

  const onSubmit = (values: IRegisterForm) => {
    router.replace(
      '/register-otp?token=' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjc1NTczNTMzLCJleHAiOjE2NzgxNjU1MzN9.Kp3eDIPud7CIidmPtfV3Eb8yPE3gRvTwvnCD2HsR48Q',
    )
    // api
    //   .post('/auth/local/register', { ...values, username: values.email })
    //   .then((res) => {
    //     router.replace('/register-otp?token=' + res.jwt)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //     // handel error
    //   })
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
                  label="Re-enter password *"
                  error={errors.repassword}
                  name={'repassword'}
                  type="password"
                  watch={watch}
                  placeholder={'Re-enter password *'}
                  required
                />
              </div>

              <div className="validations mb-2">
                <p>Be a minimum of 8 characters</p>
                <p>Include at least one letter (a-z) and one number (0-9)</p>
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
        </div>
      </AuthStyled>
    </Wrap>
  )
}
