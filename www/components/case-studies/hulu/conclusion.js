import LinesGallery from './lines-gallery';

export default () => (
  <div className="container">
    <LinesGallery />

    <div className="content">
      <h4>The benefits of Next.js</h4>

      <h2>A Happier, More Productive Org</h2>

      <p>
        One year into their journey, Tanner credits Next for fewer bugs, greater
        productivity, and a happier engineering organization. As Next.js
        continues to improve, the Hulu team is excited to continually reap the
        rewards, passing them on to their users in the form of a more robust,
        and featureful platform.
      </p>

      <p>
        Interested in working with modern technology on a word class team? Check
        out the <a href="https://hulu.com/jobs">Hulu jobs page</a> or their{' '}
        <a href="https://medium.com/hulu-tech-blog">tech blog</a> for more info
        on joining the Hulu team!
      </p>
    </div>

    <style jsx>{`
      .placeholder {
        width: 100%;
        max-width: 1440px;
        height: 300px;
        background: #ffadad;
        margin: 8rem 0;
      }

      .container {
        z-index: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      a {
        text-decoration: underline;
        color: #fff;
      }
    `}</style>
  </div>
);
