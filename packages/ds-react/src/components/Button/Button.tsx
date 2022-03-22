import { ButtonCSS } from 'ds-styles'
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode,
} from 'react'

type BaseProps = {
  children: ReactNode
  variant?: 'text' | 'contained' | 'outlined'
  size?: 'small' | 'medium' | 'large'
  startIcon?: ElementType
  endIcon?: ElementType
}

type ButtonAsButton = {
  as?: 'button'
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsLink = {
  as: 'link'
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonProps = BaseProps & (ButtonAsButton | ButtonAsLink)

const Button = ({
  children,
  variant = 'text',
  size = 'medium',
  startIcon: StartIcon,
  endIcon: EndIcon,
  ...props
}: ButtonProps) => {
  const buttonCSS = ButtonCSS({ variant, size })
  const classNameString = `${buttonCSS}${
    props.className ? ` ${props.className}` : ''
  }`

  if (props.as === 'link') {
    return (
      <a className={classNameString} {...props}>
        {StartIcon && (
          <span className="icon">
            <StartIcon />
          </span>
        )}

        {children}

        {EndIcon && (
          <span className="icon">
            <EndIcon />
          </span>
        )}
      </a>
    )
  }

  return (
    <button className={classNameString} {...props}>
      {StartIcon && (
        <span className="icon">
          <StartIcon />
        </span>
      )}

      {children}

      {EndIcon && (
        <span className="icon">
          <EndIcon />
        </span>
      )}
    </button>
  )
}

export { Button, ButtonProps }
