import React from 'react';

import Container from '../container';
import Checkmark from '../icons/checkmark';

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

      <div className="placeholder" />
    </div>


    <style jsx>
      {`
        ul {
          padding: 0;
          margin: 0 1rem;
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
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 2.5rem 0 0 0;
        }

        .placeholder {
          display: flex;
          width: 676px;
          height: 310px;
          background: red;
          margin: 2rem;
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
);
