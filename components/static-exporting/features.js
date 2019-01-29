import Container from '../container';
import SectionHeader from '../section-header';
import Checkmark from '../icons/checkmark';

export default () => (
  <Container padding>
    <div className="center">
      <div className="max-width">
        <SectionHeader
          title="Best in Class Developer Experience"
          description="Next.js puts development ergonomics front and center. Exporting is as easy
      as running a single command — no configuration necessary."
        />
      </div>
    </div>

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
    <style jsx>
      {`
        h4 {
          font-size: 1rem;
          margin: 0;
        }

        ul {
          display: flex;
          flex: 1;
          justify-content: center;
          list-style-type: none;
        }

        li {
          display: flex;
          align-items: center;
          margin: 0 2rem 1rem 2rem;
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
      `}
    </style>
  </Container>
);
