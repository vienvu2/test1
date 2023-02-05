import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../src/components/Input'
import { useForm } from 'react-hook-form'
import Wrap from '../src/layouts/Wrap'
import Header from '../src/layouts/Header'
import { AuthStyled, Button, Flex, Row } from '../src/GlobalStyles'
import { IconChevRight } from '../src/icons'
import Link from 'next/link'
import { api } from '../src/api'
import { useRouter } from 'next/router'
import Checkbox from '../src/components/Checkbox'
import ReCAPTCHA from 'react-google-recaptcha'

interface ILoginForm {
  identifier: string
  password: string
  isRemember: boolean
}

export default function LoginPage() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: 'onChange',
  })

  const router = useRouter()

  const onSubmit = (values: ILoginForm) => {
    api
      .post('/auth/local', values)
      .then((res) => {
        if (values.isRemember) {
          localStorage.setItem('TOKEN', res.jwt)
        }
        router.replace('/')
      })
      .catch((e) => {
        setError('identifier', {
          type: 'pattern',
          message: e.response.data.error?.message,
        })
        setError('password', {
          type: 'pattern',
          message: e.response.data.error?.message,
        })
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

              <div className="mb-2">
                <Flex>
                  <Checkbox
                    onChange={() => {
                      setValue('isRemember', !watch('isRemember'))
                    }}
                    value={watch('isRemember')}
                    title="Remember me"
                  />
                  <div style={{ flex: 1 }} />
                  <Link href="/forgot-password">Forgot password?</Link>
                </Flex>
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
