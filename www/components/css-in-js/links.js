import Container from '../container'
import Button from '../button'
import Checkmark from '../icons/checkmark'

export default () => (
  <Container padding>
    <div className="flex">
      <div className="container">
        <div className="col">
          <h3 className="f3 fw6">Miniscule Runtime</h3>
          <p>
            <code>styled-jsx</code> adds a tiny payload (3kb gzipped) to your bundle, compared to other CSS-in-JS
            solutions that ship 5-10 times that.
          </p>
          <Button href="/showcase">View Showcase</Button>
        </div>
        <div className="col">
          <h3 className="f3 fw6">Componentize Everything</h3>
          <p>
            Stop worrying about style tweaks breaking your app. CSS-in-JS with Next.js eliminates the problems
            associated with modularizing and scoping your CSS. By colocating styles and functionality, components become
            easier to understand and scale.
          </p>
          <Button href="/docs">View Full Documentation</Button>
        </div>
      </div>

      <div className="divider" />

      <div className="container">
        <div className="col">
          <h3 className="f3 fw6">Just Write CSS</h3>
          <p>
            Harness the full power of CSS using the syntax you are used to, while styled-jsx manages the annoying parts
            like vendor prefixing so you don't have to.
          </p>
          <Button href="#">Learn Next.js</Button>
        </div>

        <div className="list-container">
          <h4>Includes Support For</h4>
          <ul>
            <li>
              <Checkmark inverse />
              <span>Dynamic Styles</span>
            </li>
            <li>
              <Checkmark inverse />
              <span>Preprocessor Plugins</span>
            </li>
            <li>
              <Checkmark inverse />
              <span>Server Side Style Rendering</span>
            </li>
            <li>
              <Checkmark inverse />
              <span>Stylesheet Imports</span>
            </li>
            <li>
              <Checkmark inverse />
              <span>Global Styles</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        h4 {
          text-transform: uppercase;
          font-size: 12.6px;
          font-weight: 600;
          margin: 0.5rem 0 2rem 0;
          color: #999999;
        }

        ul {
          padding: 0;
          margin: -0.5rem 0 0 0;
          list-style-type: none;
        }

        li {
          display: flex;
          align-items: center;
        }

        li:not(:last-child) {
          margin-bottom: 0.5rem;
        }

        li > span {
          font-weight: 600;
          margin-left: 0.75rem;
        }

        code {
          color: rgb(212, 0, 255);
        }

        .flex {
          display: flex;
          justify-content: space-between;
          max-width: 58rem;
          margin: 0 auto;
        }

        .container {
          display: flex;
          flex-direction: column;
        }

        .col:first-child {
          height: 12rem;
          margin: 0 0 6rem 0;
        }

        .col {
          display: flex;
          flex-direction: column;
          max-width: 23rem;
        }

        .divider {
          width: 1px;
          min-height: 100%;
          background: rgba(0, 0, 0, 0.1);
        }

        @media screen and (max-width: 960px) {
          .container {
            align-items: center;
          }
          .flex {
            flex-direction: column;
            justify-content: flex-start;
          }
          .col {
            align-items: center;
            margin: 2.5rem 0 !important;
            text-align: center;
          }
          .list-container {
            margin: 2.5rem 0 0 0;
          }
          .divider {
            display: none;
          }
        }
      `}
    </style>
  </Container>
)
