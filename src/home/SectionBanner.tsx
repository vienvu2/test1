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
          <div>
            {/* <a>Scroll down</a> */}
          </div>
        </Col>
        <Col md={12}>
          <img src="/images/banner.png" />
        </Col>
      </Row>
    </WrapStyled>
  )
}

export default SectionBanner

const WrapStyled = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;

  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: ${({ theme }) => theme.mainDark2};

    span {
      color: ${({ theme }) => theme.white};

      font-size: 38px;
      line-height: 50px;
      background: ${({ theme }) => theme.mainDark2};
    }
  }
  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.black};
  }
`
