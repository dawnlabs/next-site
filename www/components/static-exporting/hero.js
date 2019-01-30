import Container from '../container';
import Button from '../button';

export default () => (
  <Container wide padding center dotBackground>
    <h1>Static Sites, No Compromise</h1>

    <div className="content">
      <p>
        Leverage the speed and simplicity of static <br /> sites with the full
        power of <b>Next.js</b>
      </p>
    </div>

    <Button invert href="/learn/excel/static-html-export">
      Learn More
    </Button>

    <style jsx>
      {`
        .content {
          margin: 3rem 0;
        }
      `}
    </style>
  </Container>
);
