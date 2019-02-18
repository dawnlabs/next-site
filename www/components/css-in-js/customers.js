import Container from '../container'
import SectionHeader from '../section-header'
import Carousel from '../carousel'

import Scale from '../icons/companies/scale'
import Hulu from '../icons/companies/hulu'
import Ticketmaster from '../icons/companies/ticketmaster'
import Auth0 from '../icons/companies/auth0'
import Replit from '../icons/companies/replit'
import Nike from '../icons/companies/nike'
import Monday from '../icons/companies/monday'
import Kap from '../icons/companies/kap'

export default () => (
  <Container padding wide>
    <div className="first col">
      <SectionHeader id="customers" title="Who's Using CSS-in-JS" />

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
          <a href="https://ticketmaster.com/">
            <img src="/static/images/showcases/ticketmaster.jpg" alt="Ticketmaster" />
          </a>
          <div className="logo">
            <Ticketmaster />
          </div>
        </div>
        <div className="col">
          <a href="https://monday.com/">
            <img src="/static/images/showcases/monday.jpg" alt="Monday" />
          </a>
          <div className="logo">
            <Monday />
          </div>
        </div>
        <div className="col">
          <a href="https://nike.com/help/">
            <img src="/static/images/showcases/nike.jpg" alt="Nike" />
          </a>
          <div className="logo">
            <Nike />
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
          <a href="https://auth0.com/">
            <img src="/static/images/showcases/showcases-03.jpg" alt="Auth0" />
          </a>
          <div className="logo">
            <Auth0 />
          </div>
        </div>
        <div className="col">
          <a href="https://repl.it/">
            <img src="/static/images/showcases/repl.it.jpg" alt="Repl.it" />
          </a>
          <div className="logo repl-logo">
            <Replit />
          </div>
        </div>
        <div className="col">
          <a href="https://getkap.co/">
            <img src="/static/images/showcases/kap.jpg" alt="Kap" />
          </a>
          <div className="logo">
            <Kap />
          </div>
        </div>
      </Carousel>
    </div>
    <style jsx>
      {`
        h4 {
          margin: 0;
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
        }
        img:hover {
          box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.08);
        }
        .first.col {
          margin-bottom: 2rem;
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
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

        @media screen and (max-width: 960px) {
          img {
            flex-basis: 10rem;
            width: 19rem;
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
)
