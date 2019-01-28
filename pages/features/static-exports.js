import Page from '../../components/page';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Container from '../../components/container';
import Footer from '../../components/footer';
import Button from '../../components/button';
import { InternalLink } from '../../components/text/link';
import Checkmark from '../../components/icons/checkmark';
import Blockchain from '../../components/icons/companies/blockchain';
import { MediaQueryConsumer } from '../../components/media-query';

export default () => (
  <Page>
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={64 + (isMobile ? 32 : 0)}
          shadow={!isMobile}
          defaultActive
        >
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Container padding center dotBackground>
      <h1>Static Sites, No Compromise</h1>
      <div className="margin-v-m">
        <p>
          Leverage the speed and simplicity of static <br /> sites with the full
          power of <b>Next.js</b>
        </p>
      </div>

      <Button invert>Learn More</Button>
    </Container>

    <Container wide dark>
      <div className="row justify-space-between width-l">
        <div className="padding-s">
          <span>Faster Delivery</span>
        </div>

        <div className="padding-s">
          <span>Modern Frontend Features</span>
        </div>

        <div className="padding-s">
          <span>No Lock-In</span>
        </div>

        <div className="padding-s">
          <span>Painless Developer Workflow</span>
        </div>
      </div>

      <div>
        <div className="build-img" />
      </div>
    </Container>

    <div className="flex col center padding large">
      <h2>Ditch Your Server</h2>

      <h3 className="text-center f-reset fw4 subtitle width-m margin-v-s">
        Get your site to users faster, all while saving money, time, and
        headaches
      </h3>

      <div className="width-l row">
        <Container padding>
          <h3>Unrivaled Performance</h3>

          <div className="margin-v-s">
            <p>
              Static sites can be deployed to CDNs for minimal latency, zero
              server load, and faster global delivery.
            </p>
          </div>

          <InternalLink href="/showcase">View Showcase</InternalLink>
        </Container>

        <Container padding>
          <h3>Deploy Anywhere</h3>

          <div className="margin-v-s">
            <p>
              Host your static site cheaply and easily with any provider such as
              Now, Github Pages, or Amazon S3.
            </p>
          </div>

          <InternalLink href="/docs">View Full Documentation</InternalLink>
        </Container>

        <Container padding>
          <h3>Dead Simple</h3>

          <div className="margin-v-s">
            <p>
              With no moving parts, static sites are secure, effortless to
              maintain, and easy to reason about.
            </p>
          </div>

          <InternalLink href="/learn">Learn Next.js</InternalLink>
        </Container>
      </div>
    </div>

    <div>
      <div className="img earth-img" />
    </div>

    <Container padding wide gray>
      <div className="row justify-space-between width-l">
        <div>
          <h2>
            Powerful Features, <br /> Out of the box
          </h2>

          <div className="width-s margin-v">
            <p>
              Just because it’s a static site, doesn’t mean it should act like
              it. With automatic code-splitting, dynamic imports, and page
              prefetching, Next.js creates static sites that load fast and feel
              fluid.
            </p>
          </div>

          <Button invert>Learn Next.js</Button>
        </div>

        <div className="img switching-img" />
      </div>
    </Container>

    <div className="flex col center padding">
      <h2>Best in Class Developer Experience</h2>

      <h3 className="text-center f-reset fw4 subtitle width-m margin-v-s">
        Next.js puts development ergonomics front and center. Exporting is as
        easy as running a single command — no configuration necessary.
      </h3>

      <div className="center flex">
        <div className="center icon-row padding-s">
          <Checkmark inverse />
          <h4>File system-based routing</h4>
        </div>

        <div className="center icon-row padding-s">
          <Checkmark inverse />
          <h4>Hot-code reloading</h4>
        </div>

        <div className="center icon-row padding-s">
          <Checkmark inverse />
          <h4>Zero-config production builds</h4>
        </div>
      </div>
    </div>

    <Container padding wide gray>
      <div className="row width-l justify-space-between">
        <div className="img switching-img" />

        <div>
          <h2>No More Switching Frameworks</h2>

          <div className="width-s margin-v">
            <p>
              With the flexibility to target any frontend environment, choosing
              Next.js means your team can create static sites without needing to
              learn a new framework. If your requirements change down the road,
              Next.js makes the transition to a dynamic application a breeze.
            </p>
          </div>

          <Button invert>View Documentation</Button>
        </div>
      </div>
    </Container>

    <Container padding wide>
      <div className="row width-l justify-space-between align-start">
        <div className="flex justify-end">
          <div className="center col">
            <h2>Who's Using Static Next.js</h2>

            <div className="margin-v">
              <div className="img whos-using-img " />
            </div>

            <Blockchain />
          </div>
        </div>

        <div className="divider" />

        <div className="col flex">
          <h2>Perfect For</h2>

          <span className="margin-top">
            Static Next.js is a great choice for:
          </span>

          <ul className="perfect-for">
            <li className="icon-row">
              <Checkmark />
              <span>Landing pages</span>
            </li>

            <li className="icon-row">
              <Checkmark />
              <span>Blogs</span>
            </li>

            <li className="icon-row">
              <Checkmark />
              <span>Documentation and tutorials</span>
            </li>

            <li className="icon-row">
              <Checkmark />
              <span>Style guides</span>
            </li>

            <li className="icon-row">
              <Checkmark />
              <span>and more...</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>

    <Footer />
    <style jsx>
      {`
        p {
          margin: 0;
        }

        h3 {
          font-size: 1.2rem;
        }

        h4 {
          font-size: 1rem;
          margin: 0;
        }

        .row {
          display: flex;
        }
        .col {
          display: flex;
          flex-direction: column;
        }
        .flex {
          display: flex;
          flex: 1;
        }
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .justify-end {
          justify-content: flex-end;
        }
        .justify-space-between {
          justify-content: space-between;
        }
        .align-start {
          align-items: flex-start;
        }

        .text-center {
          text-align: center;
        }

        .width-s {
          max-width: 25rem;
        }
        .width-m {
          max-width: 40rem;
        }
        .width-l {
          margin: 0 auto;
          max-width: 64rem;
        }

        .padding {
          padding: 3rem;
        }
        .padding-s {
          padding: 2rem;
        }

        .margin-v {
          margin: 3rem 0;
        }
        .margin-v-m {
          margin: 2rem 0;
        }
        .margin-v-s {
          margin: 1rem 0 2rem 0;
        }
        .margin-top {
          margin-top: 3rem;
        }

        .img {
          user-drag: none;
          user-select: none;
        }

        .earth-img {
          height: 308px;
          max-width: 1006px;
          margin: auto;
          background: url(/static/images/earth.png);
          background-repeat: no-repeat;
          background-size: contain;
        }

        .build-img {
          height: 400px;
          max-width: 990px;
          margin: auto;
          background: url(/static/images/build.png);
          background-repeat: no-repeat;
          background-size: contain;
        }

        .whos-using-img {
          height: 332px;
          width: 487px;
          background: url(/static/images/whos-using.png);
          background-repeat: no-repeat;
          background-size: contain;
        }

        .switching-img {
          width: 500px;
          height: 385px;
          background-color: red;
        }

        .perfect-for {
          padding: 0;
          list-style-type: none;
        }

        .icon-row {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .icon-row span,
        .icon-row h4 {
          height: 2rem;
          margin-left: 0.5rem;
        }

        .divider {
          height: 24rem;
          border-right: 1px solid #eaeaea;
          margin: 0 8rem;
        }
      `}
    </style>
  </Page>
);
