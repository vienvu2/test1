import React, { useState } from 'react'
import { Button, ButtonLink, Col, Container, Row } from '../GlobalStyles'

import styled, { useTheme } from 'styled-components'
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
  const theme: any = useTheme()

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
            <Input
              label="Your team name *"
              error={errors.name}
              name="name"
              register={register}
              required
            />
          </Col>
          <Col md={12} className="mb-2">
            <Input
              label="Your team email *"
              error={errors.email}
              name="email"
              register={register}
              required
            />
          </Col>
          <Col md={12} className="mb-2">
            <Input
              label="Your team phone number *"
              error={errors.phone}
              name="phone"
              register={register}
              required
            />
          </Col>

          <Col md={12} className="mb-2">
            <Input
              label="What your team is interested"
              error={errors.interested}
              name="interested"
              register={register}
              required
              type="select"
              selectList={[
                { value: 1, label: 'Interested 1' },
                { value: 2, label: 'Interested 3' },
                { value: 3, label: 'Interested 4' },
              ]}
            />
          </Col>
          <Col md={24} className="mb-2">
            <Input
              type="select"
              label="Which event do you want to apply"
              error={errors.event}
              name="event"
              register={register}
              required
              selectList={[
                { value: 1, label: 'Event 1' },
                { value: 2, label: 'Event 3' },
                { value: 3, label: 'Event 4' },
              ]}
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
            <Input
              label="Leader’s name *"
              error={errors.leaderName}
              name="leaderName"
              register={register}
              required
            />
          </Col>

          <Col md={12} className="mb-2">
            <Input
              label="Leader’s email *"
              error={errors.leaderName}
              name="leaderEmail"
              register={register}
              required
            />
          </Col>

          <Col md={24} className="mb-2 text-center">
            <Input
              label="Upload CV"
              error={errors.leaderCV}
              name="leaderCV"
              register={register}
              required
              type="file"
              value={watch('leaderCV')}
            />
            {/*
             */}
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
                    error={errors['`memberName${idx}`']}
                    name={`memberName${idx}`}
                    register={register}
                    required
                  />
                </Col>

                <Col md={12} className="mb-2">
                  <Input
                    label={`Member ${idx + 1}'s email *`}
                    error={errors['`memberEmail${idx}`']}
                    name={`memberEmail${idx}`}
                    register={register}
                    required
                  />
                </Col>

                <Col md={24} className="mb-2 text-center">
                  <ButtonLink
                    type="button"
                    className="bold"
                    style={{ color: theme.mainDark2 }}
                  >
                    Upload CV
                    <IconArrowUp />
                  </ButtonLink>
                </Col>

                <Col md={24} className="mb-2">
                  <div className="hr" />
                </Col>
              </>
            )
          })}

          <Col md={24} className="mb-2 text-center">
            <ButtonLink
              onClick={() => setMemberList([...memberList, {}])}
              className="bold"
              type="button"
              style={{ color: theme.mainDark2 }}
            >
              Add team member <IconPlus />
            </ButtonLink>
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
        <Input
          label="Your name *"
          error={errors.name}
          name="name"
          register={register}
          required
        />
      </Col>
      <Col md={12} className="mb-2">
        <Input
          error={errors.email}
          label="Your email *"
          name="email"
          register={register}
          required
        />
      </Col>
      <Col md={12} className="mb-2">
        <Input
          error={errors.phone}
          label="Your phone number *"
          name="phone"
          register={register}
          required
        />
      </Col>

      <Col md={12} className="mb-2">
        <Input
          error={errors.job}
          label="You are a/an *"
          name="job"
          register={register}
          required
          type="select"
          selectList={[
            { value: '1', label: 'Học sinh' },
            { value: '2', label: 'Sinh viên' },
            { value: '3', label: 'Đi làm' },
          ]}
        />
      </Col>

      <Col md={12} className="mb-2">
        <Input
          error={errors.org}
          label="Your school/company *"
          name="org"
          register={register}
          required
          type="select"
          selectList={[
            { value: '1', label: 'Bách khoa' },
            { value: '2', label: 'ĐH KHTN' },
            { value: '3', label: 'FPT' },
          ]}
        />
      </Col>

      <Col md={12} className="mb-2">
        <Input
          label="Your major/profession *"
          error={errors.position}
          type="select"
          name="position"
          register={register}
          selectList={[
            { value: '1', label: 'Học sinh' },
            { value: '2', label: 'Thạc sĩ' },
            { value: '3', label: 'Tiến sĩ' },
          ]}
          required
        />
      </Col>

      <Col md={24} className="mb-2">
        <Input
          error={errors.interested}
          label="What you are interested"
          name="interested"
          register={register}
          required
        />
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
