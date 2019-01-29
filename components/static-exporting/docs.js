import Container from '../container';
import Button from '../button';

export default () => (
  <Container padding wide gray>
    <div className="flex">
      <div className="switching-img" />

      <div className="col">
        <h2>No More Switching Frameworks</h2>
        <div className="content">
          <p>
            With the flexibility to target any frontend environment, choosing
            Next.js means your team can create static sites without needing to
            learn a new framework. If your requirements change down the road,
            Next.js makes the transition to a dynamic application a breeze.
          </p>
        </div>
        <div>
          <Button invert href="/docs">
            View Documentation
          </Button>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .flex {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 1rem;
        }

        .col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 2rem;
        }

        .switching-img {
          user-select: none;
          user-drag: none;
          width: 500px;
          height: 300px;
          background-color: red;
        }

        .content {
          margin: 2rem 0;
          max-width: 25rem;
        }

        @media screen and (max-width: 640px) {
          .switching-img {
            display: none;
          }

          .col {
            align-items: center;
            text-align: center;
            margin-left: 0;
          }

          .content {
            margin: 1rem 0;
          }
        }
      `}
    </style>
  </Container>
);
