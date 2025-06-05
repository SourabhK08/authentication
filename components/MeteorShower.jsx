// components/MeteorShower.jsx
"use client";

import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const MeteorShower = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("👉 particlesInit called");
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false, zIndex: 0 },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 20, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: { enable: true, minimumValue: 0.1 },
            },
            size: { value: 2, random: true },
            move: {
              enable: true,
              speed: { min: 5, max: 8 },
              direction: "bottom-left",
              straight: true,
              outModes: { default: "out" },
              trail: { enable: true, length: 10, fillColor: "#00000000" },
            },
            life: {
              duration: { sync: false, value: { min: 1, max: 2 } },
              count: 0,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default MeteorShower;
