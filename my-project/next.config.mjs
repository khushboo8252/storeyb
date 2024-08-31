/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enable React's Strict Mode for better development experience
    swcMinify: true, // Enable SWC minification for faster builds and smaller bundles
    images: {
      domains: ['example.com'], // Add domains for images if you're loading external images
    },
    webpack(config) {
      // Custom Webpack configuration
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/, // Add support for video files
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/videos/',
              outputPath: 'static/videos/',
              name: '[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  