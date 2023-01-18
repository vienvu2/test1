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
        <img src="/icons/checked.svg" />
      ) : (
        <img src="/icons/un-checked.svg" />
      )}

      {typeof title == 'string' ? <span>{title} </span> : title}
    </CheckboxStyled>
  )
}

const CheckboxStyled = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  cursor: pointer;
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.black};
  }
`
export default Checkbox
