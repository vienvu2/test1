import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import { roboto } from '../layouts/Wrap'
import { useTextAnimation } from '../hooks/textAnimation'
import { IconArrowDown, IconArrowLeft, IconChevronDown } from '../icons'

const SectionBanner = () => {
  const [text] = useTextAnimation('zero to hero')

  const [active, setActive] = useState(1)

  useEffect(() => {
    const ref = setInterval(() => {
      setActive((r) => (r > 3 ? 1 : r + 1))
    }, 2000)
    return clearInterval(ref)
  }, [active])
  return (
    <WrapStyled>
      <Container>
        <Row align="center">
          <Col md={12}>
            <h2>
              Learn to code: <br />
              From <span className={roboto.className}>{'<' + text + '>'}</span>
            </h2>
            <p>
              The AI Hackathon Platform for all AI engineers, organized by FPT
              AI in collaboration with the Ministry of Science and Technology.
            </p>

            <Button>
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
            <BannerStyled.ScrollBtn>
              <IconArrowDown />
              Scroll down
            </BannerStyled.ScrollBtn>
          </Col>
          <Col md={12}>
            <img src="/images/banner.png" />
          </Col>
        </Row>
      </Container>
    </WrapStyled>
  )
}

export default SectionBanner

const BannerStyled: any = styled.div``

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
  padding-bottom: 60px;
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
  }
`
