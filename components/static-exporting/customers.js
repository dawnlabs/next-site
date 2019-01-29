import Container from '../container';
import Checkmark from '../icons/checkmark';
import Blockchain from '../icons/companies/blockchain';

export default () => (
  <Container padding wide>
    <div className="row">
      <div className="center">
        <h2>{`Who's Using Static Next.js`}</h2>
        <div className="whos-using-img" />
        <Blockchain />
      </div>

      <div className="divider" />

      <div>
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
        .whos-using-img {
          user-select: none;
          user-drag: none;
          height: 332px;
          width: 487px;
          background: url(/static/images/whos-using.png);
          background-repeat: no-repeat;
          background-size: contain;
        }

        .divider {
          height: 24rem;
          border-right: 1px solid #eaeaea;
          margin: 0 8rem;
        }

        .row {
          align-items: flex-start;
          justify-content: center;
          display: flex;
        }

        .center {
          text-align: center;
        }

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
      `}
    </style>
  </Container>
);
