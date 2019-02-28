import Container from '../container';
import StyledComponents from './svg/styled-components';
import Linaria from './svg/linaria';
import Radium from './svg/radium';
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
        <div className="flex">
          <StyledComponents />
          <Linaria />
        </div>
        <div className="flex">
          <Radium />
          <Emotion />
        </div>
      </div>
    </div>

    <style jsx>
      {`
        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top: 1px solid rgba(0,0,0,0.1);
          padding: 4rem 0;
        }

        .flex {
          display: flex;
          align-items: center;
          opacity: 0.3;
        }

        .flex > :global(svg) {
          margin: 0 2.25rem;
        }

        .content {
          margin: 0 0 2.5rem 0;
          max-width: 40rem;
        }

        .icons {
          display: flex;
        }

        @media screen and (max-width: 960px) {
          .content {
            max-width: 27rem;
          }
        }

        @media screen and (max-width: 640px) {
          .icons {
            flex-direction: column;
          }
          .flex {
            justify-content: space-between;
            width: 16rem;
          }
          .flex:last-child {
            margin: 2.5rem auto 0;
            flex-direction: row-reverse;
            width: 12rem;
          }
          .flex > :global(svg) {
            margin: 0;
          }

          .content {
            margin: 0 1rem 2.5rem 1rem;
          }
        }
      `}
    </style>
  </Container>
);
