const { releasercConfig } = require('@fairdataihub/config');

const config = releasercConfig(
  'default',
  'fairdataihub',
  'FAIRshare-Auth',
  false,
);

module.exports = config;
