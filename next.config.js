/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  images: {
    deviceSizes: [320, 640, 768, 1024, 1280, 1536, 1920],
  },
  webpack(config) {

    return config;
  },
};
