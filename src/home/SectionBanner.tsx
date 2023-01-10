import React, { useState } from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import { roboto } from '../layouts/Wrap'
import { useTextAnimation } from '../hooks/textAnimation'
import { IconArrowLeft } from '../icons'

const SectionBanner = () => {
  const [text] = useTextAnimation('zero to hero')
  return (
    <WrapStyled>
      <Container>
        <Row align="center">
          <Col md={12}>
            <h2>
              Learn to code: <br />
              From <span className={roboto.className}>{'<' + text + '>'}</span>
            </h2>
            <p>Easier to get started with coding on FPT Marketplace</p>

            <Button>
              Get started
              <IconArrowLeft />
            </Button>
            <div>{/* <a>Scroll down</a> */}</div>
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
