const baseColors = {
  'success-light': '#FC4737',
  'success-base': '#1B873F',
  'success-low': '#2D090C',

  'danger-light': '#F75A68',
  'danger-base': '#CC2937',
  'danger-low': '#2D090C',

  'warning-light': '#FBA94C',
  'warning-base': '#EB8A1D',
  'warning-low': '#2E1B06',

  white: '#FFFFFF',
  black: '#000000',

  'grey-100': '#E1E1E6',
  'grey-200': '#C4C4CC',
  'grey-300': '#BD8D99',
  'grey-400': '#7C7C8A',
  'grey-500': '#505059',
  'grey-600': '#323238',
  'grey-700': '#29292E',
  'grey-800': '#202024',
  'grey-900': '#121214',
  'grey-950': '#09090A',
}

const aliases = {
  'text-title': baseColors['grey-100'],
  'text-base': baseColors['grey-200'],
  'text-support': baseColors['grey-300'],
  placeholder: baseColors['grey-400'],
  'inputs-icons': baseColors['grey-500'],
  'shape-tertiary': baseColors['grey-600'],
  'shape-secondary': baseColors['grey-700'],
  'shape-primary': baseColors['grey-800'],
  'color-background': baseColors['grey-900'],
}

const colors = { ...baseColors, ...aliases }

export { colors }
