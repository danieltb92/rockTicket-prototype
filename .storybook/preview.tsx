import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#090909" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ 
        backgroundColor: "#090909", 
        padding: "24px",
        minHeight: "100vh",
        fontFamily: "'Source Sans Pro', sans-serif" 
      }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
