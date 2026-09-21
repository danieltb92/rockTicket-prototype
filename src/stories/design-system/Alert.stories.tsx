import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@/app/components/ui/alert";

const meta = {
  title: "Design System/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "Visual variant of the alert",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
      <Alert variant="default">
        <span>ℹ️</span>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          Your ticket has been reserved. Please complete payment within 10 minutes.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <span>⚠️</span>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Payment failed. Please check your card details and try again.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Individual variants
export const Default: Story = {
  render: () => (
    <Alert variant="default">
      <span>ℹ️</span>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        Your ticket has been reserved. Please complete payment within 10 minutes.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <span>⚠️</span>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Payment failed. Please check your card details and try again.
      </AlertDescription>
    </Alert>
  ),
};

// Without icon
export const WithoutIcon: Story = {
  render: () => (
    <Alert variant="default">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        This is an alert without an icon.
      </AlertDescription>
    </Alert>
  ),
};

// Minimal alert
export const Minimal: Story = {
  render: () => (
    <Alert>
      <AlertDescription>
        Simple alert with just a message.
      </AlertDescription>
    </Alert>
  ),
};
