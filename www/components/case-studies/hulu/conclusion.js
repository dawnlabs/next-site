export default () => (
  <div className="container">
    <div className="placeholder" />

    <div className="content">
      <h4>TODO TODO TODO TODO</h4>

      <h2>TODO TODO TODO TODO</h2>

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
        height: 300px;
        background: #ffadad;
        z-index: 1;
        margin: 8rem 0;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1c1c1c;
        padding-bottom: 8rem;
      }

      .content {
        color: #fff;
        max-width: 30rem;
      }

      a {
        text-decoration: underline;
        color: #fff;
      }
    `}</style>
  </div>
);
