import Lightning from './svg/lightning';
import Arrow from './svg/arrow';
import Icon from '../../icon-circle';

const Intro = () => (
  <section id="process">
    <div className="corner-gradient" />

    <div className="container">
      <div className="content">
        <h4>Getting Started</h4>

        <h2>Upgrading the Developer Experience</h2>

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
        src="/static/images/case-studies/hulu/zach.jpg"
        alt="Zach Tanner"
        className="zach"
      />
      <div className="lightning-container">
        <Lightning />
      </div>
    </div>

    <div className="content">
      <Icon large>
        <Arrow />
      </Icon>

      <h4>Process Improvements</h4>

      <h2>Migration Made Easy</h2>

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
        recurring theme. With each new version of Next.js, Zack and the team
        found they were constantly deleting internal code in favor of framework
        integrated tooling. Whenever the team needed to incorporate a new
        technology, Next.js had either first-class support or an endorsed
        example for them to follow.
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
          top: 0rem;
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(135deg, #000 50%, transparent 50%);
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
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .container .content {
          max-width: 34rem;
          margin: 10rem 10rem 0;
        }

        .content:not(:first-child) {
          color: #000;
        }

        .content:not(:first-child) :global(div:first-child) {
          margin-bottom: 3rem;
        }

        .img-container {
          position: relative;
          z-index: 1;
          max-width: 64rem;
          width: 100%;
          padding: 0 4rem;
          margin: 10rem 0 14rem;
        }

        .zach {
          width: 100%;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08),
            0px 39px 69px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
        }

        .lightning-container {
          top: -250px;
          right: -72px;
          position: absolute;
          display: flex;
          justify-content: center;
        }

        .button {
          display: block;
          margin-top: 1rem;
        }

        .corner-gradient {
          position: absolute;
          display: none;
          z-index: 0;
          top: 40rem;
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

        @media screen and (max-width: 1080px) {
          .lightning-container {
            width: 50%;
          }
        }

        @media screen and (max-width: 640px) {
          section {
            align-items: flex-start;
          }

          section::before {
            top: -6%;
            background: linear-gradient(160deg, #000 50%, transparent 50%);
          }

          .container .content {
            margin: 6rem 0 0 0;
          }

          .img-container {
            max-width: unset;
            padding: 0 2rem;
            margin: 6rem 0 7.5rem;
            width: 100%;
          }

          .lightning-container {
            top: -180px;
            width: 80%;
          }

          .next-container {
            display: none;
          }

          .img-container img {
            position: relative;
            z-index: 2;
          }

          .lightning-container :global(.icon) {
            display: none;
          }
        }

        @media screen and (max-width: 380px) {
          section::before {
            top: -8%;
          }
        }
      `}
    </style>
  </section>
);

export default Intro;
