import { css } from 'ds-tokens'

export const ButtonCSS = css({
  length: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '$sm',
  minWidth: '64px',
  px: '$3',
  py: '$2',
  outline: 0,
  border: 0,
  margin: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  textDecoration: 'none',
  lineHeight: '$shorter',
  fontWeight: '$medium',
  fontFamily: '$default',
  textTransform: 'uppercase',
  columnGap: '$2',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '.icon': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    svg: {
      width: 'auto',
      height: '20px',
    },
  },
  variants: {
    variant: {
      text: {
        color: 'rgb(25, 118, 210)',
        backgroundColor: 'transparent',
        '&:hover:not(&:disabled)': {
          backgroundColor: 'rgba(25, 118, 210, 0.04)',
        },
        '&:disabled': {
          color: 'rgba(0, 0, 0, 0.26)',
        },
      },
      contained: {
        color: 'rgb(255, 255, 255)',
        backgroundColor: 'rgb(25, 118, 210)',
        px: '$4',
        boxShadow:
          'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px',
        '&:hover:not(&:disabled)': {
          backgroundColor: 'rgb(21, 101, 192)',
          boxShadow:
            'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
        },
        '&:disabled': {
          color: 'rgba(0, 0, 0, 0.26)',
          boxShadow: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.12)',
        },
      },
      outlined: {
        color: 'rgb(25, 118, 210)',
        backgroundColor: 'transparent',
        px: '$4',
        border: '1px solid rgba(25, 118, 210, 0.5)',
        '&:hover:not(&:disabled)': {
          backgroundColor: 'rgba(25, 118, 210, 0.04)',
          border: '1px solid rgb(25, 118, 210)',
        },
        '&:disabled': {
          color: 'rgba(0, 0, 0, 0.26)',
          border: '1px solid rgba(0, 0, 0, 0.12)',
        },
      },
    },
    size: {
      small: {
        fontSize: '$xs',
        px: '$2',
        py: '$1',
      },
      medium: {
        fontSize: '$sm',
        px: '$4',
        py: '$2',
      },
      large: {
        fontSize: '$md',
        px: '$5',
        py: '$2',
      },
    },
  },
})
