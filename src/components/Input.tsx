import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Button, ButtonLink } from '../GlobalStyles'
import {
  IconArrowUp,
  IconDelete,
  IconDraft,
  IconReload,
  IconTypeImage,
  IconUpload,
} from '../icons'
import Select from './Select'

export interface IOption {
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
  setValue?: Function
  setError?: Function
  prefix?: string
  placeholder: string
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
  placeholder,
  setError,
  setValue,
}: Props) => {
  const [isFocus, setFocus] = useState(false)
  const [isDrag, setDrag] = useState(false)
  const value = watch(name)

  const handleDrag = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDrag(true)
    } else if (e.type === 'dragleave') {
      setDrag(false)
    }
  }

  let pattern = undefined

  if (type == 'email') {
    pattern = {
      value: /\S+@\S+\.\S+/,
      message: 'Invalid email',
    }
  }
  if (type == 'phone') {
    pattern = {
      value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
      message: 'Invalid phone number',
    }
  }

  return (
    <InputStyled error={!!error}>
      {type === 'select' && (
        <Select
          selectList={selectList}
          value={value}
          placeholder={placeholder}
          onChange={(e: any) => {
            if (setValue) setValue(name, e)
          }}
        />
      )}
      {type === 'file' && (
        <>
          <input
            type="file"
            accept="application/pdf"
            {...register(name, {
              required,
            })}
            placeholder={placeholder}
            id={prefix + 'file_' + name}
            style={{ opacity: 0, display: 'none' }}
          />
          {value && value[0] ? (
            <FileStyled>
              <IconDraft />
              <p style={{ flex: 1 }}>
                {value[0]?.name} (
                {Math.floor(value[0]?.size / (1024 * 10)) / 10} MB)
              </p>
              <div
                onClick={() => {
                  if (onClear) {
                    onClear(null)
                  }
                }}
                className="pointer"
              >
                <IconDelete />
              </div>
            </FileStyled>
          ) : (
            <FileStyled.Upload
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              isDrag={isDrag}
              onDrop={(e: any) => {
                if (setValue) {
                  setValue(name, e.dataTransfer.files)
                }
                e.preventDefault()
                e.stopPropagation()
                setDrag(false)
              }}
            >
              <IconUpload />
              <p>
                Drop CV here or{' '}
                <a
                  onClick={() => {
                    document.getElementById(prefix + 'file_' + name)?.click()
                  }}
                >
                  Browser
                </a>
              </p>
              <p className="small">
                CV file is in .pdf format, the size is not over 10MB
              </p>
            </FileStyled.Upload>
          )}
        </>
      )}
      {type !== 'select' && type !== 'file' && (
        <input
          {...register(name, {
            required,
            pattern: pattern,
          })}
          type={type || 'text'}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
        />
      )}

      {type !== 'file' && (
        <label
          className={
            isFocus || placeholder || type === 'select' || value ? 'active' : ''
          }
        >
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      {error?.type == 'required' && (
        <p className="error">Required information</p>
      )}
      {error?.type == 'pattern' && <p className="error">{error.message}</p>}
    </InputStyled>
  )
}

const FileStyled: any = styled.div`
  padding: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #161616;
    text-align: left;
  }
`

FileStyled.Upload = styled.div<{ isDrag: boolean }>`
  background: ${({ theme }) => theme.background};
  border: 1px dashed ${({ theme }) => theme.gray20};
  border-width: ${({ isDrag }) => (isDrag ? 3 : 1)}px;
  padding: 14px;
  text-align: center;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #414141;
    a {
      color: ${({ theme }) => theme.mainDark};
      cursor: pointer;
      font-weight: 500;
    }
    &.small {
      color: #6d6d6d;
      font-size: 12px;
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
    background: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme, error }) => (error ? '#eb4e4e' : '#C5C5C5')};

    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.mainDark};

    &:active,
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #a7a7a7;
    }
    &:focus {
      border-color: ${({ theme }) => theme.main};
      &::placeholder {
        color: ${({ theme }) => theme.mainDark2};
        font-weight: 500;
      }
    }
  }

  label {
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 15px;
    left: 11px;
    padding: 0 4px;
    font-weight: 400;
    font-size: 16px;
    pointer-events: none;
    opacity: 0.4;
    color: ${({ theme, error }) => (error ? '#eb4e4e' : theme.gray20)};

    &.active {
      top: -8px;
      opacity: 1;
      font-size: 14px;
      background: ${({ theme }) => theme.white};
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
