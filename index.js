

import { deprecate } from 'util';
import crudGrid from './crudGrid';

export default deprecate((app) => {
  app.loopback.modelBuilder.mixins.define('CrudGrid', CrudGrid);
}, 'DEPRECATED: Use mixinSources, see https://github.com/excellerify/lb3-excellerify-crudgrid-mixin');

module.exports = exports.default;