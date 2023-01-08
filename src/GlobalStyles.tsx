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

`

export const Container = styled.div`
  max-width: 1224px;
  margin-left: auto;
  margin-right: auto;
`

export const Button = styled.button`
  padding: 12px 24px;

  height: 48px;
  background: ${({ theme }) => theme.main};
  border: 0;
  color: ${({ theme }) => theme.mainDark2};

  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
`

export const Row = styled.div<{ align?: string; justify?: string }>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;

  align-items: ${({ align = 'flex-start' }) => align};
`

export const Col = styled.div<{ md: number }>`
  width: ${({ md = 24 }) => md * (100 / 24)}%;
  padding-left: 12px;
  padding-right: 12px;
`

export const Flex = styled.div<{ align: string; justify: string }>`
  display: flex;
  align-items: ${({ align = 'flex-start' }) => align};
  justify-content: ${({ justify = 'flex-start' }) => justify};
`
