module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-toolbars',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-performance/register'
  ],
  framework: '@storybook/react'
}
