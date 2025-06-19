import React, { useCallback, memo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        backgroundMode: {
          enable: true,
          zIndex: 0
        },
        particles: {
          number: {
            value: 355,
            density: {
              enable: true,
              value_area: 789.1476416322727
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            }
          },
          opacity: {
            value: 0.48927153781200905,
            random: false,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
              speed: 3
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

export default memo(ParticlesBackground); 