module.exports = function(metaVars = ['npm_package_version']) {
  const retObject = {};
  for (meta of metaVars) {
    retObject[meta] = process.env[meta];
  }
  return function(req, res) {
    res.json(retObject);
  }
}