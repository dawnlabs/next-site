import Container from '../container';

export default () => (
  <Container wide padding gray>
    <div className="flex">
      <div className="placeholder" />

      <div className="col">
        <h2 className="f0 fw6">
          Infinitely Scalable
        </h2>

        <div className="content">
          <p>
            When it comes to dynamic applications, scalability is often a concern. Fortunately, Next.js supports serverless builds out of the box.
            Simply set the target and Next.js will output an SSR-equipped lambda for each page which can be instantly deployed to platforms like Now 2.0.
          </p>
        </div>
      </div>

    </div>
    <style jsx>
      {`
        .placeholder {
          width: 200px;
          height: 200px;
          background: red;
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

        h2 {
          line-height: 1.3;
        }

        .content {
          margin: 1rem 0 1.5rem;
          max-width: 25rem;
        }

        @media screen and (max-width: 960px) {
          .flex {
            justify-content: center;
          }

          .placeholder {
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