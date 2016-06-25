Package.describe({
  name: 'hyperborea:c3',
  version: '1.0.2',
  summary: 'C3 visualization library using the official D3 package.',
  git: 'https://github.com/hyperborea/meteor-c3.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.imply('d3js:d3@3.4.13', 'client');
  api.add_files([
    'c3/c3.min.js',
    'c3/c3.css',
  ], 'client');
});