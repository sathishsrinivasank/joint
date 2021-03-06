module.exports = {
    joint: {
        src: [
            'src/**/*.js',
            'plugins/**/*.js',
        ],
        options: {
            configFile: '.eslintrc.js'
        }
    },
    test: {
        src: [
            'test/**/*.js',
            '!test/**/lodash3/**'
        ],
        options: {
            configFile: 'test/.eslintrc.js'
        }
    }
};

