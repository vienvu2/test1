import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode | ReactNode[]
  size: 'md' | 'lg' | 'sm'
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
      <ModalStyled.Content size>{children}</ModalStyled.Content>
    </ModalStyled>
  )
}

export default Modal

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
ModalStyled.Content = styled.div<{ size?: 'md' | 'lg' | 'sm' }>`
  width: 1224px;
  max-height: 100vh;
  bac
`

ModalStyled.Close = styled.div`
  text-align: right;
`
