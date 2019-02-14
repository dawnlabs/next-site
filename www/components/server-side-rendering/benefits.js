import posed from 'react-pose'
import SectionHeader from '../section-header'
import { Lightning, Performance, Discovery } from './icons'

const Bar = posed.div({
  ssr: {
    width: '9rem',
    flip: true,
    transition: { duration: 500 }
  },
  nonSsr: {
    width: '24rem',
    flip: true,
    transition: { duration: 3000 }
  }
})

const barStyle = {
  width: '6rem',
  borderRadius: '6px',
  height: '3.5rem'
}
const ssrStyle = {
  ...barStyle,
  background: '#007aff'
}
const nonSsrStyle = {
  ...barStyle,
  border: '1px solid #999999'
}

const Graph = ({ viewable }) => (
  <div className="container">
    <div className="bar-container ssr">
      <Bar pose={viewable && 'ssr'} style={ssrStyle} />
      <span>SSR</span>
    </div>
    <div className="bar-container non-ssr">
      <Bar pose={viewable && 'nonSsr'} style={nonSsrStyle} />
      <span>Non-SSR</span>
    </div>
    <svg width="431" height="6" viewBox="0 0 431 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M431 3L426 0.113249V5.88675L431 3ZM0 3.5L426.5 3.5V2.5L0 2.5V3.5Z" fill="black" />
    </svg>
    <div className="title">Time to First Meaningful Paint</div>
    <style jsx>
      {`
        .title {
          text-align: center;
          margin-top: 1rem;
        }

        .container {
          display: flex;
          flex-direction: column;
        }

        .bar-container {
          display: flex;
          position: relative;
        }

        .bar-container > span {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .ssr {
          color: #fff;
        }

        .non-ssr {
          margin: 1.5rem 0 3rem 0;
          color: #999;
        }
      `}
    </style>
  </div>
)

export default class Benefits extends React.PureComponent {
  state = {
    viewable: false
  }

  componentDidMount() {
    // This is just for testing, TODO: Replace with scroll spy or other in-view solution
    setTimeout(() => this.setState({ viewable: true }), 3000)
  }

  render() {
    const { viewable } = this.state

    return (
      <div className="container">
        <SectionHeader
          anchor="benefits"
          title="Leave the Heavy Lifting to the Servers"
          description={`Get your site to users faster, all while saving money, time, and headaches`}
        />

        <div className="flex">
          <div className="col">
            <Performance />
            <h3 className="f3 fw6">Superior Performance</h3>
            <p>
              On slower devices, rendering an initial page can take a long time and lead to a degraded experience. By
              offloading the computation to a more powerful server, you minimize the time users spend waiting and ensure
              your conversion rate does not suffer.
            </p>
          </div>
          <Graph viewable={viewable} />
        </div>

        <hr />

        <div className="flex">
          <div className="col">
            <Discovery />
            <h3 className="f3 fw6">Optimized for Discovery</h3>
            <p>
              Server-side rendering guarantees your pages are easily indexable by search engines and preview able on
              social media platforms. Even web crawlers (Google) struggle to account for client-side routing solutions.
              Take your SEO to the next level and sidestep the issue entirely with Next.js.
            </p>
          </div>

          <hr />

          <div className="col">
            <Lightning />
            <h3 className="f3 fw6">Lightning Fast Delivery</h3>
            <p>
              Prefetching initial data and building pages on the server drastically reduces the number of round trips
              required to view your site. This translates to lower latency and reduced bandwidth consumption. Both of
              which are essential for strong mobile experiences.
            </p>
          </div>
        </div>

        <style jsx>
          {`
            hr {
              border-style: solid;
              opacity: 0.1;
              margin: 0;
              align-self: stretch;
            }

            .container {
              width: 100%;
              margin: 0 auto;
              padding: 4rem 1rem 0 1rem;
              max-width: 1024px;
            }

            .flex {
              display: flex;
              justify-content: space-between;
            }

            .flex > hr {
              min-height: 100%;
            }

            .flex:last-child > .col {
              margin: 4rem 0;
            }

            .col {
              display: flex;
              flex-direction: column;
              max-width: 28rem;
              margin: 0 0 4rem 0;
            }

            .placeholder {
              width: 480px;
              height: 312px;
              background: red;
            }

            @media screen and (max-width: 960px) {
              .placeholder {
                display: none;
              }

              .flex {
                flex-direction: column;
                align-items: center;
              }

              .flex > hr {
                display: block;
              }

              .col {
                margin: 3rem 1rem !important;
              }
            }
          `}
        </style>
      </div>
    )
  }
}
