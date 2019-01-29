import Container from '../container';

export default () => (
  <Container wide dark center>
    <div className="content">
      <div className="row">
        <span>Faster Delivery</span>

        <span>Modern Frontend Features</span>

        <span>No Lock-In</span>

        <span>Painless Developer Workflow</span>
      </div>
    </div>

    <div>
      <div className="build-img" />
    </div>

    <style jsx>
      {`
        span {
          padding: 0 2rem;
        }

        .content {
          display: flex;
          justify-content: center;
        }

        .row {
          display: flex;
          max-width: 64rem;
          padding: 2rem;
        }

        .build-img {
          height: 314px;
          max-width: 786px;
          margin: auto;
          background: url(/static/images/build.png);
          background-repeat: no-repeat;
          background-size: contain;
        }
      `}
    </style>
  </Container>
);
