import "../styles/index.css";

import { useState } from "react";
import { CategoryChips } from "@/features/home/components/CategoryChips";

export default { title: "CategoryChips" };

export const Default = () => {
  const [active, setActive] = useState("All");
  return <CategoryChips active={active} onSelect={setActive} />;
};