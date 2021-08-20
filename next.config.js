const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  images: {
    deviceSizes: [320, 640, 768, 1024, 1280, 1536, 1920],
  },
  webpack(config, { dev, isServer }) {
    if (process.env.mode === 'perfomance' && !dev) {
      /**
       * Bundle size analyzer
       */
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }),
      );
    }

    return config;
  },
};
