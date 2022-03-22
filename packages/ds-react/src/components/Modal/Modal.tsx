import { ModalOverlayCSS } from 'ds-styles'
import { ComponentProps } from 'react'

import { Overlay, Root } from '@radix-ui/react-dialog'

type ModalProps = ComponentProps<typeof Root> & {
  overlay?: boolean
}

const Modal = ({ children, overlay = true, ...props }: ModalProps) => {
  const modalOverlayCSS = ModalOverlayCSS()

  return (
    <Root {...props}>
      {overlay && <Overlay className={modalOverlayCSS} />}
      {children}
    </Root>
  )
}

export { Modal, ModalProps }
