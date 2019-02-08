import Head from 'next/head';

import Page from '../../components/page';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { MediaQueryConsumer } from '../../components/media-query';
import SocialMeta from '../../components/social-meta';

import Hero from '../../components/server-side-rendering/hero';
import Features from '../../components/server-side-rendering/features';
import Benefits from '../../components/server-side-rendering/benefits';
import Examples from '../../components/server-side-rendering/examples';
import Docs from '../../components/server-side-rendering/docs';
import Scalable from '../../components/server-side-rendering/scalable';
import Customers from '../../components/server-side-rendering/customers';

export default () => (
  <Page>
    <Head>
      <title>Server Side Rendering - Next.js Features</title>
      <meta
        name="description"
        content="Leverage the speed and simplicity of static sites with the full power of Next.js"
      />
      <meta
        name="keywords"
        content="Server side rendering, Server rendering, SSR, Next, JavaScript, Web Framework"
      />
    </Head>
    <SocialMeta
      title="Server Side Rendering - Next.js Features"
      description="Leverage the speed and simplicity of static sites with the full power of Next.js"
      image="/static/twitter-cards/static-exporting.png"
      url="https://nexts.org/features/static-exporting"
    />
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header height={64 + (isMobile ? 32 : 0)} shadow={!isMobile} dotBackground active={64}>
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Hero />
    <Features />
    <Benefits />
    <Examples />
    <Docs />
    <Scalable />
    <Customers />
    <Footer />
  </Page>
);
