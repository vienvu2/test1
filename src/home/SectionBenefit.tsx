import React from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import Link from 'next/link'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'

const SectionBenefit = () => {
  const [text] = useTextAnimation('AI knowledges')
  return (
    <WrapStyled>
      <Container style={{zIndex: 2}}>
        <WrapStyledTop>
          <h2>
            AI4VN Hackathon brings to you <br />
            <span className={roboto.className}>{text}</span>
          </h2>
        </WrapStyledTop>

        <Row>
          <Col md={12}>
            <PostItemStyled>
              <img src="/images/benefits/img-1.png" />
              <h3>Searching</h3>
              <p>
                To search for the most talented young professionals and provide
                them opportunity to exchange and learn
              </p>
            </PostItemStyled>
          </Col>
          <Col md={12}>
            <PostItemStyled>
              <img src="/images/benefits/img-2.png" />
              <h3>Connecting</h3>
              <p>
                To become a platform for AI talents to gain international
                exposure and put Vietnam in the global map of AI.
              </p>
            </PostItemStyled>
          </Col>
        </Row>
      </Container>
      <img
        src="/images/benefits/bg.svg"
        style={{
          position: 'absolute',
          left: 0,
          bottom: -600,
          opacity: 0.4,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
    </WrapStyled>
  )
}

export default SectionBenefit

const PostItemStyled = styled.div`
  img {
    display: block;
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    color: ${({ theme }) => theme.main};
    margin-bottom: 16px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    color: ${({ theme }) => theme.white};
    margin-bottom: 16px;
  }
`

const WrapStyled = styled.div`
  position: relative;
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
`
