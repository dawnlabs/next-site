const Gallery = () => (
  <section>
    <div className="rings-container">
      <img
        src="/static/images/case-studies/hulu/rings.svg"
        width={494}
        height={494}
        alt="Floating rings backdrop"
      />
    </div>
    <img
      className="devices"
      src="/static/images/case-studies/hulu/devices.svg"
      alt="Hulu displayed on all your devices"
    />
    <style jsx>
      {`
        section {
          position: relative;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
          padding: 5rem 0 7rem;
        }

        .rings-container {
          position: absolute;
          z-index: 0;
          top: 3rem;
          left: 26rem;
        }

        .devices {
          z-index: 1;
          width: 860px;
          height: 442px;
        }

        @media screen and (max-width: 860px) {
          section {
            overflow: hidden;
          }
          .devices {
            width: 90%;
            height: auto;
          }
          .rings-container {
            top: 12rem;
            left: 40%;
            width: 100%;
            transform: translateX(-50%);
          }
        }

        @media screen and (max-width: 640px) {
          section {
            padding: 1.5rem 0 6rem 0;
          }
        }
      `}
    </style>
  </section>
);

export default Gallery;
