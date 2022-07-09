import "./landing-background-effect.scss";
import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function LandingBackgroundEffect() {
  
    const particlesInit = async (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
      <div className="developers-page-block">
        {/* <div className="developers-our-team-heading">Meet our Team</div> */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#1B1B1B"
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                // onClick: {
                //   enable: true,
                //   mode: "push",
                // },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#add8e6",
              },
              links: {
                color: "#add8e6",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 150,
              },
              opacity: {
                value: 0.1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            // detectRetina: true,
          }}
        />
        {/* <div className="foreground-text">Hello Nihao</div> */}
      </div>
    );
}



