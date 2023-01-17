import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Button, ButtonLink } from '../GlobalStyles'
import { IconArrowUp, IconDelete, IconReload, IconTypeImage } from '../icons'

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
  watch: Function
  onClear?: Function
  prefix?: string
}

const Input = ({
  label,
  type,
  error,
  selectList,
  register,
  name,
  required,
  watch,
  prefix,
  onClear,
}: Props) => {
  const theme: any = useTheme()
  const [isFocus, setFocus] = useState(false)
  const value = watch(name)

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
          <input
            type="file"
            accepts=".doc,.pdf,.png,.jpg"
            {...register(name, {
              required,
            })}
            id={prefix + 'file_' + name}
            style={{ opacity: 0 , display: 'none'}}
          />
          {value && value[0] ? (
            <FileStyled>
              <IconTypeImage />
              <div style={{ flex: 1 }}>
                <p>
                  {value[0]?.name}
                  <span className="px-1">•</span>
                  <span>Uploaded</span>
                </p>
                <p className="left"> {value[0]?.size} kB</p>
              </div>
              <div
                onClick={() => {
                  document.getElementById(prefix + 'file_' + name)?.click()
                }}
              >
                <IconReload />
              </div>
              <div
                onClick={() => {
                  if (onClear) {
                    onClear(null)
                  }
                }}
              >
                <IconDelete />
              </div>
            </FileStyled>
          ) : (
            <>
              <ButtonLink
                type="button"
                className="bold"
                onClick={() => {
                  document.getElementById(prefix + 'file_' + name)?.click()
                }}
                style={{ color: theme.mainDark2 }}
              >
                Upload CV
                <IconArrowUp />
              </ButtonLink>
            </>
          )}
        </>
      )}
      {type !== 'select' && type !== 'file' && (
        <input
          {...register(name, {
            required,
            pattern:
              type === 'email'
                ? {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email',
                  }
                : undefined,
          })}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      )}

      {type !== 'file' && (
        <label
          className={isFocus || type === 'select' || value ? 'active' : ''}
        >
          {label}
        </label>
      )}
      {error?.type == 'required' && (
        <p className="error">Required information</p>
      )}
      {error?.type == 'pattern' && <p className="error">{error.message}</p>}
    </InputStyled>
  )
}

const FileStyled = styled.div`
padding: 8px;
background ${({ theme }) => theme.blue10};
border: 1px dashed  ${({ theme }) => theme.blue60};
border-radius: 8px;

display: flex;
gap: 10px;
p {
  text-align: left;

  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.mainDark2};
  span,
  &.size{
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.blue60};
  }
}

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
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 15px;
    left: 11px;
    padding: 0 4px;
    font-weight: 600;
    font-size: 16px;
    pointer-events: none;
    opacity: 0.4;
    color: ${({ theme, error }) => (error ? '#eb4e4e' : theme.mainDark2)};

    &.active {
      top: -8px;
      opacity: 1;
      font-size: 14px;
      background: ${({ theme }) => theme.blue10};
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
