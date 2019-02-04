import Container from '../container';
import SectionHeader from '../section-header';
import Checkmark from '../icons/checkmark';
import Blockchain from '../icons/companies/blockchain';
import Expo from '../icons/companies/expo';
import Blockstack from '../icons/companies/blockstack';
import Material from '../icons/companies/material-ui';
import Plotly from '../icons/companies/plotly';

import Carousel from './carousel';

export default () => (
  <Container padding wide>
    <div className="col">
      <SectionHeader id="customers" title="Who's Using Static Exports" />

      <div className="carousel-container">
        <Carousel>
          <div className="col">
            <a href="https://expo.io/" className="screen expo" />
            <div className="logo">
              <Expo />
            </div>
          </div>
          <div className="col">
            <a href="https://blockchain.com/" className="screen blockchain" />
            <div className="logo">
              <Blockchain />
            </div>
          </div>
          <div className="col">
            <a href="https://plot.ly/" className="screen plotly" />
            <div className="logo plotly-logo">
              <Plotly />
            </div>
          </div>
          <div className="col">
            <a href="https://material-ui.com/" className="screen material" />
            <div className="logo">
              <Material />
            </div>
          </div>
          <div className="col">
            <a href="https://blockstack.org/" className="screen blockstack" />
            <div className="logo">
              <Blockstack />
            </div>
          </div>
        </Carousel>
      </div>

      <div className="divider" />

      <div className="perfect-for">
        <h4>Perfect For:</h4>
        <ul>
          <li>
            <Checkmark />
            <span>Landing pages</span>
          </li>
          <li>
            <Checkmark />
            <span>Blogs</span>
          </li>
          <li>
            <Checkmark />
            <span>Documentation and tutorials</span>
          </li>
          <li>
            <Checkmark />
            <span>Style guides</span>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        ul {
          padding: 0;
          margin: 0;
          display: flex;
          flex: 1;
          justify-content: space-between;
          list-style-type: none;
        }

        h4 {
          margin: 0;
        }

        li {
          display: flex;
          align-items: center;
          margin: 0 1.5rem;
        }

        li:first-child {
          margin-left: 3rem;
        }

        li:last-child {
          margin-right: 0;
        }

        li span {
          height: 1.8rem;
          margin-left: 0.5rem;
        }

        ul > div {
          display: flex;
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .perfect-for {
          display: flex;
          width: 100%;
          align-items: center;
          margin: 0 auto;
          padding: 0 1rem;
          max-width: 64rem;
        }

        .left-container {
          text-align: center;
          align-items: center;
        }

        .logo {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          width: 12.5rem;
        }

        .plotly-logo {
          width: 7rem;
        }

        .expo {
          background: url(/static/images/static-exporting/expo-screen.png);
        }
        .blockchain {
          background: url(/static/images/static-exporting/blockchain-screen.png);
        }
        .plotly {
          background: url(/static/images/static-exporting/plotly-screen.png);
        }
        .material {
          background: url(/static/images/static-exporting/material-screen.png);
        }
        .blockstack {
          background: url(/static/images/static-exporting/blockstack-screen.png);
        }

        .screen {
          display: flex;
          flex: 1;
          flex-basis: 20.5rem;
          width: 36.5rem;
          user-select: none;
          user-drag: none;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          margin-top: -2rem;
          cursor: pointer;
          border-radius: 7px;
          box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1),
            0px 10px 20px rgba(0, 0, 0, 0.08);
          opacity: 0.95;
        }

        .screen:hover {
          opacity: 1;
          box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1),
            0px 10px 10px rgba(0, 0, 0, 0.08);
        }

        .divider {
          width: calc(100% - 2rem);
          max-width: 62rem;
          border-bottom: 1px solid #eaeaea;
          margin: 6rem 0 3rem 0;
        }

        .carousel-container {
          margin-top: 3rem;
          height: 22rem;
          width: 100%;
        }

        @media screen and (max-width: 960px) {
          ul,
          .perfect-for {
            display: none;
          }

          .carousel-container {
            height: 12rem;
            margin-bottom: 2rem;
          }

          .screen {
            flex-basis: 10rem;
            width: 19rem;
          }

          .divider {
            display: none;
          }
        }

        @media screen and (max-width: 640px) {
          .carousel-container {
            height: 10rem;
          }

          .screen {
            flex-basis: 8rem;
            width: 14rem;
          }
        }
      `}
    </style>
  </Container>
);
