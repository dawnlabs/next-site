import Container from '../container';
import SectionHeader from '../section-header';
import Carousel from '../carousel';

import Jet from '../icons/companies/jet';
import Hulu from '../icons/companies/hulu';
import ATT from '../icons/companies/att';
import Twitch from '../icons/companies/twitch';
import Binance from '../icons/companies/binance';
import Staples from '../icons/companies/staples';
import Framer from '../icons/companies/framer';
import Boosted from '../icons/companies/boosted';
import Marvel from '../icons/companies/marvel';
import Deliveroo from '../icons/companies/deliveroo';
import EuroVision from '../icons/companies/eurovision.js';

export default () => (
  <Container padding wide>
    <div className="col">
      <SectionHeader id="customers" title="Who's Using Server-Side Rendering" />

      <Carousel>
        <div className="col">
          <a href="https://att.com">
            <img src="/static/images/showcases/att.jpg" alt="ATT" />
          </a>
          <div className="logo">
            <ATT />
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
          <a href="https://binance.com/">
            <img src="/static/images/showcases/binance.jpg" alt="Binance" />
          </a>
          <div className="logo">
            <Binance />
          </div>
        </div>
        <div className="col">
          <a href="https://www.staples.com/">
            <img src="/static/images/showcases/staples.jpg" alt="Staples" />
          </a>
          <div className="logo">
            <Staples />
          </div>
        </div>
        <div className="col">
          <a href="https://store.framer.com/">
            <img src="/static/images/showcases/framer.jpg" alt="Framer Store" />
          </a>
          <div className="logo">
            <Framer />
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
          <a href="https://marvel.com/">
            <img src="/static/images/showcases/marvel.jpg" alt="Marvel" />
          </a>
          <div className="logo">
            <Marvel />
          </div>
        </div>
        <div className="col">
          <a href="https://deliveroo.co.uk/">
            <img src="/static/images/showcases/deliveroo.jpg" alt="Deliveroo" />
          </a>
          <div className="logo">
            <Deliveroo />
          </div>
        </div>
        <div className="col">
          <a href="https://eurovision.tv/">
            <img src="/static/images/showcases/eurovision.jpg" alt="EuroVision" />
          </a>
          <div className="logo">
            <EuroVision />
          </div>
        </div>
        <div className="col">
          <a href="https://jet.com">
            <img src="/static/images/showcases/jet.jpg" alt="Jet" />
          </a>
          <div className="logo">
            <Jet />
          </div>
        </div>
        <div className="col">
          <a href="https://hulu.com">
            <img src="/static/images/showcases/showcases-17.jpg" alt="Hulu" />
          </a>
          <div className="logo">
            <Hulu />
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
          max-height: 20.5rem;
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
        }

        img:hover {
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
            max-height: 10rem;
            width: 19rem;
          }

          .divider {
            display: none;
          }
        }

        @media screen and (max-width: 640px) {
          img {
            max-height: 8rem;
            width: 14rem;
          }
        }
      `}
    </style>
  </Container>
);
