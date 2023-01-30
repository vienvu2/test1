import { useState } from 'react'
import styled from 'styled-components'
import { IconChevDown, IconChevronDown, IconChevronGrayDown } from '../icons'

interface Props {
  name?: string
  placeholder?: string
  value?: boolean
  onChange?: Function
  disabled?: boolean,
  selectList: IOption[]
}

const Select = ({ name, placeholder, value, onChange, selectList }: Props) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <SelectStyled>
      <SelectStyled.Value
        onClick={() => {
          setOpen(true)
        }}
      >
        Placeholder
        <IconChevronGrayDown size={24} />
      </SelectStyled.Value>

      <SelectStyled.Dropdown
        active={isOpen}
        tabIndex={name}
        onBlur={() => {
          setOpen(false)
        }}
      >
        {selectList.map((a) => (
          <SelectStyled.Item
            key={a}
            onClick={() => {
              setOpen(false)
            }}
          >
            Item {a}
          </SelectStyled.Item>
        ))}
      </SelectStyled.Dropdown>
    </SelectStyled>
  )
}

const SelectStyled: any = styled.div`
  position: relative;
`
SelectStyled.Dropdown = styled.div<{ active: boolean }>`
  position: absolute;
  background: ${({ theme }) => theme.white};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.main};
  z-index: 2;
  display: ${({ active }) => (active ? 'block' : 'none')};
`
SelectStyled.Value = styled.div`
  background: ${({ theme }) => theme.white};
  height: 48px;
  padding: 13px 15px;
  border: 1px solid #c5c5c5;

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`
SelectStyled.Item = styled.div`
  padding: 13px 15px;
  color: #154a89;

  opacity: 0.5;

  &:hover {
    opacity: 1;

    color: ${({ theme }) => theme.mainDark2};
    background: ${({ theme }) => theme.blue20};
    cursor: pointer;
  }
`
export default Select
