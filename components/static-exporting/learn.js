import Container from '../container';
import Button from '../button';

export default () => (
  <Container padding wide gray>
    <div className="flex">
      <div className="col">
        <h2>Powerful Features, Out of the box</h2>

        <div className="content">
          <p>
            Just because it’s a static site, doesn’t mean it should act like it.
            With automatic code-splitting, dynamic imports, and page
            prefetching, Next.js creates static sites that load fast and feel
            fluid.
          </p>
        </div>

        <div>
          <Button invert href="/learn">
            Learn Next.js
          </Button>
        </div>
      </div>

      <div className="learn-img" />
    </div>
    <style jsx>{`
      .flex {
        display: flex;
        justify-content: center;
      }

      .flex > div {
        margin: 0 2rem;
      }

      .col {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .content {
        margin: 3rem 0;
        max-width: 25rem;
      }

      .learn-img {
        user-select: none;
        user-drag: none;
        width: 500px;
        height: 385px;
        background-color: red;
      }
    `}</style>
  </Container>
);
