import Container from '../container';
import Button from '../button'

export default () => (
  <Container wide padding gray center>
    <h2 className="f0 fw6">Integrate Anywhere</h2>

    <div className="content">
      <p>
        Need a path for incremental adoption? No problem. Server-side rendering with Next.js <br />
        can be easily integrated with existing application runtimes such as Express and Electron.
      </p>
    </div>

    <Button invert href="/examples">See Examples</Button>

    <style jsx>
      {`
        p {
          margin: 0 1rem;
        }

        h2 {
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }

        .row {
          display: flex;
        }

        .content {
          margin-bottom: 7.5rem;
        }

        @media screen and (max-width: 640px) {
          br {
            display: none;
          }
        }
      `}
    </style>
  </Container>
)