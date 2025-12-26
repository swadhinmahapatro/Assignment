const { i18n } = require('./next-i18next.config');
const path = require('path');

module.exports = {
    eslint: {
        dirs: ['src'],
    },
    reactStrictMode: false,
    i18n,
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },
}
