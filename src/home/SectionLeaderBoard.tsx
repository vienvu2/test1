import React from 'react'
import { Button, Col, Container, Row } from '../GlobalStyles'

import styled from 'styled-components'
import { useTextAnimation } from '../hooks/textAnimation'
import { roboto } from '../layouts/Wrap'
import Link from 'next/link'
import { IconArrowLeft } from '../icons'

const SectionLeaderBoard = () => {
  const [text] = useTextAnimation('builders of the year')

  const members = [
    {
      id: '01',
      top: '01',
      name: 'Hoang Nguyen',
      prizeCount: 12,
      color: '#FEC411',
      avatar:
        'https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg',
    },
    {
      id: '02',
      top: '02',
      name: 'Hoang Nguyen',
      prizeCount: 12,
      color: '#C0C0C0',
      avatar:
        'https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg',
    },
    {
      id: '03',
      top: '03',
      name: 'Hoang Nguyen',
      prizeCount: 12,
      color: '#C77E2E',
      avatar:
        'https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg',
    },
    {
      id: '04',
      top: '04',
      name: 'Hoang Nguyen',
      prizeCount: 12,
      color: '#126FA3',
      thin: true,
      avatar:
        'https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg',
    },
    {
      id: '05',
      top: '05',
      name: 'Hoang Nguyen',
      prizeCount: 12,
      color: '#1E266D',
      thin: true,
      avatar:
        'https://znews-photo.zingcdn.me/w660/Uploaded/gtnjj3/2023_01_08/tp_9_8247.jpg',
    },
  ]
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
        <Board
          data={{
            image: <img src="/images/leaderboard/img-1.svg" />,
            title: 'Most hackathons won',
            desc:
              'Builders who have won most number of hackathons on AI4VN this year',
            members: members,
          }}
        />
        <BoardStyled.Line />
        <Board
          data={{
            image: <img src="/images/leaderboard/img-2.svg" />,
            title: 'Most projects build',
            desc:
              'Builders who have won most number of hackathons on AI4VN this year',
            members: members,
          }}
        />
      </BoardStyled.Wrap>
    </WrapStyled>
  )
}

export default SectionLeaderBoard

const Board = ({ data }: { data: any }) => {
  return (
    <BoardStyled>
      <BoardStyled.Top className="mb-3">
        <div className="mb-3">{data.image}</div>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </BoardStyled.Top>
      <div className="mb-4">
        {data.members.map((a: any) => (
          <BoardStyled.Item key={a.top}>
            <BoardStyled.Index color={a.color} thin={a.thin}>
              <span>Top</span>
              {a.top}
            </BoardStyled.Index>

            <BoardStyled.Avatar>
              <img src={a.avatar} />
            </BoardStyled.Avatar>

            <BoardStyled.Content>
              <p className="name">{a.name}</p>
              <p className="prize">{a.prizeCount} prizes</p>
            </BoardStyled.Content>

            <Link href={'/leader-board/' + a.id}>
              View profile <IconArrowLeft />
            </Link>
          </BoardStyled.Item>
        ))}
      </div>
      <BoardStyled.Bottom>
        <Link href={'/leader-board'}>
          View all participant <IconArrowLeft />{' '}
        </Link>
      </BoardStyled.Bottom>
    </BoardStyled>
  )
}

const BoardStyled: any = styled.div`
  flex: 1;
  a {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.mainDark2};
  }
`
BoardStyled.Bottom = styled.div`
  text-align: center;
`
BoardStyled.Top = styled.div`
  padding-left: 48px;
  padding-right: 48px;
  text-align: center;
  img {
    height: 170px;
  }
  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.mainDark2};
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
BoardStyled.Index = styled.div<{ thin?: boolean }>`
  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: block;
    color: ${({ theme }) => theme.black};
  }

  font-weight: ${({ thin }) => (thin ? 500 : 700)};
  font-size: 24px;
  line-height: 30px;
  color: ${({ color }) => color};
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
    font-weight: 600;
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
