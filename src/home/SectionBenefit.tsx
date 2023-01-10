import React from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import Link from 'next/link'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'

const SectionBenefit = () => {
  const [text] = useTextAnimation('in-demand skill')
  return (
    <WrapStyled>
      <Container>
        <WrapStyledTop>
          <p>Benefits</p>
          <h2>
            Programming is the <br />{' '}
            <span className={roboto.className}>{'<' + text + '>'}</span> for the
            future
          </h2>
        </WrapStyledTop>

        <Row>
          <Col md={8}>
            <PostItemStyled>
              <img src="/images/benefits/image-1.png" />
              <h3>Develop creative thinking</h3>
              <p>
                Learning to code helps you improve logical thinking and take you
                to a new level in solving problems.
              </p>
              <Link href="/">View details {'->'}</Link>
            </PostItemStyled>
          </Col>
          <Col md={8}>
            <PostItemStyled>
              <img src="/images/benefits/image-1.png" />
              <h3>Get to know the technology world</h3>
              <p>
                Learning to code to step into the world of Information
                Technology and adapt to the Industry 4.0.
              </p>
              <Link href="/">View details {'->'}</Link>
            </PostItemStyled>
          </Col>
          <Col md={8}>
            <PostItemStyled>
              <img src="/images/benefits/image-1.png" />
              <h3>Get more job opportunities</h3>
              <p>
                Programming jobs are growing 50% faster than the overall job
                market with an average salary of 30% higher than that of other
                jobs.
              </p>
              <Link href="/">View details {'->'}</Link>
            </PostItemStyled>
          </Col>
        </Row>
      </Container>
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
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.white};
    margin-bottom: 16px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.white};
    margin-bottom: 16px;
  }
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.main};
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
