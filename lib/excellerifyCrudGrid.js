var path = require('path');
const errors = require('loopback-common-errors');

function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

module.exports = function(Model, options) {
  let modelName = lowercaseFirstLetter(Model.modelName);

  if (!Model.form && options.form != false) {
    const formSchema = require(path.resolve(
      __dirname,
      `../models/${modelName}/form.json`
    ));

    Model.form = function(id, cb) {
      if (id) {
        let include = {};
        if (options.form && options.form.include) {
          include = options.form.include;
        }

        Model.findById(id, {include}).then(
          res => {
            if (!res) {
              cb(errors.notFound());
              return;
            }

            cb(null, {
              fields: formSchema.fields,
              model: res,
            });
          },
          err => cb(err)
        );
      } else {
        cb(null, formSchema);
      }
    };

    Model.remoteMethod('form', {
      accepts: {
        arg: 'id',
        type: 'any',
      },
      http: {
        verb: 'get',
      },
      returns: {
        arg: 'schema',
        type: 'object',
      },
    });
  }

  if (!Model.grid && options.grid != false) {
    const gridSchema = require(path.resolve(
      __dirname,
      `../models/${modelName}/grid.json`
    ));

    Model.grid = function(ignore, cb) {
      cb(null, gridSchema);
    };

    Model.remoteMethod('grid', {
      accepts: {
        arg: 'id',
        type: 'any',
      },
      http: {
        verb: 'get',
      },
      returns: {
        arg: 'schema',
        type: 'string',
      },
    });
  }
};
