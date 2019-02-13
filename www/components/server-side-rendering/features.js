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
            <line x1="-100" y1="131" x2="80" y2="131" stroke="#C7C7C7" strokeWidth="2" strokeDasharray="3 3" />
          </svg>
          <Browser>
            <div className="browser-content">
              <p>
                This site is <b>Server Side Rendered</b>
              </p>
            </div>
          </Browser>
        </div>
        <Servers />
      </div>
    </div>

    <style jsx>
      {`
        ul {
          padding: 0;
          margin: 2.5rem 1rem 0 1rem;
          display: flex;
          list-style-type: none;
          align-items: center;
          justify-content: space-between;
          width: 64rem;
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
          max-width: 1024px;
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

        .server-container {
          margin-left: -2rem;
        }

        .browser-container {
          position: relative;
          width: 350px;
          height: 260px;
          margin-left: 5rem;
          margin-right: 6rem;
        }

        .line {
          position: absolute;
          left: -5rem;
          animation: 15s shift linear forwards infinite;
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
          .col {
            flex-direction: column-reverse;
          }
          ul {
            width: auto;
            flex-direction: column;
            align-items: flex-start;
          }
          li {
            margin: 1rem 0;
          }
        }
      `}
    </style>
  </Container>
)
