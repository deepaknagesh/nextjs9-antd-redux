const assetPrefix = 'https://deepaknagesh.github.io/nextjs-9-redux/';

module.exports = {
    poweredByHeader: false,
    exportPathMap: function () { // /Next-React-Components
        return {
            "/": { page: "/2" },
            "/2": { page: "/2" },
            "/index": { page: "/2" },
        }
    },
    assetPrefix: assetPrefix,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
            }),
        );
        return config
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
    },
}