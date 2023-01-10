import styled from 'styled-components'

interface Props {
  name?: string
  placeholder?: string
  value?: boolean
  onChange?: Function
  disabled?: boolean
}

const Select = ({ name, placeholder, value, onChange }: Props) => {
  return (
    <SelectStyled>
      <select placeholder={placeholder}>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </SelectStyled>
  )
}

const SelectStyled = styled.div``
export default Select
