import React from "react";
import planetaryjs from "planetary.js";

import Container from '../container';
import SectionHeader from '../section-header';
import { GenericLink } from '../text/link';
import LOCATIONS from './locations';

export default class Links extends React.PureComponent {
  componentDidMount() {
    const globe = planetaryjs.planet();
    globe.loadPlugin(
      planetaryjs.plugins.earth({
        topojson: { file: "/static/world-110m.json" },
        oceans: { fill: "#fefefe" },
        land: { fill: "#eee" },
        borders: { stroke: "#E5E3E3" }
      })
    );

    const width = window.innerWidth;
    const height = window.innerHeight - 120;

    globe.projection
      .translate([width / 2, height / 2])
      .scale(Math.min(width, height) / 2);

    this.animateGlobe(globe);

    globe.loadPlugin(planetaryjs.plugins.pings());
    this.interval = setInterval(() => {
      const cdnIndex = Math.floor(Math.random() * LOCATIONS.length)
      const { lat, lng } = LOCATIONS[cdnIndex]

      globe.plugins.pings.add(lng, lat, { color: '#0076ff', ttl: 1500, angle: Math.random() * 10 });
    }, 300);

    const canvas = this.globe.current;
    // Special code to handle high-density displays (e.g. retina, some phones)
    // In the future, Planetary.js will handle this by itself (or via a plugin).
    if (window.devicePixelRatio == 2) {
      canvas.width = 800;
      canvas.height = 800;
      const context = canvas.getContext("2d");
      context.scale(2, 2);
    }

    canvas.width = width;
    canvas.height = height;

    globe.draw(canvas);
  }

  componentWillUnmount() {
    const cancelAnimationFrame =
      window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    cancelAnimationFrame(this.globeAnimation);
    clearInterval(this.interval);
  }

  animateGlobe = globe => {
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;

    this.globeAnimation = requestAnimationFrame(() => {
      const rotation = globe.projection.rotate();
      rotation[0] += 0.1;
      if (rotation[0] >= 180) rotation[0] -= 360;
      globe.projection.rotate(rotation);

      this.animateGlobe(globe);
    });
  };

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
                Static sites can be deployed to CDNs for minimal latency, zero
                server load, and faster global delivery.
              </p>
              <Button href="/showcase">View Showcase</Button>
            </div>

            <div className="column">
              <h3>Deploy Anywhere</h3>
              <p>
                Host your static site cheaply and easily with any provider such
                as Now, Github Pages, or Amazon S3.
              </p>
              <Button href="/docs">View Full Documentation</Button>
            </div>

            <div className="column">
              <h3>Dead Simple</h3>
              <p>
                With no moving parts, static sites are secure, effortless to
                maintain, and easy to reason about.
              </p>
              <Button href="/learn">Learn Next.js</Button>
            </div>
          </div>
        </Container>
        <div className="globe-container">
          <canvas
            ref={this.globe}
            style={{
              width: "100%",
              marginLeft: "50%",
              transform: "translate(-50%)"
            }}
          />
        </div>
        <style jsx>
          {`
            .flex {
              display: flex;
            }

            .globe-container {
              width: 100%;
              height: 200px;
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
