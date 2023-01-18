import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode | ReactNode[]
  size: 'md' | 'lg' | 'sm' | 'xs'
  onClose: Function
  show: boolean
}

const Modal = ({ children, size, show, onClose }: Props) => {
  if (!show) {
    return <div />
  }
  return (
    <ModalStyled
      onClick={(e: Event) => {
        if (e.target === e.currentTarget) {
          e.preventDefault()
          onClose()
        }
      }}
    >
      <ModalStyled.Content size={size}>{children}</ModalStyled.Content>
    </ModalStyled>
  )
}

export default Modal
const WIDTHS: any = {
  xs: '400px',
  sm: '600px',
  md: '900px',
  lg: '1224px',
}

const ModalStyled: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  background: #0006;
  display: flex;
  align-items: center;
  justify-content: center;
`
ModalStyled.Content = styled.div<{ size?: 'md' | 'lg' | 'sm' | 'xs' }>`
  width: ${({ size }) => WIDTHS[size || 'md']};
  max-height: 100vh;
`

ModalStyled.Close = styled.div`
  text-align: right;
`
