import React from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'
import Link from 'next/link'

const SectionLeaderBoard = () => {
  const [text] = useTextAnimation('builders of the year')
  return (
    <WrapStyled>
      <WrapStyledTop>
        <p>Leaderboard</p>
        <h2>
          Astonishing{' '}
          <span className={roboto.className}>{'<' + text + '>'}</span>
        </h2>
      </WrapStyledTop>

      <BoardStyled.Wrap>
        <Board />
        <BoardStyled.Line />
        <Board />
      </BoardStyled.Wrap>
    </WrapStyled>
  )
}

export default SectionLeaderBoard

const Board = () => {
  return (
    <BoardStyled>
      <BoardStyled.Top className="mb-3">
        <img src="/images/process/monitor.svg" />
        <h3>Most hackathons won</h3>
        <p>
          Builders who have won most number of hackathons on FPT Marketplace
          this year
        </p>
      </BoardStyled.Top>
      <div className="mb-4">
        {[1, 2, 3, 4, 5, 6].map((a) => (
          <BoardStyled.Item key={a}>
            <BoardStyled.Index>
              <span>top</span>
              01
            </BoardStyled.Index>

            <BoardStyled.Avatar>
              <img src="https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg" />
            </BoardStyled.Avatar>

            <BoardStyled.Content>
              <p className="name">Hoang Nguyen</p>
              <p className="prize">13 prizes</p>
            </BoardStyled.Content>

            <Link href="/leader-board/1">View profile {'->'}</Link>
          </BoardStyled.Item>
        ))}
      </div>
      <BoardStyled.Bottom>
        <Link href="/leader-board">View all participant {'->'}</Link>
      </BoardStyled.Bottom>
    </BoardStyled>
  )
}

const BoardStyled: any = styled.div`
  flex: 1;
`
BoardStyled.Bottom = styled.div`
  text-align: center;
`
BoardStyled.Top = styled.div`
  text-align: center;
  img {
    height: 170px;
  }
  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.mainDark};
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.gray60};
  }
`

BoardStyled.Item = styled.div`
  display: flex;
  background: ${({ theme }) => theme.white};
  margin-bottom: 8px;
  gap: 16px;
  align-items: center;
  padding: 13px 16px;
`
BoardStyled.Avatar = styled.div`
  img {
    height: 48px;
    width: 48px;
    border-radius: 24px;
  }
`
BoardStyled.Line = styled.div`
  width: 1px;
  margin: 0 30px;
  background: ${({ theme }) => theme.blue40};
`
BoardStyled.Wrap = styled.div`
  background: ${({ theme }) => theme.blue30};
  padding: 40px;
  display: flex;
`
BoardStyled.Index = styled.div`
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: block;
    color: ${({ theme }) => theme.black};
  }

  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #fec411;
`
BoardStyled.Content = styled.div`
  flex: 1;
  .name {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 4px;
    line-height: 26px;
    color: ${({ theme }) => theme.mainDark};
  }
  .prize {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.mainDark2};
  }
`

const WrapStyled = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
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
