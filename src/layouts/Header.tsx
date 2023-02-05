import Head from 'next/head'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Button, ButtonLink, Container } from '../GlobalStyles'
import { IconArrowLeft } from '../icons'

const HeaderStyled: any = styled.div`
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 20;
  background: ${({ theme }) => theme.mainDark};
`
HeaderStyled.Inner = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 100px;
`

HeaderStyled.Menu = styled.div`
  flex: 1;
  display: flex;
  gap: 32px;
`

HeaderStyled.MenuItem = styled.div<{ active?: boolean }>`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme, active }) => (active ? theme.main : theme.white)};
  border-bottom: 2px solid
    ${({ theme, active }) => (active ? theme.main : 'transparent')};
`

HeaderStyled.Logo = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  margin-right: 48px;

  color: ${({ theme }) => theme.main};
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.main};
  }
`
HeaderStyled.Right = styled.div`
  display: flex;
  gap: 16px;
`

const Header = () => {
  const router = useRouter()
  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
  }, [])
  return (
    <>
      <Head>
        <title>Marketplace Web</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <HeaderStyled>
        <Container>
          <HeaderStyled.Inner>
            <HeaderStyled.Logo>
              <span>AI4VN </span>
              <img src="/images/logo.svg" />
            </HeaderStyled.Logo>
            <HeaderStyled.Menu>
              <Link href="/">
                <HeaderStyled.MenuItem active={router.pathname == '/'}>
                  Hackathon
                </HeaderStyled.MenuItem>
              </Link>
              <Link href="/news">
                <HeaderStyled.MenuItem active={router.pathname == '/news'}>
                  News
                </HeaderStyled.MenuItem>
              </Link>
            </HeaderStyled.Menu>

            <HeaderStyled.Right>
              <Link href="/sign-in">
                <ButtonLink style={{ fontWeight: '600' }}>Sign in</ButtonLink>
              </Link>
              <Link href="/register">
                <Button>
                  Register
                  <IconArrowLeft />
                </Button>
              </Link>
            </HeaderStyled.Right>
          </HeaderStyled.Inner>
        </Container>
      </HeaderStyled>
    </>
  )
}

export default Header
