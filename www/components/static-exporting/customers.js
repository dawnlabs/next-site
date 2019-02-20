import Container from '../container';
import SectionHeader from '../section-header';
import Carousel from '../carousel';
import Image from '../image';
import { MediaQueryConsumer } from '../media-query';

import Blockchain from '../icons/companies/blockchain';
import Expo from '../icons/companies/expo';
import Blockstack from '../icons/companies/blockstack';
import Material from '../icons/companies/material-ui';
import Plotly from '../icons/companies/plotly';

export default () => (
  <Container padding wide>
    <div className="col">
      <SectionHeader id="customers" title="Who's Using Static Exports" />

      <MediaQueryConsumer>
        {({ isMobile, isTablet }) => {
          const size = {
            width: isMobile ? 224 : isTablet ? 304 : 584,
            height: isMobile ? 128 : isTablet ? 160 : 328
          };
          return (
            <Carousel>
              <div className="col">
                <a href="https://expo.io/">
                  <Image
                    src="/static/images/showcases/showcases-13.jpg"
                    alt="Expo"
                    {...size}
                  />
                </a>
                <div className="logo">
                  <Expo />
                </div>
              </div>
              <div className="col">
                <a href="https://blockchain.com/">
                  <Image
                    src="/static/images/showcases/blockchain.png"
                    alt="Blockchain"
                    {...size}
                  />
                </a>
                <div className="logo">
                  <Blockchain />
                </div>
              </div>
              <div className="col">
                <a href="https://plot.ly/">
                  <Image
                    src="/static/images/showcases/plotly.jpg"
                    alt="Plotly"
                    {...size}
                  />
                </a>
                <div className="logo plotly-logo">
                  <Plotly />
                </div>
              </div>
              <div className="col">
                <a href="https://material-ui.com/">
                  <Image
                    src="/static/images/showcases/material-ui.jpg"
                    alt="Material UI"
                    {...size}
                  />
                </a>
                <div className="logo">
                  <Material />
                </div>
              </div>
              <div className="col">
                <a href="https://blockstack.org/">
                  <Image
                    src="/static/images/showcases/blockstack.png"
                    alt="Blockstack"
                    {...size}
                  />
                </a>
                <div className="logo">
                  <Blockstack />
                </div>
              </div>
            </Carousel>
          );
        }}
      </MediaQueryConsumer>
    </div>
    <style jsx>
      {`
        h4 {
          margin: 0;
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 2rem;
        }

        .left-container {
          text-align: center;
          align-items: center;
        }

        .logo {
          display: flex;
          justify-content: center;
          width: 12.5rem;
        }

        .plotly-logo {
          width: 7rem;
        }

        .col :global(img) {
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
        }

        .col :global(img:hover) {
          box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1),
            0px 10px 10px rgba(0, 0, 0, 0.08);
        }

        .col :global(figure) {
          margin: 0;
        }

        .divider {
          width: calc(100% - 2rem);
          max-width: 62rem;
          border-bottom: 1px solid #eaeaea;
          margin: 6rem 0 3rem 0;
        }

        @media screen and (max-width: 960px) {
          .divider {
            display: none;
          }
        }
      `}
    </style>
  </Container>
);
