module.exports = {
    stripPrefix: 'www/',
    staticFileGlobs: [
        'www/**.css',
        'www/**.html',
        'www/**.js',
        'www/config/manifest.json'
    ],
    swFilePath: 'www/service-worker.js'
};