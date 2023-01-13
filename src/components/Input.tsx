import styled, { useTheme } from 'styled-components'
import { Button, ButtonLink } from '../GlobalStyles'
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
  const theme: any = useTheme()
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
            <ButtonLink
              type="button"
              className="bold"
              style={{ color: theme.mainDark2 }}
            >
              Upload CV
              <IconArrowUp />
            </ButtonLink>
          )}
        </>
      )}

      {type !== 'select' && type !== 'file' && (
        <input {...register(name, { required })} type={type} />
      )}

      {type !== 'file' && <label className="active">{label}</label>}
      {error?.type == 'required' && <p className="error">Thông tin bắt buộc</p>}
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
    min-height: 52px;
    padding: 15px 15px 13px;
    background: ${({ theme }) => theme.blue10};
    border: 1px solid
      ${({ theme, error }) => (error ? '#eb4e4e' : theme.blue60)};

    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.mainDark2};

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
