import Container from '../container';
import SectionHeader from '../section-header'
import Discovery from './svg/discovery'
import Performance from './svg/performance'
import Lightning from './svg/lightning'

const Circle = ({ children }) => (
  <div className="circle">
    {children}
    <style jsx>
      {`
        .circle {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          width: 64px;
          height: 64px;
          background-color: #fff;
          border-radius: 32px;
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.24);
        }
      `}
    </style>
  </div>
)

export default () => (
  <Container padding>
    <SectionHeader
      anchor="benefits"
      title="Leave the Heavy Lifting to the Servers"
      description={`Get your site to users faster, all while saving money, time, and headaches`}
    />

    <div className="flex">
      <div className="col">
        <Circle><Performance /></Circle>
        <h3 className="f3 fw6">
          Superior Performance
        </h3>
        <p>
          On slower devices, rendering an initial page can take a long time and lead to a degraded experience.
          By offloading the computation to a more powerful server, you minimize the time users spend waiting and
          ensure your conversion rate does not suffer.
        </p>
      </div>
      <div className="placeholder" />
    </div>

    <hr />

    <div className="flex">
      <div className="col">
        <Circle><Discovery /></Circle>
        <h3 className="f3 fw6">Optimized for Discovery</h3>
        <p>
          Server-side rendering guarantees your pages are easily indexable by search engines and preview able on social media platforms.
          Even web crawlers (Google) struggle to account for client-side routing solutions.
          Take your SEO to the next level and sidestep the issue entirely with Next.js.
        </p>
      </div>

      <hr />

      <div className="col">
        <Circle><Lightning /></Circle>
        <h3 className="f3 fw6">Lightning Fast Delivery</h3>
        <p>
          Prefetching initial data and building pages on the server drastically reduces the number of round trips required to view your site.
          This translates to lower latency and reduced bandwidth consumption. Both of which are essential for strong mobile experiences.
        </p>
      </div>
    </div>

    <style jsx>
      {`
        hr {
          margin: 0;
          align-self: stretch;
        }

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .flex > hr {
          min-height: 100%;
        }

        .flex:first-child > .col {
          margin-bottom: 4rem;
        }

        .flex:last-child > .col {
          margin-top: 4rem;
        }

        .col {
          display: flex;
          flex-direction: column;
          max-width: 28rem;
        }


        .placeholder {
          width: 480px;
          height: 312px;
          background: red;
        }

        @media screen and (max-width: 960px) {
          .placeholder {
            display: none;
          }

          .flex {
            flex-direction: column;
            align-items: center;
          }

          .flex > hr {
            display: block;
          }

          .col {
            margin: 3rem;
          }
        }
      `}
    </style>
  </Container>
)