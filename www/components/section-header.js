import withPure from './hoc/pure';

export default withPure(({ anchor, id, title, description, margin = '0 0 3rem 0', innerRef }) => (
  <div ref={innerRef}>
    <style jsx>
      {`
        h2 {
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        div {
          position: relative;
          text-align: center;
          margin: ${margin};
        }
        .anchor {
          position: absolute;
          top: -9rem;
        }
      `}
    </style>
    {anchor && <span id={anchor} className="anchor" />}
    <h2 id={id} className="f0 fw6">
      {title}
    </h2>
    {description && <h3 className="f-reset subtitle fw4">{description}</h3>}
  </div>
));
