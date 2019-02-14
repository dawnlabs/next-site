import React from 'react'

import Container from '../container'
import Browser from '../browser'
import Checkmark from '../icons/checkmark'
import Servers from './svg/servers'

export default () => (
  <Container wide dark center>
    <div className="col">
      <ul>
        <li>
          <Checkmark inverse />
          <h4>Exceptional Performance</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>SEO Ready</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Deploy Anywhere</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Zero Configuration</h4>
        </li>
      </ul>

      <div className="animation">
        <div className="browser-container">
          <svg className="line">
            <line x1="-100" y1="127" x2="80" y2="127" stroke="#C7C7C7" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
          <Browser>
            <div className="browser-content">
              <p>
                This site is <b>Server Side Rendered</b>
              </p>
            </div>
          </Browser>
        </div>
        <div className="servers-container">
          <Servers />
        </div>
      </div>
    </div>

    <style jsx>
      {`
        ul {
          padding: 0 1rem;
          margin: 2.5rem 0 0 0;
          display: flex;
          list-style-type: none;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        li {
          display: flex;
          align-items: center;
        }

        h4 {
          height: 2rem;
          margin: 0 0 0 0.5rem;
        }

        .col {
          margin: 0 auto;
          max-width: 64rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .animation {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: center;
          margin: 3rem;
        }

        .browser-container {
          position: relative;
          width: 22rem;
          height: 16rem;
          margin-left: 5rem;
          margin-right: 6rem;
        }

        .line {
          position: absolute;
          left: -5rem;
          animation: 7.5s shift linear forwards infinite;
        }

        .browser-content {
          text-align: center;
        }

        @keyframes shift {
          from {
            stroke-dashoffset: 0%;
          }
          to {
            stroke-dashoffset: -100%;
          }
        }

        @media screen and (max-width: 1024px) {
          ul {
            width: auto;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 1rem 2.5rem 1rem;
          }
          li {
            margin: 1rem 0;
          }
          .col {
            flex-direction: column-reverse;
          }
        }

        @media screen and (max-width: 700px) {
          ul {
            margin: -1rem 1rem 2.5rem 1rem;
          }
          .animation {
            margin: 0;
          }
          .browser-container {
            display: none;
          }
          .servers-container {
            margin: 0.8rem 0 0 -6.2rem;
          }
        }
      `}
    </style>
  </Container>
)
