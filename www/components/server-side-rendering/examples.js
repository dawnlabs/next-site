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
          Need a path for incremental adoption? No problem. Server-side rendering with Next.js can
          be easily integrated with existing application runtimes such as Express and Electron. With
          the ability to use Next.js programmatically, it's simple to incorporate it into your
          current applications.
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
          max-width: 43.5rem;
        }

        h2 {
          margin: 0.5rem 0 1.5rem;
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
          margin-top: 1rem;
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
