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
      <Container>
        <WrapStyledTop>
          <p>Process</p>
          <h2>
            Roadmap to become
            <br /> a{' '}
            <span className={roboto.className}>{'<' + text + '>_'}</span>
          </h2>
        </WrapStyledTop>
        <Row>
          <Col md={10}>
            <ItemStyled active>
              <ItemStyled.Index>01</ItemStyled.Index>
              <ItemStyled.Content>
                <h3>Learn to code</h3>
                <p>
                  Start learning with a wide range of basic to advanced courses
                  created by top experts.
                </p>
              </ItemStyled.Content>
            </ItemStyled>

            <ItemStyled>
              <ItemStyled.Index>02</ItemStyled.Index>
              <ItemStyled.Content>
                <h3>Practice coding</h3>
                <p>
                  Level up your programming skills every day with our library of
                  1000+ challenges.
                </p>
              </ItemStyled.Content>
            </ItemStyled>

            <ItemStyled>
              <ItemStyled.Index>03</ItemStyled.Index>
              <ItemStyled.Content>
                <h3>Join coding contest</h3>
                <p>
                  Participate in contests to test the geek in you and improve
                  your coding skills.
                </p>
              </ItemStyled.Content>
            </ItemStyled>
          </Col>
          <Col md={14}>
            <ImageStyled>
              <img src="/images/process/monitor.svg" />
            </ImageStyled>
            s
          </Col>
        </Row>
      </Container>
    </WrapStyled>
  )
}

export default SectionProcess

const ImageStyled = styled.div`
  text-align: center;
`

const ItemStyled: any = styled.div<{ active?: boolean }>`
  border-top: 1px solid ${({ theme }) => theme.blue60};
  padding: 24px 0;
  display: flex;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
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

    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: ${({ theme }) => theme.main};
    margin-bottom: 8px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.white};
  }
`

const WrapStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  background: ${({ theme }) => theme.mainDark};
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
