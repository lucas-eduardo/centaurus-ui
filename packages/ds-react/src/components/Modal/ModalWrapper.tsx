import { ModalWrapperCSS } from 'ds-styles'
import { ComponentProps } from 'react'

import { Content, DialogContentProps } from '@radix-ui/react-dialog'
import { styled } from '@stitches/react'

const StyledModalWrapper = styled(Content, ModalWrapperCSS)

type ModalWrapperProps = DialogContentProps &
  ComponentProps<typeof StyledModalWrapper> & {
    width?: number
    maintainDimentions?: boolean
  }

const ModalWrapper = ({
  children,
  width = 700,
  maintainDimentions = false,
  ...props
}: ModalWrapperProps) => {
  return (
    <StyledModalWrapper
      {...props}
      css={{
        $$maxWidth: `${width}px`,
        ...(!maintainDimentions && {
          [`@media (max-width ${width}px)`]: {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
          },
        }),
      }}
    >
      {children}
    </StyledModalWrapper>
  )
}

export { ModalWrapper, ModalWrapperProps }
