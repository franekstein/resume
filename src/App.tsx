import React, { Fragment } from 'react';
import { Resume } from './components';
import { Global, css } from '@emotion/react';
import { colors } from './styles/colors';

function App() {
  return (
    <Fragment>
      <Global
        styles={css`
          ${colors}

          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          html {
            // font-size: 62.5%;
            font-size: 125%;
          }

          body {
            font-size: 2rem;
            font-family: 'Poppins', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            max-width: 60rem;
            margin: 0 auto;
          }

          ul {
            padding: 0;
            margin: 0;
            list-style-position: inside;
          }

          @media print {
            html {
              font-size: 88%;
            }
          }

          @page {
            margin: 0;
          }
        `}
      />
      <main>
        <Resume />
      </main>
    </Fragment>
  );
}

export default App;
