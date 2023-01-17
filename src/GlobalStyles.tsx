import styled, { createGlobalStyle } from 'styled-components'

const SPACE = 12

const sizes = [1, 2, 3, 4, 5]

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
  color: ${({ theme }: any) => theme.black};

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
a img{
  vertical-align: bottom;
}
${sizes.map(
  (size) =>
    `

.mb-${size}{
  margin-bottom: ${size * SPACE}px;
}

.mt-${size}{
  margin-top: ${size * SPACE}px;
} 


.ml-${size}{
  margin-left: ${size * SPACE}px;
}

.mr-${size}{
  margin-right: ${size * SPACE}px;
} 

.mx-${size}{
  margin-left: ${size * SPACE}px;
  margin-right: ${size * SPACE}px;
} 

.my-${size}{
  margin-top: ${size * SPACE}px;
  margin-bottom: ${size * SPACE}px;
} 





.pb-${size}{
  padding-bottom: ${size * SPACE}px;
}

.pt-${size}{
  padding-top: ${size * SPACE}px;
} 


.pl-${size}{
  padding-left: ${size * SPACE}px;
}

.pr-${size}{
  padding-right: ${size * SPACE}px;
} 

.px-${size}{
  padding-left: ${size * SPACE}px;
  padding-right: ${size * SPACE}px;
} 

.py-${size}{
  padding-top: ${size * SPACE}px;
  padding-bottom: ${size * SPACE}px;
} 


.w-${size}{
  width: ${size * SPACE}px;
}

.h-${size}{
  height: ${size * SPACE}px;
}

`,
)}


p, h1, h2, h3, h4,h5,h6{
  margin: 0;
}

.text-center{
  text-align: center;
}

.text-right{
  text-align: right;
}

.bold{
  font-weight: bold!important;
}

.text-main{
  color: ${({ theme }) => theme.main}!important;
}
.text-dark{
  color: ${({ theme }) => theme.mainDark}!important;
}

.text-dark2{
  color: ${({ theme }) => theme.mainDark2}!important;
}

strong{
  font-weight: 600;
}
`

export const Container = styled.div`
  max-width: 1224px;
  margin-left: auto;
  margin-right: auto;
`

export const ButtonLink = styled.button<{ block?: boolean }>`
  padding: 12px 24px;

  height: 48px;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.main};

  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
  img {
    vertical-align: top;
    margin-left: 4px;
    margin-right: 4px;
  }
`
export const Button = styled.button<{ block?: boolean }>`
  padding: 12px 24px;

  height: 48px;
  background: ${({ theme }) => theme.main};
  border: 0;
  color: ${({ theme }) => theme.mainDark2};

  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  cursor: pointer;
  img {
    vertical-align: bottom;
    margin-left: 4px;
    margin-right: 4px;
  }

  ${({ block }) =>
    block &&
    `
    width: 100%;
    display: block;
  `}

  ${({ disabled, theme }) =>
    disabled &&
    `
    background: #AAC6D6;
    color:  ${theme.white};
  `}
`

export const ButtonIcon = styled.button<{ dark?: boolean }>`
  width: 48px;
  height: 48px;
  border: 0;
  background: ${({ theme, dark }) => (dark ? theme.mainDark2 : theme.blue10)};
  border-radius: 24px;
`

export const Row = styled.div<{
  align?: string
  justify?: string
  gap?: number
}>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${({ gap }) => gap || 24}px;
  margin-right: -${({ gap }) => gap || 24}px;

  align-items: ${({ align = 'flex-start' }) => align};

  & > * {
    padding-left: ${({ gap }) => gap || 24}px;
    padding-right: ${({ gap }) => gap || 24}px;
  }
`

export const Col = styled.div<{ md?: number }>`
  width: ${({ md = 24 }) => md * (100 / 24)}%;
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

export const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 24px;
    width: 24px;
    border: 1px solid ${({ theme }) => theme.white};
    margin-left: -12px;
    border-radius: 12px;
    &:first-child {
      margin-left: 0;
    }
  }
  p {
    margin: 0;
    margin-left: 4px;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.gray60};
  }
`
