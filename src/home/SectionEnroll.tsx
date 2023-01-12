import React, { useState } from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import Checkbox from '../components/Checkbox'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../components/Input'
import { IconArrowLeft, IconArrowUp, IconPlus } from '../icons'
import Link from 'next/link'
const SectionEnroll = () => {
  return (
    <WrapStyled>
      <Container>
        <Row>
          <Col md={12}>
            <img src="/images/enroll.png" />
          </Col>
          <Col md={12}>
            <FormStyled>
              <EnrollForm />
            </FormStyled>
          </Col>
        </Row>
      </Container>
    </WrapStyled>
  )
}

interface IFormInput {
  name?: string
}

const FormStyled = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.blue10};
`

export const EnrollForm = ({ isColumn }: { isColumn?: boolean }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('data', data)
  }

  const [memberList, setMemberList] = useState<any[]>([])

  const renderTeam = () => (
    <Row>
      <Col md={isColumn ? 12 : 24}>
        <Row gap={12}>
          <Col md={24} className="mb-2">
            <Checkbox
              title="I want to start with a team"
              value={watch('isTeam')}
              onChange={(e: boolean) => setValue('isTeam', e)}
            />
          </Col>
          <Col md={12} className="mb-2">
            <Input label="Your team name *" {...register('name')} />
          </Col>
          <Col md={12} className="mb-2">
            <Input label="Your team email *" {...register('email')} />
          </Col>
          <Col md={12} className="mb-2">
            <Input label="Your team phone number *" {...register('phone')} />
          </Col>

          <Col md={12} className="mb-2">
            <Input
              label="What your team is interested"
              {...register('interested')}
            />
          </Col>
          <Col md={24} className="mb-2">
            <Input
              type="select"
              label="Which event do you want to apply"
              {...register('interested')}
            />
          </Col>
        </Row>
      </Col>
      <Col md={isColumn ? 12 : 24}>
        <Row gap={12}>
          <Col md={24} className="mb-1">
            <h4>Team leader</h4>
          </Col>

          <Col md={12} className="mb-2">
            <Input label="Leader’s name *" {...register('leaderName')} />
          </Col>

          <Col md={12} className="mb-2">
            <Input label="Leader’s email *" {...register('leaderEmail')} />
          </Col>

          <Col md={24} className="mb-2 text-center">
            <Button>
              Upload CV
              <IconArrowUp />
            </Button>
          </Col>
          <Col md={24} className="mb-2">
            <div className="hr" />
          </Col>

          {memberList.map((member, idx) => {
            return (
              <>
                <Col md={24} className="mb-1">
                  <h4>Team member {idx + 1}</h4>
                </Col>

                <Col md={12} className="mb-2">
                  <Input
                    label={`Member ${idx + 1}'s name *`}
                    {...register(`memberName${idx}`)}
                  />
                </Col>

                <Col md={12} className="mb-2">
                  <Input
                    label={`Member ${idx + 1}'s email *`}
                    {...register(`memberEmail${idx}`)}
                  />
                </Col>

                <Col md={24} className="mb-2 text-center">
                  <Button>
                    Upload CV
                    <IconArrowUp />
                  </Button>
                </Col>

                <Col md={24} className="mb-2">
                  <div className="hr" />
                </Col>
              </>
            )
          })}

          <Col md={24} className="mb-2 text-center">
            <Button onClick={() => setMemberList([...memberList, {}])}>
              Add team member <IconPlus />
            </Button>
          </Col>

          <Col md={24} className="mb-2">
            <Checkbox
              title={
                <TermLink>
                  I agree to the{' '}
                  <a target="_blank" href="/terms">
                    Terms & Conditions
                  </a>{' '}
                  of AI4VN
                </TermLink>
              }
              value={watch('isAgree')}
              onChange={(e: boolean) => setValue('isAgree', e)}
            />
          </Col>
          <Col md={24}>
            <Button type="submit" block>
              Apply now <IconArrowLeft />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )

  const renderPersonal = () => (
    <Row gap={12}>
      <Col md={24} className="mb-2">
        <Checkbox
          title="I want to start with a team"
          value={watch('isTeam')}
          onChange={(e: boolean) => setValue('isTeam', e)}
        />
      </Col>
      <Col md={12} className="mb-2">
        <Input label="Your name *" {...register('name', { required: true })} />
      </Col>
      <Col md={12} className="mb-2">
        <Input label="Your name *" {...register('name')} />
      </Col>
      <Col md={12} className="mb-2">
        <Input label="Your phone number *" {...register('phone')} />
      </Col>

      <Col md={12} className="mb-2">
        <Input label="You are a/an *" {...register('job')} type="select" />
      </Col>

      <Col md={12} className="mb-2">
        <Input
          label="Your school/company *"
          {...register('org')}
          type="select"
        />
      </Col>

      <Col md={12} className="mb-2">
        <Input
          label="Your major/profession *"
          type="select"
          {...register('position')}
        />
      </Col>

      <Col md={24} className="mb-2">
        <Input label="What you are interested" {...register('interested')} />
      </Col>

      <Col md={24} className="mb-2">
        <Checkbox
          title={
            <TermLink>
              I agree to the{' '}
              <a target="_blank" href="/terms">
                Terms & Conditions
              </a>{' '}
              of AI4VN
            </TermLink>
          }
          value={watch('isAgree')}
          onChange={(e: boolean) => setValue('isAgree', e)}
        />
      </Col>
      <Col md={24}>
        <Button type="submit" block>
          Apply now <IconArrowLeft />
        </Button>
      </Col>
    </Row>
  )

  return (
    <EnrollStyled>
      <h3> {watch('isTeam') ? 'Enroll with your team now' : 'Start now'}</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {!watch('isTeam') && renderPersonal()}
        {watch('isTeam') && renderTeam()}
      </form>
    </EnrollStyled>
  )
}

export default SectionEnroll

const TermLink = styled.span`
  a {
    font-size: 16px;
    line-height: 22px;

    font-weight: 500;
    color: ${({ theme }) => theme.mainDark2};
    text-decoration: underline;
  }
`

const WrapStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`
const EnrollStyled = styled.div`
  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.mainDark2};
  }
  h4 {
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.mainDark2};
    line-height: 30px;
  }
  .hr {
    width: 100%;
    margin: 0;
    background: ${({ theme }) => theme.mainDark};
    height: 1px;
    opacity: 0.5;
  }
`
