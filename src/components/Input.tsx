import styled from 'styled-components'

const Input = ({ label, type, ...props }: any) => {
  return (
    <InputStyled>
      {type === 'select' ? (
        <select {...props}>
          <option>2132</option>
          <option>2132</option>
        </select>
      ) : (
        <input {...props} type={type} />
      )}

      <label className="active">{label}</label>
    </InputStyled>
  )
}

const InputStyled = styled.div`
  position: relative;
  select,
  input {
    display: block;
    width: 100%;
    padding: 15px 15px 13px;
    background: ${({ theme }) => theme.blue20};
    border: 1px solid ${({ theme }) => theme.blue60};

    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.mainDark};

    &:active,
    &:focus {
      outline: none;
    }
  }

  label {
    position: absolute;
    top: 15px;
    left: 11px;
    padding: 0 4px;
    font-weight: 600;
    font-size: 16px;

    &.active {
      top: -8px;
      font-size: 14px;
      background: ${({ theme }) => theme.blue20};
      color: ${({ theme }) => theme.mainDark2};
    }
  }
`
export default Input
