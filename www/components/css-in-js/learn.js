import Container from '../container'
import Button from '../button'

export default () => (
  <Container padding center>
    <div className="col">
      <h2 className="f0 fw6">The Best Abstraction is No Abstraction</h2>

      <div className="content">
        <p>
          Next.js provides <code>styled-jsx</code> for you out-of-the-box, with zero setup required, so you can stop
          endlessly configuring your tools and get back to building beautiful pages. Even with server-side rendering you
          don't have to configure a thing.
        </p>
      </div>

      <Button invert href="#">
        Learn Next.js
      </Button>
    </div>

    <style jsx>
      {`
        p {
          margin: 0;
          max-width: 43.5rem;
        }

        h2 {
          margin: 0.5rem 0 1.5rem;
          line-height: 1.3;
        }

        code {
          color: rgb(212, 0, 255);
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .content {
          max-width: 38rem;
          margin: 0 1rem 2.5rem 1rem;
        }
      `}
    </style>
  </Container>
)
