/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import {
  AvatarGroup,
  Button,
  ButtonIcon,
  Col,
  Container,
  Flex,
  Row,
  Tag,
} from '../GlobalStyles'

import styled, { useTheme } from 'styled-components'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'
import {
  IconArrowLeft,
  IconArrowLeftWhite,
  IconCalendar,
  IconLink,
  IconLinkWhite,
  IconLogoTwitter,
  IconLogoTwitterWhite,
} from '../icons'
import Modal from '../components/Modal'
import { EnrollForm, ModalSuccess } from './SectionEnroll'
const TextAnimation = () => {
  const [text] = useTextAnimation(['hackathons'])
  return (
    <h2>
      Outstanding <span className={roboto.className}>{text}</span>
    </h2>
  )
}

const SectionEvent = () => {
  const [tabActive, setTabActive] = useState('Hottest')
  const [detail, showDetail] = useState(false)

  const [step, setStep] = useState(1)
  const [isSuccess, setSuccess] = useState(false)

  return (
    <>
      <WrapStyled id="events">
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <WrapStyledTop>
            <p>Events</p>
            <TextAnimation />
          </WrapStyledTop>
          <ContentStyled>
            <ContentStyled.Header>
              {['Hottest', 'Opening', 'Upcoming', 'Past'].map((a) => (
                <ContentStyled.HeaderItem
                  key={a}
                  active={a === tabActive}
                  onClick={() => setTabActive(a)}
                >
                  {a}
                </ContentStyled.HeaderItem>
              ))}
              <div style={{ flex: 1 }} />
              <ContentStyled.MoreBtn href="/events" target="_blank">
                <img className="circle" src="/images/events/more.svg" />
                <IconArrowLeft />
              </ContentStyled.MoreBtn>
            </ContentStyled.Header>
            {tabActive === 'Hottest' &&
              ['2022', '2023'].map((a, idx) => (
                <HackathonStyled key={a} reverse={idx % 2 === 1}>
                  <HackathonStyled.Intro
                    isYellow={idx % 2 === 1 ? '#F2B10A' : ''}
                  >
                    <Row align="flex-end">
                      <Col md={12}>
                        <p>Introducing</p>
                        <h3>Hackatron {a}</h3>
                        <p>
                          The best way to learn is to get your hands dirty!
                          Build on riveting problem statements, while following
                          curated coursework and brainstorming exercises with
                          industry experts who know that what it’s like to be
                          new and make mistakes.
                        </p>
                      </Col>
                      <Col md={12}>
                        <img src="/images/events/coding.svg" />
                      </Col>
                    </Row>
                  </HackathonStyled.Intro>
                  <HackathonItem
                    onApply={() => showDetail(true)}
                    tabActive={tabActive}
                  />
                </HackathonStyled>
              ))}

            {tabActive !== 'Hottest' && (
              <Row gap={12}>
                {[1, 2, 3, 4, 5, 6].map((a, idx) => (
                  <Col md={12} key={a}>
                    <HackathonItemLong
                      onApply={() => showDetail(true)}
                      tabActive={tabActive}
                    />
                  </Col>
                ))}
              </Row>
            )}
          </ContentStyled>
        </Container>
      </WrapStyled>
      <Modal
        size={step == 1 ? 'lg' : 'sm'}
        show={detail}
        onClose={() => showDetail(false)}
      >
        <HackathonPopup
          step={step}
          setStep={setStep}
          onClose={() => showDetail(false)}
          onSuccess={() => {
            setSuccess(true)
            showDetail(false)
          }}
        />
      </Modal>
      <ModalSuccess setSuccess={setSuccess} isSuccess={isSuccess} />
    </>
  )
}

export default SectionEvent

