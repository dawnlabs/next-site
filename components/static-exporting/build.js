import React from 'react';

import Container from '../container';
import Checkmark from '../icons/checkmark';

import Terminal from './terminal';
import Input from './input';
import Result from './result';

export default class Build extends React.PureComponent {
  state = {
    showResult: false
  };

  render() {
    return (
      <Container wide dark center>
        <div className="content">
          <div className="row">
            <div>
              <Checkmark inverse />
              <h4>Faster Delivery</h4>
            </div>
            <div>
              <Checkmark inverse />
              <h4>Modern Frontend Features</h4>
            </div>
            <div>
              <Checkmark inverse />
              <h4>No Lock-In</h4>
            </div>
            <div>
              <Checkmark inverse />
              <h4>Painless Developer Workflow</h4>
            </div>
          </div>
        </div>

        <div className="animation-row">
          <Input />
          <div className="terminal-wrapper">
            <Terminal
              running="true"
              showResult={() => this.setState({ showResult: true })}
            />
          </div>
          <Result animating={this.state.showResult} />
        </div>
        <style jsx>
          {`
            .content {
              display: flex;
              justify-content: center;
            }

            .row {
              display: flex;
              align-items: center;
              width: 72rem;
              max-width: 100%;
              padding: 2rem;
            }

            .row > div {
              display: flex;
              flex: 1 0;
              justify-content: center;
              align-items: center;
              margin-right
            }

            h4 {
              height: 2rem;
              margin-left: 0.5rem;
            }

            .pair {
              display: flex;
            }

            .pair > div {
              display: flex;
              margin: 0 2rem;
            }

            .animation-row {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 2rem;

              max-width: 100%;
              height: 300px;
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
            }

            .terminal-wrapper {
              width: 480px;
              z-index: 1;
              /* tune position of terminal with respect to input and output */
              margin-top: -12px;
            }

            @media screen and (max-width: 960px) {
              .pair > div {
                margin: 0 1rem;
              }
            }

            @media screen and (max-width: 640px) {
              .build-img {
                height: 200px;
              }

              .pair {
                flex-direction: column;
                align-items: center;
                margin: 0 2rem;
              }

              .pair > div {
                align-items: center;
                min-height: 36px;
                margin: 0;
              }

              .pair > div:first-child {
                margin-bottom: 2rem;
              }
            }
          `}
        </style>
      </Container>
    );
  }
}
