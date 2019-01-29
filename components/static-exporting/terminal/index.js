// Packages
import React from 'react';
import { Keyframes, Frame } from 'react-keyframes';

// Components
import Window from './window';
import Prompt from './prompt';
import Caret from './caret';

import { FONT_FAMILY_MONO } from '../../css-config';

// simplify frames data and only stores deltas
function generateFrames(white, onRender) {
  const frames = [];
  const current = [];
  let duration = 0;

  /**
    [
      frame: {
        duration,
        [changed line]: component
      }
    ]
  */
  const data = [
    {
      duration: white ? 500 : 2000,
      0: <Prompt white={white} />,
      1: <Caret />
    },
    {
      duration: 50,
      1: 'n',
      2: <Caret />
    },
    {
      duration: 50,
      1: 'ne',
      2: <Caret />
    },
    {
      duration: 50,
      1: 'nex',
      2: <Caret />
    },
    {
      duration: 50,
      1: 'next',
      2: <Caret />
    },
    {
      duration: 50,
      1: 'next ',
      2: <Caret />
    },
    {
      duration: 50,
      1: 'next b',
      2: <Caret />
    },
    {
      duration: 50,
      1: 'next bu',
      2: <Caret />
    },
    {
      duration: 50,
      1: 'next bui',
      2: <Caret />
    },
    {
      duration: 50,
      1: 'next buil',
      2: <Caret />
    },
    {
      duration: 300,
      1: 'next build'
    },
    {
      duration: 850,
      1: (
        <>
          next build
          <br />
          <span>[12:43:18 PM] Compiling client</span>
          <br />
          <span>[12:43:18 PM] Compiling server</span>
          <br />
        </>
      )
    },
    {
      duration: 850,
      1: (
        <>
          next build
          <br />
          <span>[12:43:18 PM] Compiling client</span>
          <br />
          <span>[12:43:18 PM] Compiling server</span>
          <br />
          <span className="bold">
            <span role="img" aria-label="star">
              ✨
            </span>{' '}
            Done in 6.89s
          </span>
          <br />
          <br />
        </>
      ),
      2: <Prompt white={white} />,
      3: <Caret />
    },
    {
      duration: 50,
      3: null,
      4: 'n',
      5: <Caret />
    },
    {
      duration: 50,
      4: 'ne',
      5: <Caret />
    },
    {
      duration: 50,
      4: 'nex',
      5: <Caret />
    },
    {
      duration: 50,
      4: 'next',
      5: <Caret />
    },
    {
      duration: 50,
      4: 'next ',
      5: <Caret />
    },
    {
      duration: 50,
      4: 'next e',
      5: <Caret />
    },
    {
      duration: 50,
      4: 'next ex',
      5: <Caret />
    },
    {
      duration: 50,
      4: 'next exp',
      5: <Caret />
    },
    {
      duration: 50,
      4: 'next expo',
      5: <Caret />
    },
    {
      duration: 50,
      4: 'next expor',
      5: <Caret />
    },
    {
      duration: 300,
      4: 'next export'
    },
    {
      duration: 850,
      4: (
        <>
          next export
          <br />
          ...
        </>
      ),
      5: null
      // 6: <Caret />,
    },
    {
      duration: 850,
      5: (
        <>
          <br />> exporting path: /about
          <br />> exporting path: /index
          <br />> exporting path: /<br />
        </>
      )
    },
    {
      duration: 850,
      6: (
        <>
          <span className="bold">
            <span role="img" aria-label="star">
              ✨
            </span>{' '}
            Done in 0.79s
          </span>
          <br />
        </>
      )
      // 7: <Prompt white={white} />,
      // 8: <Caret />,
    }
  ];

  let showBrowser;

  for (let i = 0; i < data.length; ++i) {
    for (const line in data[i]) {
      if (line === 'duration') {
        duration = data[i][line];
      } else if (line === 'showBrowser') {
        showBrowser = true;
      } else {
        current[line] = data[i][line];
      }
    }

    frames.push(
      <Frame duration={duration} key={i} onRender={showBrowser && onRender}>
        {[...current]}
      </Frame>
    );
  }

  return frames;
}

export default class Console extends React.PureComponent {
  render() {
    const { white, alias, mini, running, showBrowser } = this.props;
    const classes = ['console'];

    if (white) {
      classes.push('white');
    }

    if (mini) {
      classes.push('mini');
    }

    return (
      <Window
        title={null}
        white={white}
        alias={alias}
        mini={mini}
        height={280}
        mobileHeight={300}
        backgroundColor="black"
      >
        <div className={classes.join(' ')}>
          {running && (
            <Keyframes component="pre">
              {generateFrames(white, showBrowser)}
            </Keyframes>
          )}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                pre {
                  font-size: 13px;
                  font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                  DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
                  line-height: 17px;
                  margin: 0;
                  white-space: pre;
                }
                .console.mini pre {
                  font-size: 11px;
                  line-height: 15px;
                }
                .highlight {
                  color: #00FFFF;
                }
                .bold {
                  font-weight: 600;
                }
                .dim {
                  opacity: 0.5;
                }
              `
            }}
          />
        </div>
        <style jsx>
          {`
            .console {
              color: #fff;
              font-size: 12px;
              font-family: ${FONT_FAMILY_MONO};
              line-height: 24px;
              margin: 0 16px;
              text-align: left;
            }
            .console.white {
              color: #000;
            }
            .console.mini {
              font-size: 10px;
              line-height: 11px;
              margin: 0 7px;
            }
            .console i {
              font-style: normal;
              color: #04ecc5;
            }
          `}
        </style>
      </Window>
    );
  }
}
