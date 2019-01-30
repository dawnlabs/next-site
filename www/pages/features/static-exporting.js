import Head from 'next/head';

import Page from '../../components/page';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { MediaQueryConsumer } from '../../components/media-query';

import Hero from '../../components/static-exporting/hero';
import Build from '../../components/static-exporting/build';
import Links from '../../components/static-exporting/links';
import Learn from '../../components/static-exporting/learn';
import Features from '../../components/static-exporting/features';
import Docs from '../../components/static-exporting/docs';
import Customers from '../../components/static-exporting/customers';

export default () => (
  <Page>
    <Head>
      <title>Static Exporting - Next.js Features</title>
    </Head>
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={64 + (isMobile ? 32 : 0)}
          shadow={!isMobile}
          dotBackground
          active={32}
        >
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Hero />
    <Build />
    <Links />
    <Learn />
    <Features />
    <Docs />
    <Customers />
    <Footer />
  </Page>
);
