module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.css$/i,
      use: [{
        loader: "postcss-loader",
        options: {
          implementation: require.resolve("postcss")
        }
      }],
      include: path.resolve(__dirname, "../")
    });
    // Return the altered config
    return config;
  },
  docs: {
    autodocs: true
  }
};