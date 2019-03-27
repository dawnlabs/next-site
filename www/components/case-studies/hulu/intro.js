const Intro = () => (
  <section>
    <img
      src={`/static/images/case-studies/hulu/hulu.png`}
      alt="Hulu logo"
      className="hulu"
    />

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

    <img
      src={`/static/images/case-studies/hulu/zach.png`}
      alt="Zach Tanner"
      className="zach"
    />

    <div className="container">
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
    </div>

    <style jsx>
      {`
        section {
          background-color: #000;
          display: flex;
          z-index: 1;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        section::after {
          content: '';
          position: absolute;
          top: 90rem;
          background-color: #fff;
          transform: skewY(-45deg);
          height: 170rem;
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

        .hulu {
          width: 100%;
        }

        .zach {
          z-index: 1;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08),
            0px 39px 69px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          margin: 10rem 0 12rem 0;
        }

        .container {
          margin: 0 auto;
          width: 100%;
          max-width: 42rem;
          display: flex;
        }

        .container:first-of-type > .content {
          color: #fff;
          max-width: 32rem;
          padding-right: 2rem;
        }

        .container:last-of-type > .content {
          position: relative;
          z-index: 2;
          color: #000;
          max-width: 31rem;
          margin-left: 20%;
        }

        .container:last-of-type h2 {
          margin: 2rem 0 0 0;
        }

        .button {
          display: block;
          margin-top: 1rem;
        }

        .hulu {
          height: 23rem;
          margin-bottom: 10rem;
        }

        @media screen and (max-width: 800px) {
          .container:first-child > .content {
            left: 20%;
          }
        }

        @media screen and (max-width: 640px) {
          section::after {
            height: 400vw;
            top: 58rem;
            transform: skewY(-22.5deg);
          }
          .container:first-of-type {
            padding-top: 48rem;
          }
          .container:first-child > .content {
            top: 8rem;
            left: 2rem;
            padding-right: 2rem;
          }
          .container:last-child > .content {
            margin: 6rem 2rem 0 2rem;
          }
          .button {
            text-align: center;
          }
        }
        @media screen and (max-width: 480px) {
          section::after {
            top: 58rem;
          }
          br {
            display: none;
          }
          .container:first-of-type {
            padding-top: 50rem;
          }
        }
        @media screen and (max-width: 390px) {
          section::after {
            top: 58rem;
          }
          .container:first-of-type {
            padding-top: 52rem;
          }
        }
        @media screen and (max-width: 345px) {
          section::after {
            top: 65rem;
          }
          .container:first-of-type {
            padding-top: 60rem;
          }
        }
      `}
    </style>
  </section>
);

export default Intro;
