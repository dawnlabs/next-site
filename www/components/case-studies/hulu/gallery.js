const Gallery = () => (
  <section>
    <img
      src="/static/images/case-studies/hulu/devices.svg"
      width={860}
      height={442}
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
          padding: 7rem 0;
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
