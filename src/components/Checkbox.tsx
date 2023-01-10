import { ReactNode } from 'react'
import styled from 'styled-components'

interface CheckboxProps {
  name?: string
  title?: string | ReactNode
  value?: boolean
  onChange: Function
  disabled?: boolean
}

const Checkbox = ({ title, value, onChange }: CheckboxProps) => {
  return (
    <CheckboxStyled onClick={() => onChange(!value)}>
      {value ? (
        <img src="/images/checked.svg" />
      ) : (
        <img src="/images/un-checked.svg" />
      )}

      <span>{title}</span>
    </CheckboxStyled>
  )
}

const CheckboxStyled = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  cursor: pointer;
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.black};
  }
`
export default Checkbox
