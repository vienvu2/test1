import { useState } from 'react'
import styled from 'styled-components'
import { IconChevDown, IconChevronDown, IconChevronGrayDown } from '../icons'
import { IOption } from './Input'

interface Props {
  name?: string
  placeholder?: string
  value?: string | number
  onChange?: Function
  disabled?: boolean
  selectList?: IOption[]
}

const Select = ({
  name,
  placeholder,
  value,
  onChange,
  selectList,
  ...props
}: Props) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <SelectStyled>
      <SelectStyled.Value
        active={!!value}
        onClick={() => {
          setOpen(true)
        }}
      >
        {selectList?.find((a) => a.value === value)?.label || placeholder}
        <IconChevronGrayDown size={24} />
      </SelectStyled.Value>

      <SelectStyled.Dropdown
        active={isOpen}
        tabIndex={name}
        onBlur={() => {
          setOpen(false)
        }}
      >
        {selectList?.map((a) => (
          <SelectStyled.Item
            className={a.value == value ? 'active' : ''}
            key={a.value}
            onClick={() => {
              onChange && onChange(a.value)
              setOpen(false)
            }}
          >
            {a.label}
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
SelectStyled.Value = styled.div<{ active: boolean }>`
  background: ${({ theme }) => theme.white};
  height: 48px;
  padding: 13px 5px 15px 13px;
  border: 1px solid #c5c5c5;

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  color: ${({ active }) => (active ? '#061C4B' : '#a7a7a7')};
`
SelectStyled.Item = styled.div<{ active: boolean }>`
  padding: 13px 15px;
  color: #154a89;

  opacity: 0.5;
  &.active,
  &:hover {
    opacity: 1;

    color: ${({ theme }) => theme.mainDark2};
    background: ${({ theme }) => theme.blue20};
    cursor: pointer;
  }
`
export default Select
