import Head from 'next/head';

import Page from '../../components/page';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { MediaQueryConsumer } from '../../components/media-query';
import SocialMeta from '../../components/social-meta';

import Hero from '../../components/css-in-js/hero';
import Features from '../../components/css-in-js/features';
import Learn from '../../components/css-in-js/learn';
import Links from '../../components/css-in-js/links';
import Libraries from '../../components/css-in-js/libraries';
import Docs from '../../components/css-in-js/docs';
import Customers from '../../components/css-in-js/customers';

export default () => (
  <Page>
    <Head>
      <title>Features - CSS-in-JS | Next.js</title>
      <meta
        name="description"
        content="Leverage the speed and simplicity of static sites with the full power of Next.js"
      />
      <meta
        name="keywords"
        content="CSS-in-JS, CSS, JS, Next, JavaScript, Web Framework"
      />
    </Head>
    <SocialMeta
      title="Features - CSS-in-JS | Next.js"
      description="Leverage the speed and simplicity of static sites with the full power of Next.js"
      image="/static/twitter-cards/css-in-js.png"
      url="https://nexts.org/features/css-in-js"
    />
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={64 + (isMobile ? 32 : 0)}
          shadow
          dotBackground
          active={64}
        >
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Hero />
    <Features />
    <Learn />
    <Links />
    <Libraries />
    <Docs />
    <Customers />
    <Footer />
    <style jsx>
      {`
        :global(html) {
          scroll-behavior: smooth;
        }
        :global(body) {
          scroll-behavior: unset;
        }
      `}
    </style>
  </Page>
);
