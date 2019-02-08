import Container from '../container';
import SectionHeader from '../section-header'

export default () => (
  <Container padding>
    <SectionHeader
      anchor="benefits"
      title="Leave the Heavy Lifting to the Servers"
      description={`Get your site to users faster, all while saving money, time, and headaches`}
    />

    <div className="row">
      <div className="col">
        <h2>
          Superior Performance
        </h2>
        <p>
          On slower devices, rendering an initial page can take a long time and lead to a degraded experience.
          By offloading the computation to a more powerful server, you minimize the time users spend waiting and
          ensure your conversion rate does not suffer.
      </p>
      </div>
      <div className="placeholder" />
    </div>

    <hr />

    <div className="row">
      <div className="col">
        <h2>Optimized for Discovery</h2>
        <p>
          Server-side rendering guarantees your pages are easily indexable by search engines and preview able on social media platforms.
          Even web crawlers (Google) struggle to account for client-side routing solutions.
          Take your SEO to the next level and sidestep the issue entirely with Next.js.
        </p>
      </div>
      <div className="col">
        <h2>Lightning Fast Delivery</h2>
        <p>
          Prefetching initial data and building pages on the server drastically reduces the number of round trips required to view your site.
          This translates to lower latency and reduced bandwidth consumption. Both of which are essential for strong mobile experiences.
        </p>
      </div>
    </div>

    <style jsx>
      {`
        .row {
          display: flex;
          justify-content: space-between;
        }

        .col {
          display: flex;
          flex-direction: column;
          max-width: 448px;
        }

        .placeholder {
          width: 480px;
          height: 312px;
          background: red;
        }
      `}
    </style>
  </Container>
)