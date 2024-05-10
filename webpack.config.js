const path = require('path');

module.exports = {
    output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js'
    }
};
