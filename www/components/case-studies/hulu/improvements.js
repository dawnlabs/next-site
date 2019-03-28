import Conclusion from './conclusion';

const Improvements = () => (
  <section>
    <img src="/static/svg/desktop.svg" className="tablet" />

    <div className="content">
      <h4>TODO TODO TODO TODO TODO</h4>

      <h2>Technical Improvements (SEO)</h2>

      <p>
        A critical requirement for Hulu was{' '}
        <a href="https://nextjs.org/features/server-side-rendering">
          server-side rendering
        </a>
        . With data coming from many sources and a fundamental need for SEO,
        server-side rendering was a must. With other frameworks,
        server-rendering pages with complex data dependencies is difficult and
        error prone, if not impossible. Next.js however made the process
        straightforward.
      </p>

      <div className="quote">
        <p>
          “[Server rendering] was as easy as moving data fetching from one spot
          to another. Next.js dealt with the underlying client hydration, while
          giving us a single abstraction to handle our data fetching logic.”
        </p>
        <span>— Zack Tanner</span>
      </div>

      <p>
        Even when issues arose, Tanner found that error tracing with
        server-rendered pages was far superior compared to any other solution
        he'd tried. By acting as a unified tool for managing both client and
        server-side rendering, Next.js provides amazing developer experience.
      </p>

      <p>
        Finally, by using the CSS-in-JS solution that Next.js provides by
        default, Tanner and team were able to implement optimized styles that
        were code-split automatically. This meant each page would load only the
        CSS it needed, keeping page-size small without compromising on on
        functionality. The Hulu teams also extended these defaults using
        sanctioned <code>next-plugins</code>, enhancing their setup to support
        existing global Sass files with minimal overhead.
      </p>
    </div>

    <div className="img-container">
      <img
        src={`/static/images/case-studies/hulu/engineers.png`}
        alt="Hulu engineers working together"
        className="img-engineers"
      />
    </div>

    <div className="content">
      <h4>TODO TODO TODO TODO</h4>

      <h2>Organizational Improvements</h2>

      <p>
        With the migration complete, a large amount of technical debt had
        vanished, but another powerful benefit arose. The frontend teams at Hulu
        were unified around a single platform, making it easier for developers
        to be instantly productive no matter which codebase they were in. Tanner
        confirms, “devs would come and go and switch teams, but everyone
        understands Next. Everyone is on the same page.” The number of
        operational wins Hulu earned were on par with the technical ones.
      </p>
    </div>

    <Conclusion />

    <div className="bg" />

    <style jsx>
      {`
        .tablet {
          max-width: 1600px;
          width: 80%;
          margin: 7rem 0;
        }

        section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          overflow: hidden;
        }

        section::after {
          content: '';
          height: 106rem;
          width: 100%;
          transform: skewY(-45deg);
          background-color: #1c1c1c;
          margin-top: -96rem;
        }

        h4 {
          color: #aaa;
        }

        p {
          max-width: 35rem;
          margin: 2rem 1rem 0 0;
        }

        a {
          color: #000;
          text-decoration: underline;
        }

        .img-engineers {
          width: 100%;
          max-width: 56rem;
          margin: 0 auto;
          border-radius: 8px;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25),
            0 18px 36px -18px rgba(0, 0, 0, 0.3),
            0 -12px 36px -8px rgba(0, 0, 0, 0.025);
        }

        .img-container {
          z-index: 1;
          padding: 0 2rem;
          margin: 7.5rem 0;
        }

        .content:first-of-type {
          color: #000;
        }

        .content {
          z-index: 1;
        }

        .quote {
          margin: 4rem 0;
        }

        .quote p {
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 2rem;
          font-style: italic;
          margin: 0 0 1.5rem 0;
        }

        .quote span {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.4);
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .bg {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 50%;
          height: 50%;
          background-color: #1c1c1c;
        }

        @media screen and (max-width: 640px) {
          section::after {
            height: 95rem;
            transform: skewY(-22.5deg);
            margin-top: -90rem;
          }
          section {
            align-items: flex-start;
          }
          .tablet {
            width: 100%;
          }
          .img-engineers {
            width: 100%;
          }
          .quote {
            margin: 3.5rem 0;
          }
          .bg {
            height: 20%;
          }
        }
        @media screen and (max-width: 560px) {
          section::after {
            height: 100rem;
            margin-top: -96rem;
          }
        }
        @media screen and (max-width: 490px) {
          section::after {
            height: 110rem;
            margin-top: -102rem;
          }
        }
        @media screen and (max-width: 440px) {
          section::after {
            margin-top: -106rem;
          }
        }
        @media screen and (max-width: 380px) {
          section::after {
            height: 115rem;
            margin-top: -110rem;
          }
        }
        @media screen and (max-width: 360px) {
          section::after {
            margin-top: -112rem;
          }
        }
        @media screen and (max-width: 340px) {
          section::after {
            height: 120rem;
            margin-top: -116rem;
          }
        }
        @media screen and (min-width: 2800px) {
          section::after {
            margin-top: -90rem;
          }
        }
      `}
    </style>
  </section>
);

export default Improvements;
