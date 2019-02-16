module.exports = function(api) {
  if (api) {
    api.cache(true);
  }

  const presets = [['@babel/preset-env', { targets: { node: '8.10.0' } }]];

  return {
    presets
  };
};
