import Lightning from './svg/lightning';

const Intro = () => (
  <section>
    <div className="gradient" />
    <div className="container">
      <div className="content">
        <h4>TODO TODO TODO TODO</h4>

        <h2>TODO TODO TODO TODO</h2>

        <p>
          At the beginning of 2018, software engineer Zack Tanner began leading
          the migration of the Hulu Account app off of a legacy tech-stack, with
          the goal of unifying the developer organization and modernizing their
          code in an effort to prevent bugs and increase velocity.
        </p>

        <p>
          Hulu had already been using Next for greenfield applications, so it
          was an obvious option when it came to choosing which framework to move
          to. This time, however, the team needed to migrate an existing
          production app—a challenge that comes with new difficulties of its
          own.
        </p>

        <a href="#read-more" className="button">
          <button>Read More</button>
        </a>
      </div>
    </div>

    <div className="img-container">
      <img
        src={`/static/images/case-studies/hulu/zach.jpg`}
        alt="Zach Tanner"
        className="zach"
      />
      <div className="lightning-container">
        <Lightning />
      </div>
    </div>

    <div className="content">
      <h4>TODO TODO TODO TODO</h4>

      <h2>A Process Upgrade</h2>

      <p>
        One of the most common challenges teams face when executing an
        incremental migration is handling the transition between the new and old
        systems. Fortunately, with Next.js there was never an issue with running
        both versions at once. With out-of-the-box support for prefetching new
        pages while jumping into the legacy app when needed, Zack and the team
        were able to easily migrate pages one-by-one. And since the intermediary
        hybrid-site was intelligently routed by Next.js, there was no need to
        maintain the overhead of explicitly tracking the migration's progress in
        the code itself.
      </p>

      <p>
        In fact, throughout the migration, the ability of Next.js to make the
        extraction of common issues and patterns as easy as possible was a
        recurring theme. With each new version of Next.js, Tanner found they
        were constantly deleting internal code in favor of framework integrated
        tooling. Whenever the team needed to incorporate a new technology,
        Next.js had either first-class support or an endorsed example for them
        to follow.
      </p>
    </div>

    <style jsx>
      {`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          background: #fff;
        }

        section::before {
          content: '';
          background-color: #000;
          transform: skewY(-45deg);
          height: 180rem;
          margin-top: -112rem;
          width: 100%;
          z-index: 1;
        }

        section p {
          margin: 2rem 0;
        }

        a {
          display: inline-block;
          text-decoration: none;
          color: #fff;
        }

        p a {
          text-decoration: underline;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          z-index: 2;
          width: 100%;
          top: 0;
        }

        .container .content {
          color: #fff;
          margin: 10rem 10rem 0 0;
        }

        .img-container {
          position: relative;
          z-index: 1;
          max-width: 64rem;
          width: 100%;
          padding: 0 4rem;
          margin: -20rem 0 16rem 0;
        }

        .zach {
          width: 100%;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08),
            0px 39px 69px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
        }

        .lightning-container {
          position: absolute;
          top: -14rem;
          margin-left: 18rem;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .content:last-child {
          position: relative;
          z-index: 1;
          color: #000;
        }

        .button {
          display: block;
          margin-top: 1rem;
        }

        .gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 55%;
          background: linear-gradient(
              180deg,
              #ffffff 0%,
              rgba(255, 255, 255, 0) 164%
            ),
            #333333;
          transform: rotate(180deg);
          border-top: 1px solid transparent;
          background-clip: content-box;
        }

        @media screen and (max-width: 900px) {
          .lightning-container {
            top: -16rem;
            margin-left: 12rem;
          }
        }
        @media screen and (max-width: 640px) {
          section {
            align-items: flex-start;
          }
          section::before {
            height: 180rem;
            transform: skewY(-22.5deg);
            margin-top: -130rem;
          }
          .hulu {
            height: 242px;
            margin-right: 1rem;
            width: 170%;
          }
          .img-container {
            margin: -10rem 0 8rem 0;
            max-width: unset;
            padding: 0 2rem;
            width: 100%;
          }
          .next-container {
            display: none;
          }
          .img-container img {
            position: relative;
            z-index: 2;
          }
          .lightning-container {
            transform: scale(0.8);
            top: -11rem;
            margin-left: 8rem;
          }
          .lightning-container :global(.icon) {
            display: none;
          }
          .container .content {
            margin: 6rem 0 0 0;
          }
        }
        @media screen and (max-width: 490px) {
          section::before {
            margin-top: -125rem;
          }
          .img-container {
            margin: -8rem 0 8rem 0;
          }
        }
        @media screen and (max-width: 420px) {
          section::before {
            margin-top: -120rem;
          }
        }
        @media screen and (max-width: 370px) {
          section::before {
            margin-top: -115rem;
          }
        }
      `}
    </style>
  </section>
);

export default Intro;
