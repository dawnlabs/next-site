import React from 'react';
import Container from '../container';
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
            <div className="pair">
              <div>Faster Delivery</div>
              <div>Modern Frontend Features</div>
            </div>
            <div className="pair">
              <div>No Lock-In</div>
              <div>Painless Developer Workflow</div>
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
              max-width: 64rem;
              padding: 2rem;
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
