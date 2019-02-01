import React from 'react';
import planetaryjs from 'planetary.js';

import LOCATIONS from './locations';

export default class Globe extends React.PureComponent {
  componentDidMount() {
    if (this.props.isMobile) return;

    const globe = planetaryjs.planet();
    globe.loadPlugin(
      planetaryjs.plugins.earth({
        topojson: { file: '/static/world-110m.json' },
        oceans: { fill: '#fefefe' },
        land: { fill: '#eee' },
        borders: { stroke: '#E5E3E3' }
      })
    );

    const width = window.innerWidth;
    const height = window.innerHeight - 120;

    globe.projection.translate([width / 2, height / 2]).scale(Math.min(width, height) / 2);

    globe.loadPlugin(planetaryjs.plugins.pings());
    this.interval = setInterval(() => {
      const cdnIndex = Math.floor(Math.random() * LOCATIONS.length);
      const { lat, lng } = LOCATIONS[cdnIndex];

      globe.plugins.pings.add(lng, lat, {
        color: '#0076ff',
        ttl: 1500,
        angle: Math.random() * 10
      });
    }, 300);

    const canvas = this.globe.current;
    // Special code to handle high-density displays (e.g. retina, some phones)
    // In the future, Planetary.js will handle this by itself (or via a plugin).
    if (window.devicePixelRatio == 2) {
      canvas.width = 800;
      canvas.height = 800;
      const context = canvas.getContext('2d');
      context.scale(2, 2);
    }

    canvas.width = width;
    canvas.height = height;

    this.animateGlobe(globe);
    globe.draw(canvas);
  }

  componentWillUnmount() {
    const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
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
    if (this.props.isMobile) return null;
    return (
      <canvas
        ref={this.globe}
        style={{
          width: '100%',
          marginLeft: '50%',
          transform: 'translate3d(-50%,0,0)'
        }}
      />
    );
  }
}
