import Tilt from 'react-tilt';

const images = [
  [
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Future',
      link: 'https://music.freebandz.com/'
    },
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Gab3',
      link: 'https://www.instagram.com/gab3'
    },
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: '21 Savage',
      link: 'https://www.21savage.com/'
    },
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'SZA',
      link: 'https://szactrl.com'
    }
  ],
  [
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Tiffany Young',
      link: 'https://tiffanyyoungmusic.us/'
    },
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Killy',
      link: 'https://Killy.co'
    },
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Vintage Lee',
      link: 'https://vintageLee.com'
    },
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Future',
      link: 'https://music.freebandz.com/'
    }
  ],
  [
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Tiffany Young',
      link: 'https://tiffanyyoungmusic.us/'
    },
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Killy',
      link: 'https://Killy.co'
    },
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Vintage Lee',
      link: 'https://vintageLee.com'
    },
    {
      src: `/static/images/case-studies/hulu/zach.png`,
      alt: 'Future',
      link: 'https://music.freebandz.com/'
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
    {images.map(row => (
      <div className="slider-container">
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
          width: 115%;
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
    <div id="read-more" />
    <MobileGallery />
    <DesktopGallery />
    <style jsx>
      {`
        section {
          position: relative;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-x: hidden;
          margin-top: 2.5rem;
          /* account for image scaling on hover */
          padding: 1.5rem 0 8rem 0;
        }
        #read-more {
          position: absolute;
          visibility: hidden;
          top: -40rem;
        }

        @media screen and (max-width: 640px) {
          section {
            padding: 1.5rem 0 6rem 0;
          }
        }
        @media screen and (max-width: 480px) {
          #read-more {
            top: -62rem;
          }
        }
      `}
    </style>
  </section>
);

export default Gallery;
