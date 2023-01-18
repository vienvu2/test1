import React, { useState } from 'react'
import { Button, ButtonLink, Col, Container, Flex, Row } from '../GlobalStyles'

import styled, { useTheme } from 'styled-components'
import Checkbox from '../components/Checkbox'
import { SubmitHandler, useForm } from 'react-hook-form'
import Input from '../components/Input'
import {
  IconArrowLeft,
  IconArrowLeftWhite,
  IconDelete,
  IconPersonal,
  IconPlus,
  IconGroup,
  IconChevDown,
  IconChevRight,
  IconUserPlus,
  IconInfo,
} from '../icons'
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
  background: ${({ theme }) => theme.white};
`

export const EnrollForm = ({ prefix = '' }: { prefix?: string }) => {
  const [isTeam, setTeam] = useState(true)
  return (
    <EnrollStyled>
      <h3 className="title">Enroll now</h3>
      <EnrollStyled.Tabs>
        <EnrollStyled.Tab active={!isTeam} onClick={() => setTeam(false)}>
          <IconPersonal /> I{"'"}m personal
        </EnrollStyled.Tab>
        <EnrollStyled.Tab active={isTeam} onClick={() => setTeam(true)}>
          <IconGroup />
          We are team
        </EnrollStyled.Tab>
      </EnrollStyled.Tabs>

      {isTeam ? (
        <FormTeam prefix={prefix} onChange={() => setTeam(false)} />
      ) : (
        <FormPersonal prefix={prefix} onChange={() => setTeam(true)} />
      )}
    </EnrollStyled>
  )
}

const FormTeam = ({ prefix }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    reValidateMode: 'onChange',
  })
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('data', data)
  }

  const [memberList, setMemberList] = useState<any[]>([])
  const theme: any = useTheme()

  const [showObj, setShow] = useState<any>({
    isSummary: true,
    isLeader: true,
    isMember0: true,
    isMember1: true,
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row
        style={{
          maxHeight: prefix ? 'calc(80vh - 250px)' : 'auto',
          overflow: 'auto',
        }}
      >
        <Col md={24} className="mb-1">
          <EnrollStyled.Header
            onClick={() =>
              setShow({ ...showObj, isSummary: !showObj.isSummary })
            }
          >
            {showObj.isSummary ? <IconChevDown /> : <IconChevRight />}
            GENERAL INFO
          </EnrollStyled.Header>
        </Col>
        {showObj.isSummary && (
          <>
            <Col md={12} className="mb-2">
              <Input
                label="Your team name"
                error={errors.name}
                name="name"
                register={register}
                watch={watch}
                required
              />
            </Col>
            <Col md={12} className="mb-2">
              <Input
                label="Your team email"
                error={errors.email}
                name="email"
                type="email"
                register={register}
                watch={watch}
                required
              />
            </Col>
            <Col md={12} className="mb-2">
              <Input
                label="Your team phone number"
                error={errors.phone}
                name="phone"
                register={register}
                watch={watch}
                required
              />
            </Col>

            <Col md={12} className="mb-2">
              <Input
                label="Your team is interested in"
                error={errors.interested}
                name="interested"
                register={register}
                watch={watch}
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
                watch={watch}
                label="Which event do you want to apply"
                error={errors.event}
                name="event"
                register={register}
                selectList={[
                  { value: 1, label: 'Event 1' },
                  { value: 2, label: 'Event 3' },
                  { value: 3, label: 'Event 4' },
                ]}
              />
            </Col>
          </>
        )}
        <Col md={24} className="mb-1">
          <EnrollStyled.Warn>
            <IconInfo />
            You need to upload the CV of each team. Maximum 2 member teams.
          </EnrollStyled.Warn>
        </Col>
        <Col md={24} className="mb-2">
          <EnrollStyled.Header
            onClick={() => setShow({ ...showObj, isLeader: !showObj.isLeader })}
          >
            {showObj.isLeader ? <IconChevDown /> : <IconChevRight />}
            Team leader
            <div style={{ flex: 1 }} />
            {memberList.length >= 2 && (
              <span className="blue">
                Reach the limit of 2/2 team members !
              </span>
            )}
          </EnrollStyled.Header>
        </Col>
        {showObj.isLeader && (
          <>
            <Col md={12} className="mb-1">
              <Input
                watch={watch}
                label="Leader’s name"
                error={errors.leaderName}
                name="leaderName"
                register={register}
                required
              />
            </Col>

            <Col md={12} className="mb-1">
              <Input
                watch={watch}
                label="Leader’s email"
                error={errors.leaderName}
                type="email"
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
                watch={watch}
                register={register}
                required
                type="file"
                prefix={prefix}
                onClear={() => {
                  setValue(`leaderCV`, '')
                }}
              />
            </Col>
          </>
        )}

        {memberList.map((member, idx) => {
          return (
            <>
              <Col md={24} className="mb-2">
                <EnrollStyled.Header
                  onClick={() =>
                    setShow({
                      ...showObj,
                      ['isMember' + idx]: !showObj['isMember' + idx],
                    })
                  }
                >
                  {showObj['isMember' + idx] ? (
                    <IconChevDown />
                  ) : (
                    <IconChevRight />
                  )}
                  Team member {idx + 1}
                  <div style={{ flex: 1 }} />
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setMemberList(memberList.filter((a, id) => id != idx))
                    }}
                  >
                    <span>Remove member</span>
                    <IconDelete />
                  </div>
                </EnrollStyled.Header>
              </Col>

              {showObj['isMember' + idx] && (
                <>
                  <Col md={12} className="mb-1">
                    <Input
                      label={`Member ${idx + 1}'s name`}
                      watch={watch}
                      error={errors['`memberName${idx}`']}
                      name={`memberName${idx}`}
                      register={register}
                      required
                    />
                  </Col>

                  <Col md={12} className="mb-1">
                    <Input
                      label={`Member ${idx + 1}'s email`}
                      error={errors['`memberEmail${idx}`']}
                      watch={watch}
                      type="email"
                      name={`memberEmail${idx}`}
                      register={register}
                      required
                    />
                  </Col>

                  <Col md={24} className="mb-1 ">
                    <Input
                      label="Upload CV"
                      error={errors[`memberCV${idx}`]}
                      name={`memberCV${idx}`}
                      watch={watch}
                      register={register}
                      required
                      type="file"
                      prefix={prefix}
                      onClear={() => {
                        setValue(`memberCV${idx}`, '')
                      }}
                    />
                  </Col>
                </>
              )}
            </>
          )
        })}
        {memberList.length < 2 && (
          <Col md={24} className="mb-2 text-center">
            <ButtonLink
              onClick={() => setMemberList([...memberList, {}])}
              className="bold"
              type="button"
              style={{ color: theme.mainDark2 }}
            >
              Add team member <IconUserPlus />
            </ButtonLink>
          </Col>
        )}

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
      </Row>
      <Row>
        <Col md={24}>
          <Button type="submit" block disabled={!watch('isAgree') || !isValid}>
            Apply now{' '}
            {watch('isAgree') && isValid ? (
              <IconArrowLeft />
            ) : (
              <IconArrowLeftWhite />
            )}
          </Button>
        </Col>
      </Row>
    </form>
  )
}

