import { keyframes, css } from 'ds-tokens'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate3d(-50%, -50%, 0) scale(1)',
  },
})

const contentHide = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translate3d(-50%, -50%, 0) scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
})

export const ModalOverlayCSS = css({
  length: 1,
  backgroundColor: 'rgba(0,0,0,.6)',
  position: 'fixed',
  inset: 0,
  zIndex: '$overlay',

  '&[data-state=open]': {
    animation: `${overlayShow} 0.2s linear`,
  },

  '&[data-state=closed]': {
    animation: `${overlayHide} 0.3s linear`,
  },
})

export const ModalWrapperCSS = css({
  length: 1,
  position: 'fixed',
  top: '50%',
  left: '50%',
  backfaceVisibility: 'hidden',
  transform: 'translate3d(-50%, -50%, 0)',
  width: '90vw',
  maxWidth: '$$maxWidth',
  background: '$white',
  maxHeight: '90vh',
  overflowY: 'auto',
  zIndex: '$modal',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state=open]': {
    animation: `${contentShow} 0.3s linear`,
  },

  '&[data-state=closed]': {
    animation: `${contentHide} 0.2s linear`,
  },
})

export const ModalContentCSS = css({
  length: 1,

  padding: '$7',

  '@mobile': {
    padding: '$5',
  },
})
