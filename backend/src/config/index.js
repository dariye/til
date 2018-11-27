if (process.env.NODE_ENV === 'development') {
  require('dotenv-safe').config({ silent: true }); // eslint-disable-line
}

const common = require('./components/common');

module.exports = Object.assign({}, common);
