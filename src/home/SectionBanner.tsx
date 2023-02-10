import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Flex, Row } from '../GlobalStyles'

import styled from 'styled-components'
import { roboto } from '../layouts/Wrap'
import { useTextAnimation } from '../hooks/textAnimation'
import {
  IconArrowDown,
  IconArrowLeft,
  IconBannerLeft,
  IconBannerRight,
  IconChevRight,
  IconChevronDown,
} from '../icons'

const SectionBanner = () => {
  const [active, setActive] = useState(1)

  const items = [
    {
      title: 'AI4VN Hackathon',
      desc:
        'The AI Hackathon Platform for all AI engineers, organized by FPT AI in collaboration with the Ministry of Science and Technology.',
      link: 'benefit',
      image: (
        <img
          src="/images/banner/banner-1.png"
          style={{ width: '120%', maxWidth: '120%', marginTop: -100 }}
        />
      ),
    },
    {
      title: 'Hackatron 2023',
      desc:
        'The best way to learn is to get your hands dirty! Build on riveting problem statements, while following curated coursework and brainstorming exercises with industry experts who know that what it’s like to be new and make mistakes.',
      link: 'events',
      image: <img src="/images/banner/banner-2.svg" />,
    },
    {
      title: 'HackZon 2.0',
      desc:
        'The best way to learn is to get your hands dirty! Build on riveting problem statements, while following curated coursework and brainstorming exercises with industry experts who know that what it’s like to be new and make mistakes.',
      link: 'events',
      image: <img src="/images/banner/banner-3.svg" />,
    },
  ]

  const item = items[active - 1] || {}

  useEffect(() => {
    const ref = setInterval(() => {
      setActive((r) => (r > 2 ? 1 : r + 1))
    }, 5000)
    return () => clearInterval(ref)
  }, [])

  return (
    <WrapStyled>
      <img
        src="/images/banner/bg.svg"
        style={{ position: 'absolute', right: 100, top: 0, opacity: 0.4 }}
      />
      <Container>
        <BannerWrap>
          <button
            className="btn-left"
            onClick={() => setActive(active === 1 ? 3 : active - 1)}
          >
            <IconBannerLeft />
          </button>
          <Row>
            <Col md={12} style={{ paddingTop: 100 }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <Button
                onClick={() => {
                  if (document) {
                    var element = document.getElementById('events')
                    var headerOffset = 60
                    var elementPosition =
                      element?.getBoundingClientRect().top || 0
                    var offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                Let’s Start
                <IconArrowLeft />
              </Button>

              <BannerStyled.Nav>
                {[1, 2, 3].map((a) => (
                  <div
                    key={a}
                    onClick={() => setActive(a)}
                    className={active === a ? 'active' : ''}
                  />
                ))}
              </BannerStyled.Nav>
              <BannerStyled.ScrollBtn
                onClick={() => {
                  if (document) {
                    var element = document.getElementById(item.link)
                    var headerOffset = 60
                    var elementPosition =
                      element?.getBoundingClientRect().top || 0
                    var offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                <IconArrowDown />
                Scroll down
              </BannerStyled.ScrollBtn>
            </Col>
            <Col md={12} style={{ position: 'relative' }}>
              <BannerStyled.Image show={active === 1}>
                {items[0].image}
              </BannerStyled.Image>
              <BannerStyled.Image show={active === 2}>
                {items[1].image}
              </BannerStyled.Image>
              <BannerStyled.Image show={active === 3}>
                {items[2].image}
              </BannerStyled.Image>
            </Col>
          </Row>
          <button
            className="btn-right"
            onClick={() => setActive(active === 3 ? 1 : active + 1)}
          >
            <IconBannerRight />
          </button>
        </BannerWrap>
      </Container>

      <Container className="py-3">
        <PartnerStyled>
          <Flex align="center" justify="space-around">
            <img src="/images/partners/partner-1.png" height={66} />
            <img src="/images/partners/partner-5.png" height={66} />
            <img src="/images/partners/partner-6.png" height={90} />
          </Flex>
        </PartnerStyled>
      </Container>
    </WrapStyled>
  )
}

export default SectionBanner

const BannerStyled: any = styled.div<{big?: boolean}>`
  img{

  }
`

const BannerWrap: any = styled.div`
  position: relative;
  padding-bottom: 100px;
  .btn-left,
  .btn-right {
    border: 0;
    background: transparent;
    cursor: pointer;
    position: absolute;
    top: 50%;
    &:hover {
      background: #fff1;
    }
  }
  .btn-left {
    left: -100px;
  }
  .btn-right {
    right: -100px;
  }
`

const PartnerStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: ${({ theme }) => theme.mainDark};
`

BannerStyled.Image = styled.div<{ show: boolean }>`
  height: 500px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.3s linear;
  position: absolute;
  width: 100%;
  img {
    position: absolute;
    top: 0;
  }
`

BannerStyled.Nav = styled.div`
  display: flex;
  padding: 24px 0;
  gap: 4px;
  & > div {
    height: 3px;
    width: 16px;
    border-radius: 8px;
    background: ${({ theme }) => theme.blue70};

    cursor: pointer;

    transition: all 0.3s linear;

    &.active {
      background: ${({ theme }) => theme.blue50};
      width: 32px;
    }
  }
`
BannerStyled.ScrollBtn = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
  color: ${({ theme }) => theme.main};
`

const WrapStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 0px;
  background: ${({ theme }) => theme.mainDark};

  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: ${({ theme }) => theme.white};
    margin-bottom: 24px;

    span {
      color: ${({ theme }) => theme.mainDark2};

      font-size: 38px;
      line-height: 50px;
      background: ${({ theme }) => theme.main};
    }
  }
  p {
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.white};
    min-height: 160px;
  }
`
