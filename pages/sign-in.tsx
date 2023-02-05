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

interface ILoginForm {
  identifier: string
  password: string
}

export default function LoginPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: 'onChange',
  })

  const router = useRouter()

  const onSubmit = (values: ILoginForm) => {
    api
      .post('/auth/local', values)
      .then((res) => {
        localStorage.setItem('TOKEN', res.jwt)
        router.replace('/')
      })
      .catch((e) => {
        console.log(e)
        // handel error
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
            <h3>Sign in</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                <Input
                  register={register}
                  label="Email address"
                  error={errors.identifier}
                  name={'identifier'}
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
                  type="password"
                  placeholder={'Password'}
                  required
                />
              </div>
              <div className="mb-3">
                <Button type="submit" block>
                  Sign in
                  <IconChevRight />
                </Button>
              </div>
              <p className="footer">
                Not registered yet?{' '}
                <Link href="/register">Create new account</Link>
              </p>
            </form>
          </div>
        </div>
      </AuthStyled>
    </Wrap>
  )
}
