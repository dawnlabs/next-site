export default () => (
  <div className="container">
    <div>
      <h2>
        Find Out How Next.js Can Empower <br /> Your Team Today
      </h2>
      <a href="/learn">
        <button>Read More</button>
      </a>
    </div>

    <style jsx>
      {`
        .container {
          display: flex;
          justify-content: center;
          background-color: #1c1c1c;
          border-bottom: 2px solid #333333;
        }

        .container > div {
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 64rem;
          width: 100%;
          padding: 6rem 2rem;
          border-top: 1px solid #000;
        }

        a {
          height: unset;
          width: unset;
          margin-left: 4rem;
        }

        h2 {
          line-height: 1.4;
        }

        h3 {
          display: inline;
          margin: 0;
        }

        @media screen and (max-width: 640px) {
          h2 {
            text-align: center;
            margin-bottom: 50px;
          }

          .container > div {
            flex-direction: column;
          }

          h3 {
            display: block;
            margin: 0 0 3rem 0;
          }

          a {
            margin: 0;
          }
        }
      `}
    </style>
  </div>
);
