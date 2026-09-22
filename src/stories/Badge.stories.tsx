import "../styles/index.css";

import { Badge } from "@/app/components/ui/badge";

export default { title: "Badge" };

export const All = () => (
  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);

export const Status = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <Badge variant="default">🟢 Active</Badge>
    <Badge variant="secondary">⚪ Pending</Badge>
    <Badge variant="destructive">🔴 Cancelled</Badge>
    <Badge variant="outline">🔵 Scheduled</Badge>
  </div>
);