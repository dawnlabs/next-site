import Container from '../container';
import Button from '../button';

const scrollToLinks = () =>
  document.querySelector('#links').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

export default () => (
  <Container wide padding center dotBackground>
    <h1>Static Sites, No Compromise</h1>

    <div className="content">
      <p>
        Leverage the speed and simplicity of static <br /> sites with the full
        power of <b>Next.js</b>
      </p>
    </div>

    <Button invert onClick={scrollToLinks}>
      Learn More
    </Button>

    <style jsx>
      {`
        h1 {
          font-size: 46px;
        }

        .content {
          margin: 3rem 0;
        }
      `}
    </style>
  </Container>
);
