import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}

img{
  max-width: 100%;
}

.mb-2{
  margin-bottom: 12px;
}
.mb-3{
  margin-bottom: 36px;
}
.mb-4{
  margin-bottom: 48px;
}

.mt-2{
  margin-top: 12px;
}


`

export const Container = styled.div`
  max-width: 1224px;
  margin-left: auto;
  margin-right: auto;
`

export const Button = styled.button<{ block?: boolean }>`
  padding: 12px 24px;

  height: 48px;
  background: ${({ theme }) => theme.main};
  border: 0;
  color: ${({ theme }) => theme.mainDark2};

  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
  img {
    vertical-align: middle;
    margin-left: 4px;
    margin-right: 4px;
  }

  ${({ block }) =>
    block
      ? `
    width: 100%;
    display: block;
  `
      : ''}
`

export const ButtonIcon = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  background: ${({ theme }) => theme.blue10};
  border-radius: 24px;
`

export const Row = styled.div<{ align?: string; justify?: string }>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -24px;
  margin-right: -24px;

  align-items: ${({ align = 'flex-start' }) => align};
`

export const Col = styled.div<{ md?: number }>`
  width: ${({ md = 24 }) => md * (100 / 24)}%;
  padding-left: 24px;
  padding-right: 24px;
`

export const Flex = styled.div<{
  align?: string
  justify?: string
  gap?: number
}>`
  display: flex;
  align-items: ${({ align = 'flex-start' }) => align};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  gap: ${({ gap = 12 }) => gap}px;
`

export const Tag = styled.span`
  padding: 6px 16px;
  height: 30px;

  border: 1px solid ${({ theme }) => theme.blue60};
  border-radius: 100px;

  color: ${({ theme }) => theme.blue60};

  font-size: 12px;
  line-height: 18px;
`
