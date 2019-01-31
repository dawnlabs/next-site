import Container from '../container';
import Button from '../button';

const scrollToLinks = () =>
  document.querySelector('#links').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

export default () => (
  <Container wide padding center dotBackground>
    <h1>
      Static Sites, <br /> No Compromise
    </h1>

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

        h1 br {
          display: none;
        }

        .content {
          margin: 3rem 1rem;
        }

        @media screen and (max-width: 640px) {
          h1 br {
            display: initial;
          }
        }

        @media screen and (max-width: 360px) {
          h1 {
            font-size: 40px;
          }

          p br {
            display: none;
          }
        }
      `}
    </style>
  </Container>
);
