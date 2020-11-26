

const path = require('path');

module.exports = {
  "stories": [
    // "../../src/**/*.stories.mdx",
    // "../../src/**/*.stories.@(js|jsx|ts|tsx)"
    "../../src/components/**/*.stories.mdx",
    "../../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
    '@storybook/addon-actions',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../../src')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    "@storybook/addon-a11y"
  ],
  webpackFinal: async (config, { configType }) => {
    //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    //   // You can change the configuration based on that.
    //   // 'PRODUCTION' is used when building the static version of storybook.

    //   // Make whatever fine-grained changes you need

    config.resolve.alias['~storybook'] = path.resolve(__dirname)

    //   // Return the altered config
    return config;
  },
}