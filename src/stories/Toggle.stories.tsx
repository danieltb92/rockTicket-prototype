import "../styles/index.css";

import { Toggle } from "@/app/components/ui/toggle";

export default { title: "Toggle" };

export const All = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <Toggle variant="default">🎵</Toggle>
    <Toggle variant="outline">🎵</Toggle>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <Toggle size="sm">🎵</Toggle>
    <Toggle size="default">🎵</Toggle>
    <Toggle size="lg">🎵</Toggle>
  </div>
);

export const PressedStates = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <Toggle variant="default" pressed={false}>Off</Toggle>
    <Toggle variant="default" pressed={true}>On</Toggle>
    <Toggle variant="outline" pressed={false}>Off</Toggle>
    <Toggle variant="outline" pressed={true}>On</Toggle>
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <Toggle disabled>🎵</Toggle>
    <Toggle variant="outline" disabled>🎵</Toggle>
  </div>
);