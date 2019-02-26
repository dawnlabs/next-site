import Container from '../container';
import SectionHeader from '../section-header';
import Button from '../button';
import Editor from './editor';

const files = [
  {
    name: 'styled-jsx.js',
    content: `<!doctype html>
<html>
  <head>
    <title>A simple deployment with the Now API!</title>
  </head>
  <body>
    <h1>Welcome to a simple static file</h1>
  </body>
</html>`
  },
  {
    name: 'styled-components.js',
    content: 'some styled components code?'
  },
  {
    name: 'emotion.js',
    content: 'some emotion code?'
  }
];

export default () => (
  <Container padding>
    <div className="col">
      <SectionHeader
        title="CSS for React that Just Works"
        description={`Next.js provides styled-jsx out-of-the-box, with zero setup required, so you can stop endlessly configuring your tools and get back to building beautiful websites.`}
      />

      <Button invert href="#">
        Learn Next.js
      </Button>

      <div className="editor-container">
        <Editor files={files} />
      </div>
    </div>

    <style jsx>
      {`
        h2 {
          margin: 0.5rem 0 1.5rem;
          line-height: 1.3;
        }

        .col :global(h3) {
          max-width: 40rem;
        }

        .col {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .editor-container {
          width: 44rem;
          margin-top: 6rem;
          box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.12);
        }
      `}
    </style>
  </Container>
);
