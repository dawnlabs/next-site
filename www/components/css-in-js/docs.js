import Container from '../container'
import Button from '../button'

export default () => (
  <Container wide padding gray>
    <div className="flex">
      <div className="col">
        <h2 className="f0 fw6">Great Developer Tooling</h2>
        <div className="content">
          <p>
            Developing with <code>styled-jsx</code> is easier than ever with syntax highlighting for major editors like
            VSCode, WebStorm and VSCode, directly within your components. And with a simple plugin system, it's simple
            to use your favorite preprocessor like Sass, PostCSS, or Stylus.
          </p>
        </div>
        <div>
          <Button invert href="#">
            View Documentation
          </Button>
        </div>
      </div>

      <div className="placeholder" />
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
          margin: 0 0 1.5rem 0;
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
          margin: 0 0 2.5rem 0;
          max-width: 28rem;
        }

        .placeholder {
          width: 400px;
          height: 300px;
          background: red;
        }

        @media screen and (max-width: 960px) {
          h2 {
            margin-top: 1.5rem;
          }
          .flex {
            justify-content: initial;
            flex-direction: column-reverse;
          }
          .col {
            align-items: center;
            text-align: center;
          }
          .content {
            max-width: 27rem;
          }
        }

        @media screen and (max-width: 640px) {
          .content {
            margin: 0 1rem 2.5rem 1rem;
          }
        }
      `}
    </style>
  </Container>
)