const HackathonPopup = ({
  onClose,
  step,
  setStep,
  onSuccess,
}: {
  onClose: Function
  onSuccess: Function
  setStep: Function
  step: number
}) => {
  return (
    <PopupStyled>
      <PopupStyled.Header>
        <img
          src="/images/close.svg"
          onClick={() => {
            onClose()
          }}
          alt=""
        />
      </PopupStyled.Header>

      {step == 1 && (
        <Row align="stretch">
          <Col md={12}>
            <PopupStyled.Image>
              <img src="/images/events/coding.svg" />
            </PopupStyled.Image>
          </Col>
          <Col md={12}>
            <Flex className="mb-2">
              <div style={{ flex: 1 }}>
                <h3>Hackatron 2023</h3>
                <p>
                  Join the next wave of Hackatron where Web3 devs build to
                  learn.
                </p>
              </div>
              <ButtonIcon dark>
                <IconLinkWhite />
              </ButtonIcon>

              <ButtonIcon dark>
                <IconLogoTwitterWhite />
              </ButtonIcon>
            </Flex>

            <Row className="mb-1">
              <Col md={12}>
                <PopupStyled.Date className="mb-1">
                  <IconCalendar />
                  <p>Jan 1 - Feb 1, 2023</p>
                </PopupStyled.Date>
              </Col>
              <Col md={12}>
                <AvatarGroup>
                  <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
                  <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
                  <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />{' '}
                  <strong className="text-dark2">+100 participating</strong>
                </AvatarGroup>
              </Col>
            </Row>
            <h4>Description</h4>
            <p className="mb-2">
              The best way to learn is to get your hands dirty! Build on
              riveting problem statements, while following curated coursework
              and brainstorming exercises with industry experts who know that
              what it’s like to be new and make mistakes.
            </p>
            <h4>About topic</h4>
            <p className="mb-2">
              The best way to learn is to get your hands dirty! Build on
              riveting problem statements, while following curated coursework
              and brainstorming exercises with industry experts who know that
              what it’s like to be new and make mistakes.
            </p>
            <h4>Prizes</h4>

            <PrizesStyled>
              <div className="img">
                <img src="/images/medal-gold.svg" />
              </div>
              <p className="name">Gold Medal</p>
              <p className="price">15.000.000 VND</p>
            </PrizesStyled>
            <PrizesStyled>
              <div className="img">
                <img src="/images/medal-sliver.svg" />
              </div>
              <p className="name">Gold sliver</p>
              <p className="price">15.000.000 VND</p>
            </PrizesStyled>
            <PrizesStyled>
              <div className="img">
                <img src="/images/medal-bronze.svg" />
              </div>
              <p className="name">Gold Bronze</p>
              <p className="price">15.000.000 VND</p>
            </PrizesStyled>

            <Button
              block
              onClick={() => setStep(2)}
              color="white"
              background="mainDark2"
            >
              Apply this hackathon
              <IconArrowLeftWhite />
            </Button>
          </Col>
        </Row>
      )}

      {step === 2 && <EnrollForm prefix="popup_" onSuccess={onSuccess} />}
    </PopupStyled>
  )
}

const HackathonItem = ({
  onApply,
  tabActive,
}: {
  onApply: Function
  tabActive: string
}) => {
  return (
    <HackathonStyled.Detail>
      <h3>Hackatron 2023</h3>
      <p className="desc mb-1">
        Join the next wave of Hackatron where Web3 devs build to learn.
      </p>

      <Flex className="mb-2">
        <ButtonIcon>
          <IconLink />
        </ButtonIcon>

        <ButtonIcon>
          <IconLogoTwitter />
        </ButtonIcon>
      </Flex>

      <Flex className="mb-2">
        <AvatarGroup>
          <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
          <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
          <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
          <p>+100 participating</p>
        </AvatarGroup>
      </Flex>

      <Flex className="mb-4">
        <Tag>Blockchain</Tag>
        <Tag>AI/ML</Tag>
        <Tag>Healthtech</Tag>
      </Flex>
      <HackathonStyled.Date className="mb-1">
        <IconCalendar />
        <p> {tabActive == 'Past' ? 'End' : 'Jan 1 - Feb 1, 2023'} </p>
      </HackathonStyled.Date>
      <Button
        block
        onClick={() => onApply()}
        background="mainDark2"
        color="white"
      >
        Apply now
        <IconArrowLeftWhite />
      </Button>
    </HackathonStyled.Detail>
  )
}

