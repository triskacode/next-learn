// import styleguide,{ plugins as _plugins } from "@vercel/style-guide/prettier";

import styleguide from '@vercel/style-guide/prettier';
const { plugins: _plugins } = styleguide;

const config = {
  ...styleguide,
  plugins: [..._plugins, 'prettier-plugin-tailwindcss'],
};
export default config;
