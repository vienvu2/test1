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
              Learning to code to step into the world of Information Technology
              and adapt to the Industry 4.0.
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
    </WrapStyled>
  )
}

export default SectionBenefit

const PostItemStyled = styled.div`
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.03em;
    color: ${({ theme }) => theme.mainDark};
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.mainDark2};
  }
`

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
