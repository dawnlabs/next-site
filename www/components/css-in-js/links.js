import Container from '../container'
import Button from '../button'

export default () => (
  <div>
    <Container padding>
      <div className="placeholder" />
      <div className="flex">
        <div className="column">
          <h3 className="f3 fw6">Miniscule Runtime</h3>
          <p>
            <code>styled-jsx</code> adds a tiny payload (3kb gzipped) to your bundle, compared to other CSS-in-JS
            solutions that ship 5-10 times that.
          </p>
          <Button href="/showcase">View Showcase</Button>
        </div>

        <div className="column">
          <h3 className="f3 fw6">Componentize Everything</h3>
          <p>
            Stop worrying about breaking your app by tweaking styles. With CSS-in-JS, the problems associated with
            modularizing and scoping your CSS all vanish.
          </p>
          <Button href="/docs">View Full Documentation</Button>
        </div>

        <div className="column">
          <h3 className="f3 fw6">Just Write CSS</h3>
          <p>
            Harness the full power of CSS using the syntax you are used to, while styled-jsx manages the annoying parts
            like vendor prefixing so you don't have to.
          </p>
          <Button href="#">Learn Next.js</Button>
        </div>
      </div>
    </Container>
    <style jsx>
      {`
        .placeholder {
          height: 5rem;
        }

        code {
          color: rgb(212, 0, 255);
        }

        .flex {
          display: flex;
          margin: 0 -1.5rem;
        }

        @media screen and (max-width: 960px) {
          .flex {
            flex-direction: column;
            align-items: center;
          }

          .column {
            text-align: center;
            margin-bottom: 3rem;
            max-width: 20rem;
          }

          .column:last-child {
            margin-bottom: 0;
          }
        }
      `}
    </style>
  </div>
)
