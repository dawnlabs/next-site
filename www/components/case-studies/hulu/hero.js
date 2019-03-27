import HuluLogo from '../../icons/companies/hulu';

import Header from './header';

const Hero = () => (
  <section>
    <Header />

    <div className="img-hero">
      <img src={`/static/images/case-studies/hulu/hero.png`} />
    </div>

    <div className="title">
      <span>Case Study</span>
      <h1>Hulu</h1>
    </div>

    <div className="about">
      <HuluLogo color="#c1c1c1" />

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
        h1 {
          font-size: 6rem;
          margin: 0;
        }

        h4 {
          margin: 0 0 1.6rem;
        }

        section {
          position: relative;
          color: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: black;
        }

        section::before {
          content: '';
          position: absolute;
          z-index: 1;
          top: 68vw;
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
          height: 300%;
          background: black;
          min-height: 100rem;
        }

        .img-hero img {
          object-position: top center;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .title {
          position: absolute;
          top: 10rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title span {
          display: block;
          font-size: 1.5rem;
        }

        .title h1 {
          font-size: 96px;
          margin: 0;
        }

        .about {
          position: absolute;
          bottom: 12rem;
          right: 13rem;
          z-index: 2;
          width: 40vw;
          max-width: 28.25rem;
        }

        @media screen and (max-width: 1080px) {
          .img-hero {
            min-height: 80rem;
          }
        }
        @media screen and (max-width: 860px) {
          .img-hero {
            min-height: 70rem;
          }
        }
        @media screen and (max-width: 740px) {
          .img-hero {
            min-height: 60rem;
          }
        }
        @media screen and (max-width: 640px) {
          h1 {
            font-size: 3rem;
          }
          section::before {
            transform: skewY(-22.5deg);
            height: 450vw;
          }
          .img-hero {
            min-height: 50rem;
          }
          .about {
            margin: -50% 0 0 0;
            padding: 0 2rem;
            width: 100%;
            max-width: unset;
          }
        }
        @media screen and (max-width: 520px) {
          .img-hero {
            min-height: 40rem;
          }
        }
        @media screen and (max-width: 450px) {
          .img-hero {
            min-height: 30rem;
          }
        }
        @media screen and (min-width: 1800px) {
          .img-hero {
            min-height: 150rem;
          }
        }
        @media screen and (min-width: 2300px) {
          .img-hero {
            min-height: 200rem;
          }
        }
        @media screen and (min-width: 2800px) {
          .img-hero {
            min-height: 220rem;
          }
        }
        @media screen and (min-width: 3800px) {
          .img-hero {
            min-height: 250rem;
          }
        }
      `}
    </style>
  </section>
);

export default Hero;
