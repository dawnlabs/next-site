import Container from '../container';
import Lambda from './svg/lambda';
import { ExternalLink } from '../text/link';

export default () => (
  <Container wide padding gray>
    <div className="flex">
      <div className="lambda">
        <Lambda />
      </div>

      <div className="col">
        <h2 className="f0 fw6">Infinitely Scalable</h2>

        <div className="content">
          <p>
            When it comes to dynamic applications, scalability is often a concern. Fortunately,
            Next.js supports serverless builds out of the box. Simply set the target and Next.js
            will output an SSR-equipped lambda for each page which can be instantly deployed to
            platforms like <ExternalLink href="https://zeit.co/blog/now-2">Now 2.0</ExternalLink>.
          </p>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        h2 {
          line-height: 1.3;
          margin-bottom: 1.5rem;
        }

        p {
          margin: 0;
        }

        .flex {
          position: relative;
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
          max-width: 27rem;
        }

        .lambda {
          height: 16rem;
        }

        @media screen and (max-width: 960px) {
          .flex {
            justify-content: center;
          }
          .lambda {
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
);
