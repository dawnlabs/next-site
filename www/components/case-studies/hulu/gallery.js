const Gallery = () => (
  <section>
    <div className="wrapper">
      <img
        className="devices"
        src="/static/images/case-studies/hulu/devices.svg"
        alt="Hulu displayed on all your devices"
      />
      <img
        src="/static/images/case-studies/hulu/rings.svg"
        width={494}
        height={494}
        alt="Floating rings backdrop"
        className="rings"
      />
    </div>
    <style jsx>
      {`
        section {
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
          padding: 5rem 0 7rem;
        }

        .wrapper {
          position: relative;
          z-index: 1;
        }

        .rings {
          position: absolute;
          z-index: -1;
          top: -1rem;
          left: 14rem;
        }

        .devices {
          width: 860px;
          height: 442px;
        }

        @media screen and (max-width: 860px) {
          section {
            overflow: hidden;
          }
          .devices {
            position: relative;
            width: 90%;
            height: auto;
            left: 50%;
            transform: translateX(-50%);
          }
          .rings {
            display: none;
          }
        }

        @media screen and (max-width: 640px) {
          section {
            padding: 3rem 0 5rem 0;
          }
        }
      `}
    </style>
  </section>
);

export default Gallery;
