import React from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import Link from 'next/link'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'

const SectionProcess = () => {
  const [text] = useTextAnimation('programmer')
  return (
    <WrapStyled>
      <WrapStyledTop>
        <p>Process</p>
        <h2>
          Roadmap to become
          <br /> a <span className={roboto.className}>{'<' + text + '>_'}</span>
        </h2>
      </WrapStyledTop>
      <Row>
        <Col md={5}></Col>
        <Col md={7}></Col>
      </Row>
    </WrapStyled>
  )
}

export default SectionProcess

const WrapStyled = styled(Container)`
  padding-top: 100px;
  padding-bottom: 100px;
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
