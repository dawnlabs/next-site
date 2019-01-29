import Container from '../container';
import SectionHeader from '../section-header';
import { GenericLink } from '../text/link';

export default () => (
  <div>
    <Container padding>
      <SectionHeader
        title="Ditch Your Server"
        description="Get your site to users faster, all while saving money, time, and headaches"
      />

      <div className="flex">
        <div className="column">
          <h3>Unrivaled Performance</h3>
          <p>
            Static sites can be deployed to CDNs for minimal latency, zero
            server load, and faster global delivery.
          </p>
          <GenericLink href="/showcase">View Showcase</GenericLink>
        </div>

        <div className="column">
          <h3>Deploy Anywhere</h3>
          <p>
            Host your static site cheaply and easily with any provider such as
            Now, Github Pages, or Amazon S3.
          </p>
          <GenericLink href="/docs">View Full Documentation</GenericLink>
        </div>

        <div className="column">
          <h3>Dead Simple</h3>
          <p>
            With no moving parts, static sites are secure, effortless to
            maintain, and easy to reason about.
          </p>
          <GenericLink href="/learn">Learn Next.js</GenericLink>
        </div>
      </div>
    </Container>
    <div className="img earth-img" />
    <style jsx>
      {`
        .flex {
          display: flex;
        }

        .earth-img {
          user-drag: none;
          user-select: none;
          height: 308px;
          max-width: 1006px;
          background: url(/static/images/earth.png);
          background-repeat: no-repeat;
          background-size: contain;
          background-position: bottom;
        }

        @media screen and (max-width: 960px) {
          .flex {
            flex-direction: column;
            align-items: center;
          }

          .column {
            text-align: center;
            margin-bottom: 3rem;
            max-width: 20rem;
          }
        }

        @media screen and (max-width: 640px) {
          .earth-img {
            height: 200px;
          }
        }
      `}
    </style>
  </div>
);
