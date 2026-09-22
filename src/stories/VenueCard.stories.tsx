import "../styles/index.css";

import { VenueCard } from "@/features/home/components/VenueCard";

export default { title: "VenueCard" };

export const All = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
    <VenueCard name="Madison Square Garden" sub="New York, NY" icon="music" />
    <VenueCard name="Blue Note Jazz Club" sub="New York, NY" icon="location" />
  </div>
);