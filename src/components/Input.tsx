import styled from 'styled-components'
import { Button } from '../GlobalStyles'
import { IconArrowUp } from '../icons'

interface IOption {
  value: string | number
  label: string
}

interface Props {
  label: string
  type?: string
  error: any
  selectList?: IOption[]
  register: Function
  name: string
  required?: boolean
  value?: any
}

const Input = ({
  label,
  type,
  error,
  selectList,
  register,
  name,
  required,
  value,
}: Props) => {
  return (
    <InputStyled error={!!error}>
      {type === 'select' && (
        <select {...register(name, { required })}>
          {selectList &&
            selectList.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      )}
      {type === 'file' && (
        <>
          {!value && (
            <Button type="button">
              Upload CV
              <IconArrowUp />
            </Button>
          )}
          <FileStyled>
            <input type="file" {...register(name, { required })} />
          </FileStyled>
        </>
      )}

      {type !== 'select' && type !== 'file' && (
        <input {...register(name, { required })} type={type} />
      )}
      {error?.type == 'required' && <p className="error">Thông tin bắt buộc</p>}

      <label className="active">{label}</label>
    </InputStyled>
  )
}

const FileStyled = styled.div`
padding: 8px;
background ${({ theme }) => theme.blue10};
border: 1px dashed  ${({ theme }) => theme.blue60};
border-radius: 8px;

`

const InputStyled = styled.div<{ error?: boolean }>`
  position: relative;
  select,
  input {
    display: block;
    width: 100%;
    padding: 15px 15px 13px;
    background: ${({ theme }) => theme.blue10};
    border: 1px solid
      ${({ theme, error }) => (error ? '#eb4e4e' : theme.blue60)};

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
      background: ${({ theme }) => theme.blue10};
      color: ${({ theme, error }) => (error ? '#eb4e4e' : theme.mainDark2)};
    }
  }

  .error {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    color: #eb4e4e;
  }
`
export default Input
