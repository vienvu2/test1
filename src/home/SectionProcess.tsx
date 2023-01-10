import React, { useState } from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import Link from 'next/link'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'

const SectionProcess = () => {
  const [text] = useTextAnimation('ARTIFICIAL-INTELLIGENCE')
  const [active, setActive] = useState('01')
  return (
    <WrapStyled>
      <Container>
        <Row align="center">
          <Col md={16}>
            <WrapStyledTop>
              <h2>
                Register an Event <br /> about{' '}
                <span className={roboto.className}>{text}</span>
              </h2>
            </WrapStyledTop>
            <ItemStyled active={active == '01'} onClick={() => setActive('01')}>
              <ItemStyled.Index>01</ItemStyled.Index>
              <ItemStyled.Content>
                <h3>Prepare the documents including CV and IDs</h3>
              </ItemStyled.Content>
            </ItemStyled>

            <ItemStyled active={active == '02'} onClick={() => setActive('02')}>
              <ItemStyled.Index>02</ItemStyled.Index>
              <ItemStyled.Content>
                <h3>
                  Fill in registration form and get the confirmation email.
                </h3>
              </ItemStyled.Content>
            </ItemStyled>

            <ItemStyled active={active == '03'} onClick={() => setActive('03')}>
              <ItemStyled.Index>03</ItemStyled.Index>
              <ItemStyled.Content>
                <h3>Follow instruction to receive data and join challenges.</h3>
              </ItemStyled.Content>
            </ItemStyled>
          </Col>
          <Col md={8}>
            <ImageStyled>
              {active === '01' && <img src="/images/process/monitor.svg" />}
              {active === '02' && <img src="/images/process/mail.svg" />}
              {active === '03' && <img src="/images/process/laptop.svg" />}
            </ImageStyled>
          </Col>
        </Row>
      </Container>
      <img
        src="/images/process/bg.svg"
        style={{
          position: 'absolute',
          opacity: 0.4,
          pointerEvents: 'none',
          bottom: 0,
          width: '50%',
          right: 0,
        }}
      />
    </WrapStyled>
  )
}

export default SectionProcess

const ImageStyled = styled.div`
  // text-align: center;
  img {
    height: 420px;
  }
`

const ItemStyled: any = styled.div<{ active?: boolean }>`
  border-top: 1px solid ${({ theme }) => theme.blue60};
  padding: 24px 0;
  display: flex;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  max-width: 460px;
  &:hover {
    opacity: 1;
  }
`
ItemStyled.Index = styled.h3`
  width: 56px;
  margin: 0;

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: ${({ theme }) => theme.mainDark};

  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff,
    -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`
ItemStyled.Content = styled.div`
  flex: 1;
  h3 {
    margin: 0;
    padding-right: 100px;

    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: ${({ theme }) => theme.main};
    margin-bottom: 8px;
  }
`

const WrapStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: ${({ theme }) => theme.mainDark};
  position: relative;
`

const WrapStyledTop = styled.div`
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    margin-top: 0;
    margin-bottom: 48px;
    color: ${({ theme }) => theme.white};

    span {
      color: ${({ theme }) => theme.mainDark2};

      font-size: 38px;
      line-height: 50px;
      background: ${({ theme }) => theme.main};
    }
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: ${({ theme }) => theme.main};
    margin-bottom: 0;
  }
`
