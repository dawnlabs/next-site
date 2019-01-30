import React from 'react';

import ArrowNext from '../icons/arrow-next';
import ArrowPrev from '../icons/arrow-previous';

export default class Carousel extends React.Component {
  origin = Math.floor(React.Children.count(this.props.children) / 2);

  state = {
    offset: 0
  };

  next = () => this.setState(({ offset }) => ({ offset: ++offset }));
  prev = () => this.setState(({ offset }) => ({ offset: --offset }));

  render() {
    const { children } = this.props;
    const { offset } = this.state;

    const selected = this.origin + offset;
    const showNext = offset < this.origin;
    const showPrev = offset > -this.origin;

    return (
      <div className="carousel">
        <div className="slides">
          {React.Children.map(children, (child, i) => (
            <div className={i === selected ? 'selected' : ''}>{child}</div>
          ))}
        </div>

        {showNext && (
          <div className="next" onClick={this.next}>
            <ArrowNext color="#8c8c8c" />
          </div>
        )}
        {showPrev && (
          <div className="previous" onClick={this.prev}>
            <ArrowPrev color="#8c8c8c" />
          </div>
        )}
        <style jsx>{`
          .carousel {
            position: relative;
            display: flex;
            flex-basis: 200px;
            width: 100%;
          }

          .slides > div {
            opacity: 0.3;
            transition: opacity 500ms;
          }

          .slides > .selected {
            opacity: 1;
          }

          .selected {
            transform: scale(1.1);
            transition: transform 500ms;
          }

          .slides {
            display: flex;
            position: absolute;
            top: 0;
            right: 100%;
            transition: transform 500ms;
            transform: translateX(calc(50vw + 860px - ${340 * offset}px));
          }

          .next,
          .previous {
            position: absolute;
            top: 3rem;
            cursor: pointer;
            user-select: none;
          }
          .next {
            right: 4rem;
          }
          .previous {
            left: 4rem;
          }

          @media screen and (max-width: 640px) {
            .next {
              right: 2rem;
            }
            .previous {
              left: 2rem;
            }
          }
        `}</style>
      </div>
    );
  }
}
