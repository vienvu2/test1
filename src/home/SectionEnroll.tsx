import React, { useState } from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import Checkbox from '../components/CheckBox'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../components/Input'
import { IconArrowLeft } from '../icons'
const SectionEnroll = () => {
  return (
    <WrapStyled>
      <Container>
        <Row>
          <Col md={12}>
            <img src="/images/enroll.png" />
          </Col>
          <Col md={12}>
            <EnrollForm />
          </Col>
        </Row>
      </Container>
    </WrapStyled>
  )
}

interface IFormInput {
  name?: string
}

const EnrollForm = () => {
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

  return (
    <EnrollStyled>
      <h3> {watch('isTeam') ? 'Enroll with your team now' : 'Start now'}</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Row gap={12}>
          <Col md={24} className="mb-2">
            <Checkbox
              title="I want to start with a team"
              value={watch('isTeam')}
              onChange={(e: boolean) => setValue('isTeam', e)}
            />
          </Col>
          {watch('phone')}
          {!watch('isTeam') && (
            <>
              <Col md={12} className="mb-2">
                <Input
                  label="Your name *"
                  {...register('name', { required: true })}
                />
              </Col>
              <Col md={12} className="mb-2">
                <Input label="Your name *" {...register('name')} />
              </Col>
              <Col md={12} className="mb-2">
                <Input label="Your phone number *" {...register('phone')} />
              </Col>

              <Col md={12} className="mb-2">
                <Input label="You are a/an *" {...register('job')} />
              </Col>

              <Col md={12} className="mb-2">
                <Input label="Your school/company *" {...register('org')} />
              </Col>

              <Col md={12} className="mb-2">
                <Input
                  label="Your major/profession *"
                  {...register('position')}
                />
              </Col>

              <Col md={24} className="mb-2">
                <Input
                  label="What you are interested"
                  {...register('interested')}
                />
              </Col>

              <Col md={24} className="mb-2">
                <Checkbox
                  title={'I agree to the Terms & Conditions of AI4VN'}
                  value={watch('isAgree')}
                  onChange={(e: boolean) => setValue('isAgree', e)}
                />
              </Col>
            </>
          )}

          {watch('isTeam') && (
            <>
              <Col md={12} className="mb-2">
                <Input label="Your team name *" {...register('name')} />
              </Col>
              <Col md={12} className="mb-2">
                <Input label="Your team email *" {...register('name')} />
              </Col>
              <Col md={12} className="mb-2">
                <Input label="Your team phone number *" {...register('name')} />
              </Col>

              <Col md={12} className="mb-2">
                <Input
                  label="What your team is interested"
                  {...register('name')}
                />
              </Col>
              <Col md={24} className="mb-2">
                <h4>Team leader</h4>
              </Col>

              <Col md={12} className="mb-2">
                <Input label="Leader’s name *" {...register('name')} />
              </Col>

              <Col md={12} className="mb-2">
                <Input label="Leader’s email *" {...register('name')} />
              </Col>

              <Col md={24} className="mb-2 text-center">
                <Button>Upload CV</Button>
              </Col>
              <Col md={24} className="mb-2">
                <div className="hr" />
              </Col>

              {memberList.map((member, idx) => {
                return (
                  <>
                    <Col md={24} className="mb-2">
                      <h4>Team member {idx + 1}</h4>
                    </Col>

                    <Col md={12} className="mb-2">
                      <Input
                        label={`Member ${idx + 1}'s name *`}
                        {...register('name')}
                      />
                    </Col>

                    <Col md={12} className="mb-2">
                      <Input
                        label={`Member ${idx + 1}'s email *`}
                        {...register('name')}
                      />
                    </Col>

                    <Col md={24} className="mb-2 text-center">
                      <Button>Upload CV</Button>
                    </Col>

                    <Col md={24} className="mb-2">
                      <div className="hr" />
                    </Col>
                  </>
                )
              })}

              <Col md={24} className="mb-2 text-center">
                <Button onClick={() => setMemberList([...memberList, {}])}>
                  Add team member +{' '}
                </Button>
              </Col>

              <Col md={24} className="mb-2">
                <Checkbox
                  title={'I agree to the Terms & Conditions of AI4VN'}
                  value={watch('isAgree')}
                  onChange={(e: boolean) => setValue('isAgree', e)}
                />
              </Col>
            </>
          )}
          <Col md={24}>
            <Button type="submit" block>
              Apply now <IconArrowLeft />
            </Button>
          </Col>
        </Row>
      </form>
    </EnrollStyled>
  )
}

export default SectionEnroll

const WrapStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`
const EnrollStyled = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.blue20};

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
