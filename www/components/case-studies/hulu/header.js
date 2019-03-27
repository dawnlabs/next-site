import NextLogo from '../../icons/next-logo';

const Header = () => (
  <header>
    <NextLogo color="#fff" />
    <nav>
      <a href="#about">About</a>
      <a href="#technology">Technology</a>
      <a href="#conclusion">Conclusion</a>
    </nav>
    <style jsx>{`
      header {
        z-index: 2;

        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 2rem;
        max-width: 64rem;
        width: 100%;
        padding: 0 2rem;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        transition: 200ms ease-in-out;
      }

      a:not(:last-child) {
        margin: 0 1.5rem 0 0;
      }

      a:hover {
        text-decoration: none;
        opacity: 0.7;
      }

      @media screen and (max-width: 640px) {
        nav {
          display: none;
        }
        header {
          padding: 0 2rem;
          top: 1rem;
        }
      }

      @media screen and (max-width: 1200px) {
        a {
          font-size: 1.125rem;
        }
      }
    `}</style>
  </header>
);

export default Header;
