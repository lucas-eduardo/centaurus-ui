import {
  Modal as ModalComponent,
  ModalContent,
  ModalProps,
  ModalTrigger,
  ModalWrapper,
  Button,
} from 'ds-react'

import { useArgs } from '@storybook/client-api'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Components/Utils/Modal',
  component: ModalComponent,
  argTypes: {
    open: { control: 'boolean' },
    overlay: { control: 'boolean' },
  },
  args: {
    open: false,
    overlay: true,
  },
} as Meta

const Template: Story<ModalProps> = args => {
  const [, updateArgs] = useArgs()

  return (
    <ModalComponent {...args} onOpenChange={open => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button variant="contained">Abrir modal</Button>
      </ModalTrigger>

      <ModalWrapper>
        <ModalContent>
          <p>Será que foi?</p>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  )
}

export const Modal = Template.bind({})
