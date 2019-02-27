import Container from '../container';
import StyledComponents from './svg/styled-components';
import Linaria from './svg/linaria';
import Radium from './svg/radium';
import Emotion from './svg/emotion';

export default () => (
  <Container wide padding center>
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

      <div className="row">
        <StyledComponents />
        <Linaria />
        <Radium />
        <Emotion />
      </div>
    </div>

    <style jsx>
      {`
        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .row {
          display: flex;
          opacity: 0.3;
        }

        .row > :global(svg) {
          margin: 0 2.25rem;
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
          .row {
            display: none;
          }
          .content {
            margin: 0 1rem 2.5rem 1rem;
          }
        }
      `}
    </style>
  </Container>
);
