import React from "react";

import { BackgroundMouse } from "../components/BackgroundMouse/BackgroundMouse";
import { Animation } from "../components/Jobs/Animation";

const Portfolio: React.FC = () => {
  return (
    <BackgroundMouse>
      <main className="w-full min-h-screen overflow-auto">
        <Animation />
      </main>
    </BackgroundMouse>
  );
};

export default Portfolio;
