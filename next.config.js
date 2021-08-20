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
    /**
     * Convert kebab-case to camelcase css classes
     */
    const { rules } = config.module;
    const styleRules = (
      rules.find(
        (m) => m.oneOf && m.oneOf.find(({ test: reg }) => reg.test('file.css')),
      ) ||
      reg.test('file.module.css') ||
      {}
    ).oneOf;
    const cssModuleRules = [
      styleRules.find(
        ({ test: reg, use }) =>
          reg.test('file.module.css') && use.loader !== 'error-loader',
      ),
      styleRules.find(
        ({ test: reg, use }) =>
          reg.test('file.module.scss') && use.loader !== 'error-loader',
      ),
    ].filter((n) => n);

    cssModuleRules.forEach((cmr) => {
      if (Array.isArray(cmr.use)) {
        cmr.use.forEach((loader) => {
          if (loader?.options?.modules?.exportLocalsConvention) {
            loader.options.modules.exportLocalsConvention = 'camelCase';
          }
        });
      } else {
        if (loader?.options?.modules?.exportLocalsConvention) {
          loader.options.modules.exportLocalsConvention = 'camelCase';
        }
      }
    });

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

      /**
       * Remove duplicate packages
       */
      config.plugins.push(new DuplicatePackageCheckerPlugin());
    }

    return config;
  },
};
