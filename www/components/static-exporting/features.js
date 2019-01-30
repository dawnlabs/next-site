import Container from "../container";
import SectionHeader from "../section-header";
import Checkmark from "../icons/checkmark";

export default () => (
  <Container padding>
    <div className="center">
      <div className="max-width">
        <SectionHeader
          title="Best in Class Developer Experience"
          description={`
          Next.js puts development ergonomics front and center. Exporting is as easy
          as running a single command — no configuration necessary.`}
        />
      </div>
    </div>

    <div className="list-container">
      <ul>
        <li>
          <Checkmark inverse />
          <h4>File system-based routing</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Hot-code reloading</h4>
        </li>
        <li>
          <Checkmark inverse />
          <h4>Zero-config production builds</h4>
        </li>
      </ul>
    </div>

    <style jsx>
      {`
        h4 {
          font-size: 1rem;
          margin: 0;
        }

        ul {
          display: flex;
          margin: 0;
          padding: 0;
          justify-content: center;
          list-style-type: none;
        }

        li {
          display: flex;
          flex: 1 0 19rem;
          justify-content: center;
          align-items: center;
        }

        li h4 {
          height: 2rem;
          margin-left: 0.5rem;
        }

        .max-width {
          max-width: 32rem;
        }

        .center {
          display: flex;
          justify-content: center;
        }

        @media screen and (max-width: 960px) {
          ul {
            flex-direction: column;
            justify-content: flex-start;
          }

          li {
            flex-basis: 0;
            justify-content: flex-start;
            margin: 2rem 0;
          }

          .list-container {
            display: flex;
            justify-content: center;
          }
        }
      `}
    </style>
  </Container>
);
