import Container from '../container';
import Checkmark from '../icons/checkmark';
import Blockchain from '../icons/companies/blockchain';

export default () => (
  <Container padding wide>
    <div className="row">
      <div className="left-container">
        <h2>{`Who's Using Static Next.js`}</h2>
        <div className="whos-using-img" />
        <div className="logo">
          <Blockchain />
        </div>
      </div>

      <div className="divider" />

      <div className="right-container">
        <h2>Perfect For</h2>
        <div>Static Next.js is a great choice for:</div>
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
          <li>
            <Checkmark />
            <span>and more...</span>
          </li>
        </ul>
      </div>
    </div>
    <style jsx>
      {`
        h2 + div {
          margin-top: 3rem;
        }

        ul {
          padding: 0;
          list-style-type: none;
        }

        li {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        li span {
          height: 2rem;
          margin-left: 0.5rem;
        }

        .left-container,
        .right-container {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .left-container {
          text-align: center;
          align-items: center;
        }

        .whos-using-img {
          display: flex;
          flex-shrink: 0;
          flex-basis: 300px;
          width: 100%;
          user-select: none;
          user-drag: none;
          background: url(/static/images/whos-using.png);
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }

        .divider {
          height: 24rem;
          border-right: 1px solid #eaeaea;
          margin: 0 4rem;
        }

        .row {
          align-items: flex-start;
          justify-content: center;
          display: flex;
          margin: 0 1rem;
        }

        @media screen and (max-width: 960px) {
          .divider,
          .right-container {
            display: none;
          }

          .logo {
            display: flex;
            justify-content: center;
            width: 60%;
          }
        }
      `}
    </style>
  </Container>
);
