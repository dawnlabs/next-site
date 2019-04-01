import Next from './svg/next';

export default () => (
  <div className="container">
    <div className="svg-container">
      <Next />
    </div>
    <img src={`/static/images/case-studies/hulu/hulu.png`} alt="Hulu logo" />

    <style jsx>{`
      img {
        height: 100%;
        width: 100%;
      }

      .container {
        z-index: 2;
        position: relative;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        max-width: 1440px;
        background-color: #000;
      }

      .svg-container {
        position: absolute;
        top: -13rem;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      .svg-container :global(svg) {
        flex-shrink: 0;
        width: 100%;
        margin-right: 38rem;
      }

      @media screen and (max-width: 640px) {
        .svg-container {
          display: none;
        }
      }
    `}</style>
  </div>
);
