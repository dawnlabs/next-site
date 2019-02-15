import Container from '../container'
import Button from '../button'
import { Integrate } from './icons'

export default () => (
  <Container wide padding gray center>
    <div className="col">
      <div className="icon">
        <Integrate />
      </div>

      <h2 className="f0 fw6">Integrate Anywhere</h2>

      <div className="content">
        <p>
          Need a path for incremental adoption? No problem. Server-side rendering with Next.js <br />
          can be easily integrated with existing application runtimes such as Express and Electron.
        </p>
      </div>

      <Button invert href="https://github.com/zeit/next.js/tree/master/examples">
        See Examples
      </Button>
    </div>

    <style jsx>
      {`
        p {
          margin: 0;
        }

        h2 {
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .icon {
          display: flex;
          justify-content: center;
          transform: scale(1.25);
        }

        .content {
          margin: 0 1rem 2.5rem 1rem;
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
