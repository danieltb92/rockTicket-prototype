import "../styles/index.css";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/app/components/ui/card";

export default { title: "Card" };

export const All = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "300px" }}>
    <Card variant="default">
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>Dark background variant</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the default card style with dark background.</p>
      </CardContent>
    </Card>

    <Card variant="secondary">
      <CardHeader>
        <CardTitle>Secondary Card</CardTitle>
        <CardDescription>Gulf 300 background</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the secondary card style.</p>
      </CardContent>
    </Card>

    <Card variant="tertiary">
      <CardHeader>
        <CardTitle>Tertiary Card</CardTitle>
        <CardDescription>White background</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the tertiary card style.</p>
      </CardContent>
    </Card>

    <Card variant="outline">
      <CardHeader>
        <CardTitle>Outline Card</CardTitle>
        <CardDescription>Transparent with border</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the outline card style.</p>
      </CardContent>
    </Card>
  </div>
);

export const WithFooter = () => (
  <Card variant="default" style={{ width: "300px" }}>
    <CardHeader>
      <CardTitle>Event Ticket</CardTitle>
      <CardDescription>Rock Festival 2026</CardDescription>
    </CardHeader>
    <CardContent>
      <p>September 21, 2026 at 8:00 PM</p>
    </CardContent>
    <CardFooter>
      <button style={{ backgroundColor: "#007e7c", color: "white", padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer" }}>
        Buy Ticket
      </button>
    </CardFooter>
  </Card>
);