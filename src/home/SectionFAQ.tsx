import React, { useState } from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'
import Link from 'next/link'
import { IconChevronDown, IconChevronUp } from '../icons'

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
      question: 'How can I join in hackathon? ',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '03',
      question:
        'What criteria does a participant need to follow while joining in hackathons?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '04',
      question: 'What is the prize for winning a hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '05',
      question: 'Why can’t I invite my friends to form a group?',
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
      question: 'How can I join in hackathon? ',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '08',
      question:
        'What criteria does a participant need to follow while joining in hackathons?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '09',
      question: 'What is the prize for winning a hackathon?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
    {
      index: '10',
      question: 'Why can’t I invite my friends to form a group?',
      answer:
        'Hackathon is an event in which a large number of people meet to engage in collaborative computer programming. Here at FPT Marketplace, Hackathon is open for everyone who love coding.',
    },
  ]

  const [active, setActive] = useState('01')
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
          <Col md={12}>
            {questions.slice(0, 5).map((item) => (
              <Item
                item={item}
                setActive={setActive}
                active={active}
                key={item.index}
              />
            ))}
          </Col>
          <Col md={12}>
            {questions.slice(5, 10).map((item) => (
              <Item
                item={item}
                setActive={setActive}
                active={active}
                key={item.index}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </WrapStyled>
  )
}

export default SectionFAQ

interface ItemProps {
  item: any
  setActive: Function
  active: string
}

const Item = ({ item, active, setActive }: ItemProps) => {
  return (
    <QuestionStyled className="mb-3">
      <QuestionStyled.Index> {item.index} </QuestionStyled.Index>
      <QuestionStyled.Content>
        <p
          className="name"
          onClick={() => setActive(active === item.index ? '' : item.index)}
        >
          {item.question}
        </p>
        <QuestionStyled.Answer active={active === item.index}>
          {item.answer}
        </QuestionStyled.Answer>
      </QuestionStyled.Content>
      {active === item.index ? (
        <IconChevronUp size={40} />
      ) : (
        <IconChevronDown size={40} />
      )}
    </QuestionStyled>
  )
}

const QuestionStyled: any = styled.div`
  display: flex;
`
QuestionStyled.Content = styled.div`
  flex: 1;
  p.name {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: ${({ theme }) => theme.main};
    margin-bottom: 8px;
    cursor: pointer;
  }
`
QuestionStyled.Answer = styled.p<{ active?: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.white};

  max-height: ${({ active }) => (active ? 80 : 0)}px;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
`

QuestionStyled.Index = styled.div`
  width: 56px;
  margin: 0;

  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: ${({ theme }) => theme.white};
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
