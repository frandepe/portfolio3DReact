import React from "react";

import { BackgroundMouse } from "../components/BackgroundMouse/BackgroundMouse";
import { Animation } from "../components/Jobs/Animation";

const Portfolio: React.FC = () => {
  return (
    <BackgroundMouse>
      <main className="w-full h-screen">
        <Animation />
      </main>
    </BackgroundMouse>
  );
};

export default Portfolio;
