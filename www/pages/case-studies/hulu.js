import React from 'react';
import Head from 'next/head';
import { useAmp } from 'next/amp';

import Page from '../../components/page';
import Footer from '../../components/footer';
import SocialMeta from '../../components/social-meta';
import Hero from '../../components/case-studies/hulu/hero';
import Banner from '../../components/case-studies/hulu/banner';
import Intro from '../../components/case-studies/hulu/intro';
import Gallery from '../../components/case-studies/hulu/gallery';
import Testimony from '../../components/case-studies/hulu/testimony';
import Improvements from '../../components/case-studies/hulu/improvements';
import CTA from '../../components/case-studies/hulu/cta';

const title = 'Case Study - Hulu | Next.js';

export default () => {
  const isAmp = useAmp();

  return (
    <Page title={title}>
      {isAmp && (
        <Head>
          <script
            async
            custom-element="amp-carousel"
            src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"
          />
        </Head>
      )}
      <SocialMeta
        title={title}
        description="TODO TODO TODO TODO TOD"
        image="TODOTODOTODO"
        url="https://nexts.org/case-studies/hulu"
        keywords="TODO TODO TODO TODO TODO"
      />
      <div className="container">
        <Hero />
        <div className="link" id="about" />
        <Banner />
        <Intro />
        <Gallery />
        <Testimony />
        <div className="link" id="technology" />
        <Improvements />
        <div className="link" id="conclusion" />
        <CTA />
      </div>
      <Footer />

      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
            font-size: 18px;
            background: #000;
          }

          body {
            background: #000;
          }

          ::selection {
            background: #ff0080;
            color: #fff;
          }

          .container h2 {
            font-size: 2.25rem;
            margin: 0;
          }

          .container h3 {
            font-size: 1.8rem;
            font-weight: 400;
            margin: 0 0 2.5rem 0;
          }

          .container h4 {
            margin: 0;
            color: #666666;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 1.6px;
            text-transform: uppercase;
          }

          .container p {
            padding: 0;
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 400;
          }

          .container button {
            appearance: none;
            position: relative;
            display: inline-block;
            text-transform: uppercase;
            text-align: center;
            text-decoration: none;
            line-height: 0;
            white-space: nowrap;
            width: 200px;
            height: 40px;
            padding: 0 25px 0 25px;
            font-weight: 500;
            border-radius: 5px;
            font-size: 12px;
            color: #000;
            background-color: #fff;
            border: 1px solid #fff;
            transition: all 0.2s ease;
            user-select: none;
            cursor: pointer;
            overflow: hidden;
            outline: none;
          }

          .container button:hover {
            color: #fff;
            border: 1px solid #fff;
            background: #000;
          }

          .container .content {
            padding: 0 2rem;
            max-width: 38rem;
            color: #fff;
          }

          @media screen and (max-width: 640px) {
            .container .content {
              max-width: unset;
              width: 100%;
            }
          }

          @media screen and (max-width: 1200px) {
            html {
              font-size: 16px;
            }
          }
          @media screen and (min-width: 1800px) {
            html {
              font-size: 18px;
            }
          }
          @media screen and (min-width: 2800px) {
            html {
              font-size: 20px;
            }
          }
          @media screen and (min-width: 3800px) {
            html {
              font-size: 24px;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          .link {
            position: absolute;
            visibility: hidden;
          }
          #about {
            top: 64rem;
          }
          #technology {
            bottom: 222rem;
          }
          #conclusion {
            bottom: 75rem;
          }
        `}
      </style>
    </Page>
  );
};
