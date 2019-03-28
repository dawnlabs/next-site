const Intro = () => (
  <>
    <div className="hulu-container">
      <img
        src={`/static/images/case-studies/hulu/hulu.png`}
        alt="Hulu logo"
        className="hulu"
      />
    </div>
    <section>
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

      <div className="img-container">
        <img
          src={`/static/images/case-studies/hulu/zach.png`}
          alt="Zach Tanner"
          className="zach"
        />
      </div>

      <div className="content">
        <h4>TODO TODO TODO TODO</h4>

        <h2>A Process Upgrade</h2>

        <p>
          One of the most common challenges teams face when executing an
          incremental migration is handling the transition between the new and
          old systems. Fortunately, with Next.js there was never an issue with
          running both versions at once. With out-of-the-box support for
          prefetching new pages while jumping into the legacy app when needed,
          Zack and the team were able to easily migrate pages one-by-one. And
          since the intermediary hybrid-site was intelligently routed by
          Next.js, there was no need to maintain the overhead of explicitly
          tracking the migration's progress in the code itself.
        </p>

        <p>
          In fact, throughout the migration, the ability of Next.js to make the
          extraction of common issues and patterns as easy as possible was a
          recurring theme. With each new version of Next.js, Tanner found they
          were constantly deleting internal code in favor of framework
          integrated tooling. Whenever the team needed to incorporate a new
          technology, Next.js had either first-class support or an endorsed
          example for them to follow.
        </p>
      </div>
    </section>

    <style jsx>
      {`
        section {
          display: flex;
          z-index: 1;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        section::before {
          z-index: 0;
          content: '';
          background-color: #000;
          transform: skewY(-45deg);
          height: 180rem;
          margin-top: -130em;
          width: 100%;
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

        .hulu-container {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          background-color: #000;
        }

        .hulu {
          height: 427px;
          max-width: 1440px;
        }

        .content:first-child {
          margin: -56rem 10rem 10rem 0;
          z-index: 1;
          color: #fff;
        }

        .img-container {
          z-index: 1;
          max-width: 64rem;
          width: 100%;
          padding: 0 4rem;
          margin: 0 0 12rem 0;
        }

        .zach {
          width: 100%;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08),
            0px 39px 69px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
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

        @media screen and (max-width: 1200px) {
          .content:first-child {
            margin: -42rem 10rem 10rem 0;
          }
        }
        @media screen and (max-width: 640px) {
          section {
            align-items: flex-start;
          }
          section::before {
            height: 180rem;
            transform: skewY(-22.5deg);
          }
          .content:first-child {
            margin: -44rem 0 8rem 0;
          }
          .hulu {
            height: 242px;
            margin-right: 1rem;
            width: 170%;
          }
          .img-container {
            max-width: unset;
            width: 100%;
            padding: 0 2rem;
          }
        }
        @media screen and (max-width: 490px) {
          section::before {
            height: 185rem;
          }
          .content:first-child {
            margin: -50rem 0 8rem 0;
          }
        }
        @media screen and (max-width: 400px) {
          section::before {
            height: 190rem;
          }
          .content:first-child {
            margin: -55rem 0 10rem 0;
          }
        }
        @media screen and (max-width: 350px) {
          section::before {
            height: 195rem;
          }
          .content:first-child {
            margin: -60rem 0 10rem 0;
          }
        }
      `}
    </style>
  </>
);

export default Intro;
