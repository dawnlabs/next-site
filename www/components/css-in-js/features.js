import React from 'react'

import Container from '../container'
import Checkmark from '../icons/checkmark'

export default () => (
  <Container wide dark center>
    <div className="col">
      <ul>
        <li>
          <Checkmark inverse />
          <h4>Zero Config</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Full-Feature CSS</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Integrate Anywhere</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Developer Focused</h4>
        </li>
      </ul>

      <div className="placeholder" />
    </div>

    <style jsx>
      {`
        .placeholder {
          width: 800px;
          height: 400px;
          background: red;
          margin: 3rem;
        }

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
        }
      `}
    </style>
  </Container>
)
