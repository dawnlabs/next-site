import Container from '../container';
import Button from '../button';

import BoxOfFeatures from './svg/BoxOfFeatures';

export default () => (
  <Container padding wide gray>
    <div className="flex">
      <div className="col">
        <h2 className="f0 fw6">Powerful Features, Out of the Box</h2>

        <div className="content">
          <p>
            Just because it’s a static site, doesn’t mean it should act like it. With automatic
            code-splitting, dynamic imports, and page prefetching, Next.js creates static sites that
            load fast and feel fluid.
          </p>
        </div>

        <div>
          <Button invert href="/learn/excel/static-html-export">
            Learn Next.js
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="cover" />
        <BoxOfFeatures />
      </div>
    </div>
    <style jsx>{`
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
        margin-right: 3rem;
      }

      .content {
        margin: 1rem 0;
        max-width: 25rem;
      }

      .relative {
        position: relative;
      }

      .cover {
        background: linear-gradient(90deg, #f6f6f6 14.53%, rgba(255, 255, 255, 0) 35.16%),
          linear-gradient(360deg, #f6f6f6 0%, rgba(255, 255, 255, 0) 29.35%),
          linear-gradient(180deg, #f6f6f6 0%, rgba(246, 246, 246, 0) 32.92%);
        left: -3rem;
        position: absolute;
        width: calc(50vw + 6rem);
        height: 100%;
      }

      @media screen and (max-width: 640px) {
        .flex > :global(svg) {
          display: none;
        }

        .col {
          align-items: center;
          text-align: center;
          margin-right: 0;
        }
      }
    `}</style>
  </Container>
);
