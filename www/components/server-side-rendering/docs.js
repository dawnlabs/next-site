import Container from '../container'
import Button from '../button'
import Abstraction from './svg/abstraction'

export default () => (
  <Container wide padding>
    <div className="flex">
      <div className="col">
        <h2 className="f0 fw6">The Right Abstraction</h2>
        <div className="content">
          <p>
            Next.js extends React's lifecycle with <code>getInitialProps</code> to provide a powerful hook for loading a
            page's initial data. With a single place to prepopulate page context, server-side rendering with Next.js
            seamlessly integrates with any existing data fetching strategy.
          </p>
        </div>
        <div>
          <Button invert href="/docs#fetching-data-and-component-lifecycle">
            View Documentation
          </Button>
        </div>
      </div>

      <div className="abstraction">
        <Abstraction />
      </div>
    </div>
    <style jsx>
      {`
        p {
          margin: 0;
        }

        code {
          color: rgb(212, 0, 255);
        }

        h2 {
          line-height: 1.3;
        }

        .flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .content {
          margin: 1rem 1rem 2.5rem 1rem;
          max-width: 25rem;
        }

        .abstraction {
          margin-top: -24rem;
        }

        @media screen and (max-width: 960px) {
          .flex {
            justify-content: center;
          }

          .abstraction {
            display: none;
          }

          .col {
            align-items: center;
            text-align: center;
          }
        }
      `}
    </style>
  </Container>
)
