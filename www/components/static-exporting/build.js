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
        <div className="col">
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
            <div className="input">
              <Input />
            </div>
            <div className="terminal-wrapper">
              <Terminal running="true" showResult={() => this.setState({ showResult: true })} />
            </div>
            <div className="result">
              <Result animating={this.state.showResult} />
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .content {
              display: flex;
              justify-content: center;
              margin: 2rem 0 1rem 0;
            }

            .col {
              display: flex;
              flex-direction: column;
            }

            .row {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 64rem;
            }

            .row > div {
              display: flex;
              align-items: center;
            }

            h4 {
              height: 2rem;
              margin-left: 0.5rem;
            }

            .animation-row {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 1rem 0 2rem 0;

              max-width: 100%;
              height: 300px;
            }

            .terminal-wrapper {
              width: 480px;
              z-index: 1;
              /* tune position of terminal with respect to input and output */
              margin-top: -30px;
              box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.48), 0px 14px 50px rgba(0, 0, 0, 0.38);
            }

            @media screen and (max-width: 960px) {
              .content {
                margin: 1rem 0 2rem 0;
              }
              .animation-row {
                margin: 2rem 0 1rem 0;
              }
              .col {
                flex-direction: column-reverse;
              }
              .row {
                width: auto;
                flex-direction: column;
                align-items: flex-start;
              }
            }

            @media screen and (max-width: 840px) {
              .terminal-wrapper {
                padding: 0 2rem;
              }

              .input,
              .result {
                display: none;
              }
            }
          `}
        </style>
      </Container>
    );
  }
}
