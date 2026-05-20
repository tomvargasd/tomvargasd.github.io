/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `
          try {
            if (localStorage.getItem('theme') === '1') {
              document.documentElement.classList.add('light-theme');
            }
          } catch(e) {}
        `,
      }}
    />,
  ]);
};