const HackathonItemLong = ({
  onApply,
  tabActive,
}: {
  onApply: Function
  tabActive: string
}) => {
  return (
    <HackathonStyled.Detail long className="mb-2">
      <Flex className="mb-2" align="center">
        <h3 style={{ flex: 1 }}>Hackatron 2023</h3>
        <ButtonIcon>
          <IconLink />
        </ButtonIcon>

        <ButtonIcon>
          <IconLogoTwitter />
        </ButtonIcon>
      </Flex>

      <p className="desc mb-1">
        Join the next wave of Hackatron where Web3 devs build to learn.
      </p>
      {tabActive !== 'Upcoming' ? (
        <Flex className="mb-2">
          <AvatarGroup>
            <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
            <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
            <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
            <p>+100 participating</p>
          </AvatarGroup>
        </Flex>
      ) : (
        <div className="h-4" />
      )}

      <Flex className="mb-2">
        <Tag>Blockchain</Tag>
        <Tag>AI/ML</Tag>
        <Tag>Healthtech</Tag>
      </Flex>
      <Row gap={12}>
        <Col md={12}>
          <HackathonStyled.Date className="mb-1">
            <IconCalendar />
            <p> {tabActive == 'Past' ? 'End' : 'Jan 1 - Feb 1, 2023'} </p>
          </HackathonStyled.Date>
        </Col>
        <Col md={12}>
          <Button
            block
            onClick={() => onApply()}
            background="mainDark2"
            color="white"
          >
            Apply now
            <IconArrowLeftWhite />
          </Button>
        </Col>
      </Row>
    </HackathonStyled.Detail>
  )
}

const PrizesStyled = styled.div`
  display: flex;
  margin-bottom: 16px;
  gap: 16px;
  align-items: center;
  .img {
    width: 50px;
    text-align: center;
  }
  .price,
  .name {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: ${({ theme }) => theme.black};
  }
  .name {
    flex: 1;
  }
`

const PopupStyled: any = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.white};
  max-height: 90vh;
  overflow: auto;

  h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: ${({ theme }) => theme.mainDark2};
    margin-bottom: 10px;
  }
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: ${({ theme }) => theme.mainDark2};
    margin-bottom: 8px;
  }
`

PopupStyled.Header = styled.div`
  text-align: right;
  margin-bottom: 12px;
  img {
    cursor: pointer;
  }
`
PopupStyled.Date = styled.div`
  display: flex;
  gap: 8px;

  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.mainDark2};
  line-height: 22px;
  align-items: center;
`

PopupStyled.Image = styled.div`
  background: ${({ theme }) => theme.mainDark2};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HackathonStyled: any = styled.div<{ reverse?: boolean }>`
  margin-bottom: 32px;
  display: flex;
  gap: 24px;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  &:last-child {
    margin-bottom: 0;
  }
`

HackathonStyled.Date = styled.div`
  padding: 12px;
  height: 48px;
  background: #d9f1ff;
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    margin: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.mainDark2};
  }
`

HackathonStyled.Intro = styled.div<{ isYellow?: boolean }>`
  background: ${({ theme, isYellow }) => (isYellow ? '#F2B10A' : theme.main)};
  flex: 1;
  height: 400px;
  padding: 24px;
  p {
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme, isYellow }) => (isYellow ? '#4C3F2A' : theme.white)};
    margin: 0;
  }
  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: ${({ theme, isYellow }) => (isYellow ? '#4C3F2A' : theme.blue10)};
  }
`
HackathonStyled.Detail = styled.div<{ long?: boolean }>`
  background: ${({ long }) => (long ? 'rgba(217, 241, 255, 0.3)' : '#FBFCFF')};
  width: ${({ long }) => (long ? '100%' : '360px')};
  padding: ${({ long }) => (long ? '16px' : '0')};
  h3 {
    font-weight: 700;
    font-size: 32px;
    margin: 0;
    line-height: 40px;
    color: ${({ theme }) => theme.mainDark};
  }
  p.desc {
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.gray60};
  }
`

const ContentStyled: any = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.white};
`

ContentStyled.MoreBtn = styled.a`
  cursor: pointer;
  position: relative;
  text-align: center;
  width: 120px;
  top: -45px;
  .circle {
    position: absolute;
    top: -48px;
    left: 0px;
  }
  &:hover {
    .circle {
      animation-name: rotate;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
ContentStyled.Header = styled.div`
  display: flex;

  gap: 32px;
  margin-bottom: 32px;
`
ContentStyled.HeaderItem = styled.div<{ active?: boolean }>`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.mainDark2};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  cursor: pointer;
  border-bottom: 3px solid
    ${({ theme, active }) => (active ? theme.mainDark2 : 'transparent')};
  padding: 4px;
`

const WrapStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;

  position: relative;
`

const WrapStyledTop = styled.div`
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    margin-top: 0;
    margin-bottom: 48px;
    color: ${({ theme }) => theme.mainDark2};

    span {
      color: ${({ theme }) => theme.white};

      font-size: 38px;
      line-height: 50px;
      background: ${({ theme }) => theme.mainDark2};
    }
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: ${({ theme }) => theme.gray50};
    margin-bottom: 0;
  }
`
