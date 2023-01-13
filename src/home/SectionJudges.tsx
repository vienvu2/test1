import React from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'
import Link from 'next/link'

const SectionJudges = () => {
  const [text] = useTextAnimation('experts')
  return (
    <WrapStyled>
      <Container>
        <WrapStyledTop>
          <p>Judges</p>
          <h2>
            Amazing <span className={roboto.className}>{text}</span>
          </h2>
        </WrapStyledTop>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((a) => (
            <Col md={6} key={a}>
              <ExpertStyled className="mb-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />

                <p className="name">Mr. Truong Gia Binh</p>
                <p className="title">Chairman of the Board FPT Foundation</p>
              </ExpertStyled>
            </Col>
          ))}
        </Row>
      </Container>
    </WrapStyled>
  )
}

export default SectionJudges

const ExpertStyled = styled.div`
  img {
    width: 288px;
    height: 260px;
    object-fit: cover;
    margin-bottom: 8px;
  }
  p.name {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: ${({ theme }) => theme.white};
    margin-bottom: 8px;
  }
  p.title {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.white};
  }
`

const WrapStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  // background: ${({ theme }) => theme.mainDark};
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
