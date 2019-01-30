import React from 'react';

import ArrowNext from '../icons/arrow-next';
import ArrowPrev from '../icons/arrow-previous';

const slideWidth = 43.5; //rem

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.count = React.Children.count(this.props.children);

    this.state = {
      index: Math.floor(this.count / 2)
    };
  }

  next = () => this.setState(({ index }) => ({ index: ++index }));
  prev = () => this.setState(({ index }) => ({ index: --index }));

  render() {
    const { children } = this.props;
    const { index } = this.state;

    const showNext = index < this.count - 1;
    const showPrev = index > 0;
    const offset = slideWidth + slideWidth / 2 + slideWidth * index;

    return (
      <div className="carousel">
        <div className="slides">
          {React.Children.map(children, (child, i) => (
            <div className={`slide ${i === index ? 'selected' : ''}`}>
              {child}
            </div>
          ))}
        </div>

        {showNext && (
          <div className="arrow next" onClick={this.next}>
            <ArrowNext color="#8c8c8c" />
          </div>
        )}
        {showPrev && (
          <div className="arrow previous" onClick={this.prev}>
            <ArrowPrev color="#8c8c8c" />
          </div>
        )}
        <style jsx>{`
          .carousel {
            position: relative;
            height: 100%;
            width: 100%;
          }

          .slide {
            margin: 0 3.5rem;
            opacity: 0.3;
            transition: opacity 500ms;
          }

          .slide.selected {
            opacity: 1;
            transform: scale(1.1);
            transition: transform 500ms;
          }

          .slides {
            display: flex;
            position: absolute;
            top: 0;
            left: 100%;
            transition: transform 500ms;
            transform: translateX(-${offset}rem);
          }

          .arrow {
            position: absolute;
            top: 30%;
            transform: scale(2.5);
            cursor: pointer;
            user-select: none;
          }

          .arrow:hover > svg * {
            stroke: #fff;
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
