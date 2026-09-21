import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/app/components/ui/toggle";

const meta = {
  title: "Design System/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "Visual variant of the toggle",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "Size of the toggle",
    },
    pressed: {
      control: "boolean",
      description: "Pressed state",
    },
    disabled: {
      control: "boolean",
      description: "Disable the toggle",
    },
  },
  args: {
    children: "🎵",
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Toggle variant="default">🎵</Toggle>
      <Toggle variant="outline">🎵</Toggle>
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Toggle size="sm">🎵</Toggle>
      <Toggle size="default">🎵</Toggle>
      <Toggle size="lg">🎵</Toggle>
    </div>
  ),
};

// Individual variants
export const Default: Story = {
  args: {
    variant: "default",
    children: "🎵",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "🎵",
  },
};

// Pressed states
export const PressedStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Toggle variant="default" pressed={false}>Off</Toggle>
      <Toggle variant="default" pressed={true}>On</Toggle>
      <Toggle variant="outline" pressed={false}>Off</Toggle>
      <Toggle variant="outline" pressed={true}>On</Toggle>
    </div>
  ),
};

// Disabled state
export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Toggle disabled>🎵</Toggle>
      <Toggle variant="outline" disabled>🎵</Toggle>
    </div>
  ),
};
