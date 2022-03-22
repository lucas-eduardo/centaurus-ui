import { globalCss } from 'ds-tokens'
import { ReactNode } from 'react'

type ProviderProps = {
  children: ReactNode
}

const global = globalCss({
  '*:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *))': {
    all: 'unset',
    display: 'revert',
  },

  '*, *::before, *::after': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  'body, input, select, textarea, button': {
    fontFamily: '$default',
    webkitAppearance: 'none',
    webkitFontSmoothing: 'antialiased',
  },

  'a, button': {
    cursor: 'revert',
  },

  'ol, ul, menu': {
    listStyle: 'none',
  },

  img: {
    maxWidth: '100%',
  },

  table: {
    borderCollapse: 'collapse',
  },

  textarea: {
    whiteSpace: 'revert',
  },

  meter: {
    webkitAppearance: 'revert',
    appearance: 'revert',
  },

  '::placeholder': {
    color: 'unset',
  },

  ':where([hidden])': {
    display: 'none',
  },

  ':where([contenteditable])': {
    mozUserModify: 'read-write',
    webkitUserModify: 'read-write',
    overflowWrap: 'break-word',
    webkitLineBreak: 'after-white-space',
  },

  ':where([draggable="true"])': {
    webkitUserDrag: 'element',
  },

  '@font-face': [
    {
      fontFamily: 'Roboto',
      src: 'url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap")',
    },
    {
      fontFamily: 'Spectral',
      src: 'url("https://fonts.googleapis.com/css2?family=Spectral:wght@400;500;700&display=swap")',
    },
    {
      fontFamily: 'Fira code',
      src: 'url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap")',
    },
  ],
})

const Provider = ({ children }: ProviderProps) => {
  global()

  return <>{children}</>
}

export { Provider }
