import "../styles/index.css";

import { Alert, AlertTitle, AlertDescription } from "@/app/components/ui/alert";

export default { title: "Alert" };

export const All = () => (
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
);

export const Minimal = () => (
  <Alert>
    <AlertDescription>Simple alert with just a message.</AlertDescription>
  </Alert>
);