import React from 'react';

export default class Prompt extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { white } = this.props;
    const classes = ['prompt'];

    if (white) {
      classes.push('white');
    }

    return (
      <span className={classes.join(' ')}>
        <span className="triangle">▲</span> ~/my-site{' '}
        <style jsx>
          {`
            .triangle {
              color: #fff;
            }
            .prompt.white .triangle {
              color: #000;
            }
            .prompt {
              color: #ccc;
            }
            .prompt.white {
              color: #999;
            }
          `}
        </style>
      </span>
    );
  }
}
