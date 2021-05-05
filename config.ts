import expressEdge = require('express-edge');

/**
 * Your App Configuration
 */
export = {
    env: "development",
    name: "Ovwobio General Contracting Limited",

    project: {
        theme: "bulma"
    },


    paths: {
        base: __dirname,
        backend: 'base://backend',
        routesFile: 'backend://routes.ts'
    },

    server: {
        domain: 'localhost',
        // Server Port
        port: 3000,

        includePortInUrl: true,
    },

    template: {
        use: expressEdge.engine,
        extension: 'edge'
    },
}
