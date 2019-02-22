import Container from '../container';
import SectionHeader from '../section-header';
import Carousel from '../carousel';

import Blockchain from '../icons/companies/blockchain';
import Expo from '../icons/companies/expo';
import Blockstack from '../icons/companies/blockstack';
import Material from '../icons/companies/material-ui';
import Plotly from '../icons/companies/plotly';
import VergeCurrency from '../icons/companies/vergecurrency';
import NuCypher from '../icons/companies/nucypher';

export default () => (
  <Container padding wide>
    <SectionHeader id="customers" title="Who's Using Static Exports" />
    <Carousel
      slides={[
        {
          href: 'https://blockstack.org/',
          image: '/static/images/showcases/blockstack.png',
          alt: 'Blockstack',
          logo: <Blockstack />
        },
        {
          href: 'https://vergecurrency.com/',
          image: '/static/images/showcases/verge.jpg',
          alt: 'Verge Currency',
          logo: <VergeCurrency />
        },
        {
          href: 'https://www.nucypher.com/',
          image: '/static/images/showcases/nucypher.png',
          alt: 'NuCypher',
          logo: <NuCypher />
        },
        {
          href: 'https://blockchain.com/',
          image: '/static/images/showcases/blockchain.png',
          alt: 'Blockchain',
          logo: <Blockchain />
        },
        {
          href: 'https://plot.ly/',
          image: '/static/images/showcases/plotly.jpg',
          alt: 'Plotly',
          logo: <Plotly />
        },
        {
          href: 'https://material-ui.com/',
          image: '/static/images/showcases/material-ui.jpg',
          alt: 'Material UI',
          logo: <Material />
        },
        {
          href: 'https://expo.io/',
          image: '/static/images/showcases/showcases-13.jpg',
          alt: 'Expo',
          logo: <Expo />
        }
      ]}
    />
    <style jsx>
      {`
        h4 {
          margin: 0;
        }

        .left-container {
          text-align: center;
          align-items: center;
        }

        .plotly-logo {
          width: 7rem;
        }

        .divider {
          width: calc(100% - 2rem);
          max-width: 62rem;
          border-bottom: 1px solid #eaeaea;
          margin: 6rem 0 3rem 0;
        }

        @media screen and (max-width: 960px) {
          .divider {
            display: none;
          }
        }
      `}
    </style>
  </Container>
);
