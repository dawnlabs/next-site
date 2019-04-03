import Lines from './svg/lines';

const LinesGallery = () => (
  <div className="container">
    <div className="images">
      <div>
        <img src="/static/images/case-studies/hulu/lines-0.jpg" alt="" />
      </div>
      <div>
        <img src="/static/images/case-studies/hulu/lines-1.jpg" alt="" />
      </div>
      <div>
        <img src="/static/images/case-studies/hulu/lines-2.jpg" alt="" />
      </div>
      <div>
        <img src="/static/images/case-studies/hulu/lines-3.jpg" alt="" />
      </div>
      <div>
        <img src="/static/images/case-studies/hulu/lines-4.jpg" alt="" />
      </div>
    </div>

    <div className="lines-container">
      <Lines />
    </div>
    <style jsx>{`
      .container {
        position: relative;
        width: 105%;
        max-width: 1440px;
        margin: 12rem 0 8rem 0;
      }

      .images {
        width: 100%;
        display: flex;
      }

      .lines-container {
        top: 0;
        left: 0;
        display: flex;
        position: absolute;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
      }

      .images > div {
        flex: 1;
        margin-right: 16px;
      }

      img {
        width: 100%;
        box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.12);
        border-radius: 6px;
      }

      .images > div:nth-of-type(2n) {
        transform: translateY(-16px);
      }

      .images > div:nth-of-type(2n -1) {
        z-index: 2;
        transform: translateY(16px);
      }

      @media screen and (max-width: 640px) {
        .container {
          max-width: unset;
          margin: 10rem 0 6rem 0;
        }
        .images > div:nth-of-type(2n) {
          transform: translateY(-12px);
        }
        .images > div:nth-of-type(2n -1) {
          transform: translateY(4px);
        }
        .images > div {
          margin-right: 6px;
        }
      }
    `}</style>
  </div>
);

export default LinesGallery;
