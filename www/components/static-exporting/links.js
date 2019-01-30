import React from 'react';
import planetaryjs from 'planetary.js';

import Container from '../container';
import SectionHeader from '../section-header';
import { GenericLink } from '../text/link';

// This plugin will automatically rotate the globe around its vertical
// axis a configured number of degrees every second.
function autorotate(degPerSec) {
  // Planetary.js plugins are functions that take a `planet` instance
  // as an argument...
  return function(planet) {
    let lastTick = null;
    let paused = false;
    planet.plugins.autorotate = {
      pause() {
        paused = true;
      },
      resume() {
        paused = false;
      }
    };
    // ...and configure hooks into certain pieces of its lifecycle.
    planet.onDraw(() => {
      if (paused || !lastTick) {
        lastTick = new Date();
      } else {
        const now = new Date();
        const delta = now - lastTick;
        // This plugin uses the built-in projection (provided by D3)
        // to rotate the globe each time we draw it.
        const rotation = planet.projection.rotate();
        rotation[0] += (degPerSec * delta) / 1000;
        if (rotation[0] >= 180) rotation[0] -= 360;
        planet.projection.rotate(rotation);
        lastTick = now;
      }
    });
  };
}

export default class extends React.PureComponent {
  componentDidMount() {
    const globe = planetaryjs.planet();
    globe.loadPlugin(autorotate(2));
    globe.loadPlugin(
      planetaryjs.plugins.earth({
        topojson: { file: '/static/world-110m.json' },
        oceans: { fill: '#eeeeee' },
        land: { fill: '#111' },
        borders: { stroke: '#999' }
      })
    );
    globe.loadPlugin(planetaryjs.plugins.pings());
    globe.projection.scale(175).translate([200, 175]);
    // .rotate([0, -10, 0]);

    this.interval = setInterval(() => {
      const lat = Math.random() * 170 - 85;
      const lng = Math.random() * 360 - 180;
      globe.plugins.pings.add(lng, lat, { color: '#0076ff', ttl: 2000, angle: Math.random() * 10 });
    }, 150);

    const canvas = this.globe.current;
    // Special code to handle high-density displays (e.g. retina, some phones)
    // In the future, Planetary.js will handle this by itself (or via a plugin).
    if (window.devicePixelRatio == 2) {
      canvas.width = 800;
      canvas.height = 800;
      const context = canvas.getContext('2d');
      context.scale(2, 2);
    }

    globe.draw(canvas);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  globe = React.createRef();

  render() {
    return (
      <div>
        <Container padding>
          <SectionHeader
            title="Push Your Site to the Edge"
            description="Get your site to users faster, all while saving money, time, and headaches"
          />

          <div className="flex">
            <div className="column">
              <h3>Unrivaled Performance</h3>
              <p>
                Static sites can be deployed to CDNs for minimal latency, zero server load, and
                faster global delivery.
              </p>
              <GenericLink href="/showcase">View Showcase</GenericLink>
            </div>

            <div className="column">
              <h3>Deploy Anywhere</h3>
              <p>
                Host your static site cheaply and easily with any provider such as Now, Github
                Pages, or Amazon S3.
              </p>
              <GenericLink href="/docs">View Full Documentation</GenericLink>
            </div>

            <div className="column">
              <h3>Dead Simple</h3>
              <p>
                With no moving parts, static sites are secure, effortless to maintain, and easy to
                reason about.
              </p>
              <GenericLink href="/learn">Learn Next.js</GenericLink>
            </div>
          </div>
        </Container>
        <div className="globe-container">
          <canvas ref={this.globe} style={{ width: '100vw' }} />
        </div>
        <style jsx>
          {`
            .flex {
              display: flex;
            }

            .globe-container {
              width: 100%;
              height: 250px;
              overflow: hidden;
            }

            @media screen and (max-width: 960px) {
              .flex {
                flex-direction: column;
                align-items: center;
              }

              .column {
                text-align: center;
                margin-bottom: 3rem;
                max-width: 20rem;
              }

              .column:last-child {
                margin-bottom: 0;
              }
            }

            @media screen and (max-width: 640px) {
              .earth-img {
                height: 180px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
