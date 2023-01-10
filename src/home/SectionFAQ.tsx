import React from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'
import Link from 'next/link'

const SectionFAQ = () => {
  const [text] = useTextAnimation('questions')
  const questions = [
    {
      index: '01',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '02',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '03',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '04',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '05',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '06',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '07',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '01',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '08',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '09',
      question: 'What is hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
  ]
  return (
    <WrapStyled>
      <Container>
        <WrapStyledTop>
          <p>FAQ</p>
          <h2>
            Frequently asked{' '}
            <span className={roboto.className}>{'<' + text + '>'}</span>
          </h2>
        </WrapStyledTop>
        <Row>
          {questions.map((a) => (
            <Col md={12} key={a.index}>
              <QuestionStyled className="mb-3">
                {a.index}
                <p className="name">{a.question}</p>
                <p className="title">{a.answer}</p>
              </QuestionStyled>
            </Col>
          ))}
        </Row>
      </Container>
    </WrapStyled>
  )
}

export default SectionFAQ

const QuestionStyled = styled.div`
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
    color: ${({ theme }) => theme.main};
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
  background: ${({ theme }) => theme.mainDark};
  padding-bottom: 60px;
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
