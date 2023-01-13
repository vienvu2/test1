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
import Link from 'next/link'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'
import {
  IconArrowLeft,
  IconCalendar,
  IconLink,
  IconLinkWhite,
  IconLogoTwitter,
  IconLogoTwitterWhite,
  IconTwitter,
} from '../icons'
import Modal from '../components/Modal'
import Checkbox from '../components/Checkbox'
import { EnrollForm } from './SectionEnroll'

const SectionEvent = () => {
  const [text] = useTextAnimation('hackathons')
  const [tabActive, setTabActive] = useState('Hottest')
  const [detail, showDetail] = useState(false)

  return (
    <>
      <WrapStyled>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <WrapStyledTop>
            <p>Events</p>
            <h2>
              Outstanding <span className={roboto.className}>{text}</span>
            </h2>
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
            </ContentStyled.Header>
            {tabActive === 'Hottest' &&
              ['2022', '2023'].map((a, idx) => (
                <HackathonStyled key={a} reverse={idx % 2 === 0}>
                  <HackathonStyled.Intro>
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
                  <HackathonItem onApply={() => showDetail(true)} />
                </HackathonStyled>
              ))}

            {tabActive !== 'Hottest' && (
              <Row gap={12}>
                {[1, 2, 3, 4, 5, 6].map((a, idx) => (
                  <Col md={12} key={a}>
                    <HackathonItemLong onApply={() => showDetail(true)} />
                  </Col>
                ))}
              </Row>
            )}
          </ContentStyled>
        </Container>
        <img
          src="/images/events/bg.svg"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      </WrapStyled>
      <Modal size="md" show={detail} onClose={() => showDetail(false)}>
        <HackathonPopup onClose={() => showDetail(false)} />
      </Modal>
    </>
  )
}

export default SectionEvent

const HackathonPopup = ({ onClose }: { onClose: Function }) => {
  const [step, setStep] = useState(1)
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

            <Button block onClick={() => setStep(2)}>
              Apply this hackathon
              <IconArrowLeft />
            </Button>
          </Col>
        </Row>
      )}

      {step === 2 && <EnrollForm isColumn />}
    </PopupStyled>
  )
}

const HackathonItem = ({ onApply }: { onApply: Function }) => {
  return (
    <HackathonStyled.Detail>
      <h3>Hackatron 2023</h3>
      <p className="desc mb-1">
        Join the next wave of Hackatron where Web3 devs build to learn.
      </p>

      <Flex className="mb-1">
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

      <Flex className="mb-2">
        <Tag>Blockchain</Tag>
        <Tag>AI/ML</Tag>
        <Tag>Healthtech</Tag>
      </Flex>
      <HackathonStyled.Date className="mb-1">
        <IconCalendar />
        <p>Jan 1 - Feb 1, 2023</p>
      </HackathonStyled.Date>
      <Button block onClick={() => onApply()}>
        Apply now
        <IconArrowLeft />
      </Button>
    </HackathonStyled.Detail>
  )
}

const HackathonItemLong = ({ onApply }: { onApply: Function }) => {
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

      <Flex className="mb-2">
        <AvatarGroup>
          <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
          <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
          <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
          <p>+100 participating</p>
        </AvatarGroup>
      </Flex>

      <Flex className="mb-2">
        <Tag>Blockchain</Tag>
        <Tag>AI/ML</Tag>
        <Tag>Healthtech</Tag>
      </Flex>
      <Row gap={12}>
        <Col md={12}>
          <HackathonStyled.Date className="mb-1">
            <IconCalendar />
            <p>Jan 1 - Feb 1, 2023</p>
          </HackathonStyled.Date>
        </Col>
        <Col md={12}>
          <Button block onClick={() => onApply()}>
            Apply now
            <IconArrowLeft />
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
  background: ${({ theme }) => theme.blue10};
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

HackathonStyled.Intro = styled.div`
  background: ${({ theme }) => theme.mainDark2};
  flex: 1;
  height: 400px;
  padding: 24px;
  p {
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.white};
    margin: 0;
  }
  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: ${({ theme }) => theme.blue10};
  }
`
HackathonStyled.Detail = styled.div<{ long?: boolean }>`
  background: ${({ theme }) => theme.white};
  width: ${({ long }) => (long ? '100%' : '360px')};
  padding: 16px;
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
  background: ${({ theme }) => theme.blue10};
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
