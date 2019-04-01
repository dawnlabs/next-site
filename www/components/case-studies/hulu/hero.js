import Header from './header';
import Logos from './logos';

const Hero = () => (
  <section>
    <Header />

    <div className="img-hero">
      <img src={`/static/images/case-studies/hulu/hero-mobile.png`} />
    </div>

    <div className="title">
      <span>Case Study</span>
      <h1>Hulu</h1>
    </div>

    <img src="/static/svg/desktop.svg" className="macbook" />

    <div className="about">
      <Logos />

      <h2>TODO TODO TODO</h2>

      <p>
        <a href="https://hulu.tv">Hulu</a> makes the world's TV and movies
        easily accessible online—a feat which would be impossible without
        powerful engineering practices and tools. While the team at Hulu has
        been using Next.js since it's initial release, they recently made a push
        to spread the framework deeply throughout their organization. Next.js
        gave Hulu the confidence to migrate to a modern frontend environment,
        all while reducing their code surface area and shipping faster in the
        process.
      </p>
    </div>

    <style jsx>
      {`
        .macbook {
          z-index: 1;
          width: 50%;
          max-width: 2400px;
          transform: scale(1.4);
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
          z-index: 2;
          position: relative;
          color: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        section::before {
          content: '';
          position: absolute;
          z-index: 1;
          top: 56vw;
          background-color: #000;
          transform: skewY(-45deg);
          height: 200vw;
          width: 100%;
        }

        a {
          color: #fff;
          text-decoration: underline;
        }

        .img-hero {
          z-index: 0;
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
          z-index: 1;
          margin: -95% 0 15% 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title span {
          display: block;
          font-size: 1.5rem;
        }

        .about {
          margin: 12rem 0 10rem 40%;
          padding: 0 2rem 0 0;
          z-index: 1;
          max-width: 30rem;
        }

        @media screen and (max-width: 640px) {
          h1 {
            font-size: 4rem;
          }
          section::before {
            top: 90vw;
            transform: skewY(-22.5deg);
            height: 450vw;
          }
          .about {
            margin: 0;
            padding: 0 2rem 6rem 2rem;
            width: 100%;
            max-width: unset;
          }
          .title {
            margin: -83% 0 25% 0;
          }
          .macbook {
            width: 70%;
            margin: 0% 0 35% 0;
          }
        }
      `}
    </style>
  </section>
);

export default Hero;
