

import { deprecate } from 'util';
import formGrid from './src/formGrid';

export default deprecate((app) => {
  app.loopback.modelBuilder.mixins.define('FormGrid', formGrid);
}, 'DEPRECATED: Use mixinSources, see https://github.com/excellerify/lb3-excellerify-crudgrid-mixin');

module.exports = exports.default;