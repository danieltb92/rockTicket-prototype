import "../styles/index.css";

import { Button } from "@/app/components/ui/button";

export default {
  title: "Button",
};

export const All = () => (
  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
    <Button variant="default">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon">🎵</Button>
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Button disabled>Default</Button>
    <Button variant="destructive" disabled>Destructive</Button>
    <Button variant="outline" disabled>Outline</Button>
  </div>
);