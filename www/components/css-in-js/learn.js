import Container from '../container'
import SectionHeader from '../section-header'
import Button from '../button'

export default () => (
  <Container padding center>
    <div className="col">
      <SectionHeader
        title="CSS for React that Just Works"
        description={`Next.js provides styled-jsx out-of-the-box, with zero setup required, so you can stop endlessly configuring your tools and get back to building beautiful websites.`}
      />

      <Button invert href="#">
        Learn Next.js
      </Button>

      <div className="placeholder" />
    </div>

    <style jsx>
      {`
        .placeholder {
          width: 500px;
          height: 300px;
          background: #ffb7b7;
          margin-top: 6rem;
        }

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
      `}
    </style>
  </Container>
)
