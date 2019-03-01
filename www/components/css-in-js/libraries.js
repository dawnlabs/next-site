import Container from '../container';
import StyledComponents from './svg/styled-components';
import Emotion from './svg/emotion';

export default () => (
  <Container wide center>
    <div className="col">
      <h2 className="f0 fw6">CSS for React that Just Works</h2>

      <div className="content">
        <p>
          Next.js provides styled-jsx out-of-the-box, with zero setup required,
          so you can stop endlessly configuring your tools and get back to
          building beautiful pages. Have another library of choice? Next.js also
          works great with every popular CSS-in-JS solution.
        </p>
      </div>

      <div className="icons">
        <a href="https://github.com/zeit/next.js/tree/canary/examples/with-styled-components/">
          <StyledComponents />
        </a>
        <a href="https://github.com/zeit/next.js/tree/canary/examples/with-fela/">
          <img src="/static/images/icons/fela.jpg" alt="fela" height={57.6} />
        </a>
        <a href="https://github.com/zeit/next.js/tree/canary/examples/with-emotion/">
          <Emotion />
        </a>
      </div>
    </div>

    <style jsx>
      {`
        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding: 4rem 0;
        }

        .icons {
          display: flex;
          align-items: center;
        }

        .icons a {
          display: block;
          cursor: pointer;
          margin: 0 2.25rem;
          opacity: 0.3;
        }

        .icons a:hover {
          opacity: 1;
        }

        .content {
          margin: 0 0 2.5rem 0;
          max-width: 40rem;
        }

        @media screen and (max-width: 960px) {
          .content {
            max-width: 27rem;
          }
        }

        @media screen and (max-width: 640px) {
          .icons a {
            margin: 0 1rem;
          }

          .content {
            margin: 0 1rem 2.5rem 1rem;
          }
        }
      `}
    </style>
  </Container>
);
