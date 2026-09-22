import "../styles/index.css";

import { EventCard } from "@/features/home/components/EventCard";

export default { title: "EventCard" };

export const All = () => (
  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
    <EventCard
      img="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop"
      tag="Rock"
      tagVariant="dark"
      date="Sep 21"
      title="Rock Festival"
      subtitle="Live at Madison Square"
    />
    <EventCard
      img="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop"
      tag="Jazz Night"
      tagVariant="teal"
      date="Sep 22"
      title="Jazz Evening"
    />
    <EventCard
      img="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
      tag="Electronic"
      tagVariant="last"
      date="Sep 23"
      title="EDM Party"
      subtitle="Club Vibes"
    />
  </div>
);