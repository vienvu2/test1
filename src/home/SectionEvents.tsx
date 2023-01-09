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

import styled from 'styled-components'
import Link from 'next/link'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'
import { IconArrowLeft, IconCalendar, IconLink, IconTwitter } from '../icons'

const SectionEvent = () => {
  const [text] = useTextAnimation('hackathons')
  const [tabActive, setTabActive] = useState('Hottest')
  return (
    <WrapStyled>
      <WrapStyledTop>
        <p>Events</p>
        <h2>
          Outstanding{' '}
          <span className={roboto.className}>{'<' + text + '>_'}</span>
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

        {['2022', '2023'].map((a, idx) => (
          <HackathonStyled key={a} reverse={idx % 2 === 0}>
            <HackathonStyled.Intro>
              <Row align="flex-end">
                <Col md={12}>
                  <p>Introducing</p>
                  <h3>Hackatron {a}</h3>
                  <p>
                    The best way to learn is to get your hands dirty! Build on
                    riveting problem statements, while following curated
                    coursework and brainstorming exercises with industry experts
                    who know that what it’s like to be new and make mistakes.
                  </p>
                </Col>
                <Col md={12}>
                  <img src="/images/events/coding.svg" />
                </Col>
              </Row>
            </HackathonStyled.Intro>
            <HackathonStyled.Detail>
              <h3>Hackatron 2023</h3>
              <p className="desc">
                Join the next wave of Hackatron where Web3 devs build to learn.
              </p>

              <Flex className="mb-2">
                <ButtonIcon>
                  <IconLink />
                </ButtonIcon>

                <ButtonIcon>
                  <IconTwitter />
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

              <Flex className="mb-3">
                <Tag>Blockchain</Tag>
                <Tag>AI/ML</Tag>
                <Tag>Healthtech</Tag>
              </Flex>
              <HackathonStyled.Date className="mb-2">
                <IconCalendar />
                <p>Jan 1 - Feb 1, 2023</p>
              </HackathonStyled.Date>
              <Button block>
                Apply now
                <IconArrowLeft />
              </Button>
            </HackathonStyled.Detail>
          </HackathonStyled>
        ))}
      </ContentStyled>
    </WrapStyled>
  )
}

export default SectionEvent

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
  height: 430px;
  padding: 24px;
  p {
    font-weight: 400;
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
HackathonStyled.Detail = styled.div`
  background: ${({ theme }) => theme.white};
  width: 360px;
  padding: 16px;
  h3 {
    font-weight: 700;
    font-size: 32px;
    margin: 0;
    line-height: 40px;
    color: ${({ theme }) => theme.mainDark};
  }
  p.desc {
    font-weight: 400;
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

const WrapStyled = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
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
