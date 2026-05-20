/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onClientEntry = () => {
  try {
    const theme = localStorage.getItem('theme');
    if (theme === '1') {
      document.documentElement.classList.add('light-theme');
    }
  } catch (e) {
    // localStorage not available
  }
};
