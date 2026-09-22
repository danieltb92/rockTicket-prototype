import "../styles/index.css";

import { ArtistCard } from "@/features/home/components/ArtistCard";

export default { title: "ArtistCard" };

export const All = () => (
  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
    <ArtistCard
      img="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
      name="The Midnight"
      genre="Rock"
      day="Sep 21"
      venue="Madison Square"
    />
    <ArtistCard
      img="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop"
      name="Jazz Trio"
      genre="Jazz"
      day="Sep 22"
      venue="Blue Note"
      outlined
    />
  </div>
);