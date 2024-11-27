module.exports = {
    apps: [
        {
            name: 'my-api',
            script: './src/app.js',
            instances: 'max',
            exec_mode: 'cluster',
            watch: true,
            env: {
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
