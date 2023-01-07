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
