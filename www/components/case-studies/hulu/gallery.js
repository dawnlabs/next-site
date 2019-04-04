import Tilt from 'react-tilt';

const images = [
  [
    {
      src: `/static/images/case-studies/hulu/gallery-0.jpg`,
      alt: '11.22.63',
      link: 'https://www.hulu.com/press/show/11-22-63'
    },
    {
      src: `/static/images/case-studies/hulu/gallery-1.jpg`,
      alt: 'All Night',
      link: 'https://www.hulu.com/press/show/all-night'
    },
    {
      src: `/static/images/case-studies/hulu/gallery-2.jpg`,
      alt: 'Ask Dr. Ruth',
      link: 'https://www.hulu.com/press/show/ask-dr-ruth/'
    },
    {
      src: `/static/images/case-studies/hulu/gallery-3.jpg`,
      alt: 'Ballet Now',
      link: 'https://www.hulu.com/press/show/ballet-now'
    }
  ],
  [
    {
      src: `/static/images/case-studies/hulu/gallery-4.jpg`,
      alt: 'Batman & Bill',
      link: 'https://www.hulu.com/press/show/batman-and-bill'
    },
    {
      src: `/static/images/case-studies/hulu/gallery-5.jpg`,
      alt: 'Becoming Bond',
      link: 'https://www.hulu.com/press/show/becoming-bond'
    },
    {
      src: `/static/images/case-studies/hulu/gallery-6.jpg`,
      alt: 'Castle Rock',
      link: 'https://www.hulu.com/press/show/castle-rock'
    },
    {
      src: `/static/images/case-studies/hulu/gallery-7.jpg`,
      alt: 'Casual',
      link: 'https://www.hulu.com/press/show/casual'
    }
  ],
  [
    {
      src: `/static/images/case-studies/hulu/gallery-8.jpg`,
      alt: 'Catch-22',
      link: 'https://www.hulu.com/press/show/catch-22'
    },
    {
      src: `/static/images/case-studies/hulu/gallery-9.jpg`,
      alt: 'Chance',
      link: 'https://www.hulu.com/press/show/chance'
    },
    {
      src: `/static/images/case-studies/hulu/gallery-10.jpg`,
      alt: 'Crime + Punishment',
      link: 'https://www.hulu.com/press/show/crime-+-punishment'
    },
    {
      src: `/static/images/case-studies/hulu/gallery-11.jpg`,
      alt: 'Difficult People',
      link: 'https://www.hulu.com/press/show/difficult-people'
    }
  ]
];

const TiltContainer = ({ children }) => (
  <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }}>
    <div className="Tilt-inner">{children}</div>
  </Tilt>
);

function Tile({ link, ...props }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img {...props} />
      <style jsx>
        {`
          a,
          a:active,
          a.visited {
            background: transparent;
            outline: none;
          }
          img {
            max-width: 100%;
            display: block;
            object-fit: cover;
            object-position: top;
            box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
              0 8px 16px -8px rgba(0, 0, 0, 0.3),
              0 -6px 16px -6px rgba(0, 0, 0, 0.025);
            border-radius: 8px;
          }
        `}
      </style>
    </a>
  );
}

function MobileTile({ link, ...props }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img {...props} />
      <style jsx>
        {`
          a,
          a:active,
          a.visited {
            outline: none;
            display: flex;
            margin: 0 1rem;
            box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
              0 8px 16px -8px rgba(0, 0, 0, 0.3),
              0 -6px 16px -6px rgba(0, 0, 0, 0.025);
            border-radius: 8px;
          }
          img {
            height: 150px;
            width: 265px;
            display: inline-block;
            object-fit: cover;
            object-position: top;
            border-radius: 8px;
          }
        `}
      </style>
    </a>
  );
}

const MobileGallery = () => (
  <>
    {images.map((row, i) => (
      <div className="slider-container" key={i}>
        <div className="slider">
          {row.map(_ => (
            <MobileTile key={`a-${_.src}`} {..._} />
          ))}
          {row.map(_ => (
            <MobileTile key={`b-${_.src}`} {..._} />
          ))}
        </div>
      </div>
    ))}
    <style jsx>
      {`
        div {
          display: none;
        }
        .slider-container {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          height: 10rem;
          width: 100%;
          margin: 1rem 0;
        }
        .slider {
          position: absolute;
          z-index: 2;
          bottom: 0;
          display: flex;
          white-space: nowrap;
          overflow: hidden;
          animation: slide 35s linear infinite;
        }
        @keyframes slide {
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @media screen and (max-width: 640px) {
          div {
            display: block;
          }
        }
      `}
    </style>
  </>
);

const DesktopGallery = () => (
  <>
    {images.map((row, i) => (
      <div key={i}>
        {row.map(_ => (
          <TiltContainer key={_.src}>
            <Tile {..._} />
          </TiltContainer>
        ))}
      </div>
    ))}
    <style jsx>
      {`
        div {
          display: flex;
          width: 105%;
          margin: 1rem 0;
        }
        div > :global(.Tilt) {
          margin: 0 1rem;
        }
        @media screen and (max-width: 640px) {
          div {
            display: none;
          }
        }
        @media screen and (min-width: 1800px) {
          div {
            width: 1650px;
          }
        }
      `}
    </style>
  </>
);

const Gallery = () => (
  <section>
    <MobileGallery />
    <DesktopGallery />
    <style jsx>
      {`
        section {
          position: relative;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
          /* account for image scaling on hover */
          padding: 4rem 0;
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
