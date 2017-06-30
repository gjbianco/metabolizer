module.exports = function(metaVars = ['version']) {
  const retObject = {};
  for (meta of metaVars) {
    retObject[meta] = getEnvVar(meta);
  }
  return function(req, res) {
    res.json(retObject);
  }
}

function getEnvVar(varName) {
  return process.env['npm_package_'+varName];
}