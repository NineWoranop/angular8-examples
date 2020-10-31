'use strict';

const HttpsProxyAgent = require('https-proxy-agent');

/*
 * API proxy configuration.
 * This allows you to proxy HTTP request like `http.get('/api/stuff')` to another server/port.
 * This is especially useful during app development to avoid CORS issues while running a local server.
 * For more details and options, see https://github.com/angular/angular-cli#proxy-to-backend
 */
const proxyConfig = [{
    context: '/api/*',
    target: 'https://node-js-01-one.vercel.app',
    secure: true,
    logLevel: 'debug',
    changeOrigin: true,
    bypass: function (req, res, proxyOptions) { }
}];

/*
 * Configures a corporate proxy agent for the API proxy if needed.
 */
function setupForCorporateProxy(proxyConfig) {
    if (!Array.isArray(proxyConfig)) {
        proxyConfig = [proxyConfig];
    }

    const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;

    // Use fiddler insead of local proxy setting
    // const proxyServer = 'http://127.0.0.1:8888';

    if (proxyServer) {
        let agent = new HttpsProxyAgent(proxyServer);
        console.log('!!!!!! Using corporate proxy setting: ' + proxyServer);
        proxyConfig.forEach(entry => {
            entry.agent = agent;
        });
    } else {
        console.log('!!!!!! No corporate proxy setting');
    }

    return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);