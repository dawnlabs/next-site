import Header from './header';
import Logos from './logos';

const Hero = () => (
  <section>
    <Header />

    <div className="img-hero">
      <img src={`/static/images/case-studies/hulu/hero.jpg`} />
    </div>

    <div className="container">
      <div className="title">
        <span>Case Study</span>
        <h1>Hulu</h1>
      </div>

      <img src="/static/svg/desktop.svg" className="macbook" />

      <div className="about">
        <Logos />

        <h2>
          Powering the Next Generation <br /> of Entertainment
        </h2>

        <p>
          <a href="https://hulu.tv">Hulu</a> makes the world's TV and movies
          easily accessible online—a feat which would be impossible without
          powerful engineering practices and tools. While the team at Hulu has
          been using Next.js since it's initial release, they recently made a
          push to spread the framework deeply throughout their organization.
          Next.js gave Hulu the confidence to migrate to a modern frontend
          environment, all while reducing their code surface area and shipping
          faster in the process.
        </p>
      </div>
    </div>

    <style jsx>
      {`
        .macbook {
          width: 70%;
          max-width: 2400px;
          margin: 6rem 0 0 0;
        }

        h1 {
          line-height: 1.2;
          font-size: 6rem;
          margin: 0;
        }

        h4 {
          margin: 0 0 1.6rem;
        }

        section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          overflow: hidden;
          z-index: 2;
          min-height: 90rem;
        }

        section::after {
          content: '';
          position: absolute;
          top: 67vw;
          background-color: #000;
          transform: skewY(-45deg);
          height: 250vw;
          width: 100%;
        }

        a {
          color: #fff;
          text-decoration: underline;
        }

        .container {
          z-index: 2;
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          top: 10%;
        }

        .img-hero {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(51, 110, 107, 0.7) 0%,
            rgba(44, 56, 94, 0.7) 51.79%,
            rgba(35, 20, 55, 0.7) 100%
          );
        }

        .img-hero img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .title {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title span {
          display: block;
          font-size: 1.5rem;
        }

        .about {
          margin: 8rem 0 0 40%;
          padding: 0 2rem 0 0;
        }

        .about p {
          max-width: 30rem;
        }

        @media screen and (max-width: 640px) {
          h1 {
            font-size: 4rem;
          }
          section {
            min-height: unset;
          }
          section::after {
            top: 90vw;
            transform: skewY(-22.5deg);
            height: 450vw;
          }
          .container {
            position: relative;
            margin: -80% 0 0 0;
          }
          .about {
            margin: 6rem 0 0 0;
            padding: 0 2rem 4rem 2rem;
            width: 100%;
            max-width: unset;
          }
          .macbook {
            margin: 10% 0 0 0;
            width: 90%;
          }
        }
      `}
    </style>
  </section>
);

export default Hero;
