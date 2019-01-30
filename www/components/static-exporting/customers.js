import Container from "../container";
import SectionHeader from "../section-header";
import Checkmark from "../icons/checkmark";
import Blockchain from "../icons/companies/blockchain";
import Expo from "../icons/companies/expo";
import Blockstack from "../icons/companies/blockstack";
import Material from "../icons/companies/material-ui";
import Plotly from "../icons/companies/plotly";

import Carousel from "./carousel";

export default () => (
  <Container padding wide>
    <div className="col">
      <SectionHeader id="customers" title="Who's Using Static Next.js" />

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

      <div className="row">
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

        li span {
          height: 30px;
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

        .row {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .left-container {
          text-align: center;
          align-items: center;
        }

        .logo {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
          width: 12.5rem;
        }

        .plotly-logo {
          width: 7rem;
          margin-top: 0.5rem;
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
          background-size: contain;
          background-position: center;
          margin-top: -2rem;
          cursor: pointer;
        }

        .divider {
          width: 90%;
          max-width: 60rem;
          border-bottom: 1px solid #eaeaea;
          margin: 5rem 0 3rem 0;
        }

        .carousel-container {
          margin-top: 3rem;
          height: 22rem;
          width: 100%;
        }

        @media screen and (max-width: 960px) {
          ul,
          .row {
            flex-direction: column;
          }

          li {
            margin: 1rem;
          }

          .carousel-container {
            height: 12rem;
          }

          .screen {
            flex-basis: 10rem;
            width: 19rem;
          }

          .divider {
            margin: 3rem 0 2rem 0;
          }
        }

        @media screen and (max-width: 640px) {
          ul {
            flex-direction: column;
            margin-top: 2rem;
          }

          ul > div {
            margin: 0;
          }

          li {
            margin: 1rem;
          }

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
