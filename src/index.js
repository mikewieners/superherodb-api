'use strict';

const search = require('./search');
const fetch = require('./fetch');

module.exports = () => {

  return {
    search,
    fetch
  };
};