const FormPersonal = ({ prefix }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('data', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row gap={12}>
        <Col md={12} className="mb-2">
          <Input
            label="Your name"
            error={errors.name}
            name="name"
            watch={watch}
            register={register}
            required
          />
        </Col>
        <Col md={12} className="mb-2">
          <Input
            error={errors.email}
            label="Your email"
            name="email"
            type="email"
            watch={watch}
            register={register}
            required
          />
        </Col>
        <Col md={12} className="mb-2">
          <Input
            error={errors.phone}
            label="Your phone number"
            watch={watch}
            name="phone"
            register={register}
            required
          />
        </Col>

        <Col md={12} className="mb-2">
          <Input
            error={errors.job}
            label="You are a/an"
            name="job"
            watch={watch}
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
            label="Your school/company"
            name="org"
            register={register}
            watch={watch}
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
            label="Your major/profession"
            error={errors.position}
            watch={watch}
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
            label="Your team is interested in"
            name="interested"
            watch={watch}
            register={register}
            selectList={[
              { value: 1, label: 'interested 1' },
              { value: 2, label: 'interested 3' },
              { value: 3, label: 'interested 4' },
            ]}
          />
        </Col>

        <Col md={24} className="mb-2">
          <Input
            type="select"
            watch={watch}
            label="Which event do you want to apply"
            error={errors.event}
            name="event"
            register={register}
            selectList={[
              { value: 1, label: 'Event 1' },
              { value: 2, label: 'Event 3' },
              { value: 3, label: 'Event 4' },
            ]}
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
          <Button type="submit" block disabled={!watch('isAgree') || !isValid}>
            Apply now{' '}
            {watch('isAgree') && isValid ? (
              <IconArrowLeft />
            ) : (
              <IconArrowLeftWhite />
            )}
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default SectionEnroll

const TermLink = styled.span`
  a {
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.main};
    text-decoration: underline;
  }
`

const WrapStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`
const EnrollStyled: any = styled.div`
  h3.title {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
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

EnrollStyled.Header = styled.h5`
  display: flex;

  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.mainDark2};
  line-height: 20px;
  align-items: center;

  cursor: pointer;

  text-transform: uppercase;
  span {
    color: #eb4e4e;
    font-weight: 400;
    text-transform: initial;

    &.blue {
      color: ${({ theme }) => theme.main};
    }
  }
`

EnrollStyled.Warn = styled.div`
  background: ${({ theme }) => theme.blue10};
  padding: 10px;

  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.mainDark};
  display: flex;
  align-items: center;
  gap: 6px;
`

EnrollStyled.Tabs = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`
EnrollStyled.Tab = styled.div<{ active: boolean }>`
  padding: 0 0 12px 0;

  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: ${({ theme }) => theme.gray70};

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ active, theme }) =>
    active &&
    `

    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${theme.mainDark2};
    border-bottom: 1.5px solid ${theme.mainDark2};

  `}
`
