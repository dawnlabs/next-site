import Container from '../container';
import SectionHeader from '../section-header';
import Carousel from '../carousel';

import Invision from '../icons/companies/invision';
import Hulu from '../icons/companies/hulu';
import Boosted from '../icons/companies/boosted';
import Scale from '../icons/companies/scale';
import OpenCollective from '../icons/companies/opencollective';
import Twitch from '../icons/companies/twitch';
import Expo from '../icons/companies/expo';
import GiveCrypto from '../icons/companies/givecrypto';

export default () => (
  <Container padding wide>
    <div className="col">
      <SectionHeader id="customers" title="Who's Using Server-Side Rendering" />

      <Carousel>
        <div className="col">
          <a href="https://hulu.com">
            <img src="/static/images/showcases/showcases-17.jpg" alt="Hulu" />
          </a>
          <div className="logo">
            <Hulu />
          </div>
        </div>
        <div className="col">
          <a href="https://boostedboards.com/">
            <img src="/static/images/showcases/boosted.jpg" alt="Boosted Boards" />
          </a>
          <div className="logo">
            <Boosted />
          </div>
        </div>
        <div className="col">
          <a href="https://scale.ai/">
            <img src="/static/images/showcases/showcases-04.jpg" alt="Scale ai" />
          </a>
          <div className="logo">
            <Scale />
          </div>
        </div>
        <div className="col">
          <a href="https://twitch.tv/">
            <img src="/static/images/showcases/twitch.jpg" alt="Twitch" />
          </a>
          <div className="logo">
            <Twitch />
          </div>
        </div>
        <div className="col">
          <a href="https://opencollective.com/">
            <img src="/static/images/showcases/showcases-06.jpg" alt="Open Collective" />
          </a>
          <div className="logo">
            <OpenCollective />
          </div>
        </div>
        <div className="col">
          <a href="https://expo.io/">
            <img src="/static/images/showcases/showcases-13.jpg" alt="Expo" />
          </a>
          <div className="logo">
            <Expo />
          </div>
        </div>
        <div className="col">
          <a href="https://givecrypto.org/">
            <img src="/static/images/showcases/givecrypto.jpg" alt="GiveCrypto" />
          </a>
          <div className="logo">
            <GiveCrypto />
          </div>
        </div>
        <div className="col">
          <a href="https://www.invisionapp.com/">
            <img src="/static/images/showcases/showcases-16.jpg" alt="inVision" />
          </a>
          <div className="logo">
            <Invision />
          </div>
        </div>
      </Carousel>
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
          margin-top: 2rem;
          width: 12.5rem;
        }

        img {
          display: flex;
          flex: 1;
          flex-basis: 20.5rem;
          width: 36.5rem;
          user-select: none;
          user-drag: none;
          background-position: center top;
          background-size: cover;
          background-repeat: no-repeat;
          margin-top: -2rem;
          cursor: pointer;
          border-radius: 7px;
          box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.08);
          opacity: 0.95;
        }

        img:hover {
          opacity: 1;
          box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.08);
        }

        .divider {
          width: calc(100% - 2rem);
          max-width: 62rem;
          border-bottom: 1px solid #eaeaea;
          margin: 6rem 0 3rem 0;
        }

        @media screen and (max-width: 960px) {
          img {
            flex-basis: 10rem;
            width: 19rem;
          }

          .divider {
            display: none;
          }
        }

        @media screen and (max-width: 640px) {
          img {
            flex-basis: 8rem;
            width: 14rem;
          }
        }
      `}
    </style>
  </Container>
);
