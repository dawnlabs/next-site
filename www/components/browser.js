export default ({ children }) => (
  <div className="browser">
    <div title="http://nextjs-site.now.sh" className="header">
      <div className="button-group">
        <span className="button" />
        <span className="button" />
        <span className="button" />
      </div>
      <div className="title f6">http://nextjs-site.now.sh</div>
    </div>
    <div className="content">{children}</div>
    <style jsx>
      {`
        .browser {
          display: flex;
          flex: 1;
          flex-direction: column;
          height: 100%;
          color: black;
          background: #ffffff;
          box-shadow: 0 14px 50px 0 rgba(0, 0, 0, 0.38), 0 2px 10px 0 rgba(0, 0, 0, 0.48);
          border-radius: 7px;
          overflow: hidden;
        }

        .header {
          display: flex;
          height: 2rem;
          line-height: 2rem;
          position: relative;
          box-shadow: 0 0 0 1px #ccc;
          background-image: linear-gradient(-180deg, #f5f5f5 2%, #e8e8e8 99%);
        }

        .button-group {
          margin: 0 1rem;
        }

        .button {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.2);
        }

        .button:not(:last-of-type) {
          margin-right: 5px;
        }

        .title {
          position: absolute;
          width: 200px;
          margin: auto;
          left: 0;
          right: 0;
          text-align: center;
          background: rgba(255, 255, 255, 0.65);
          height: 1.5rem;
          top: 0.25rem;
          line-height: 1.5rem;
          border-radius: 5px;
          padding: 0 0.5rem;
          color: #8c8c8c;
        }

        .content {
          flex: 1;
          overflow-y: hidden;
          text-align: left;
        }
      `}
    </style>
  </div>
)
