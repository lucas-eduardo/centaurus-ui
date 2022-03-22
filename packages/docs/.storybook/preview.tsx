import { Provider } from 'ds-react'
import { StoryContext } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
};

const withCentaurus = (StoryFn: Function, context: StoryContext) => {
  return (
    <Provider>
      <StoryFn />
    </Provider>
  )
}

export const decorators = [withCentaurus, withPerformance];
