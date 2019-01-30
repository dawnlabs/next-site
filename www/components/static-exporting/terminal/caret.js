import React from 'react';

export default class Caret extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { mini } = this.props;
    const classes = ['caret'];

    if (mini) {
      classes.push('mini');
    }

    return (
      <span className={classes.join(' ')}>
        <style jsx>
          {`
            .caret {
              background: #0076ff;
              display: inline-block;
              width: 7px;
              height: 15px;
              vertical-align: middle;
            }
            .caret.mini {
              width: 6px;
              height: 11px;
            }
          `}
        </style>
      </span>
    );
  }
}
