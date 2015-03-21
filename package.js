Package.describe({
  summary: "A OAuth2 wrapper for the Mailchimp API",
  version: "0.0.1",
  git: "https://github.com/tsega/meteor-mailchimp"
});

Package.on_use(function(api) {

  api.use([
    'oauth',
    'oauth2',
    'http',
    'underscore',
    'service-configuration',
    'random',
    'templating'
  ], 'client');

  api.use([
    'oauth',
    'oauth2',
    'http',
    'underscore',
    'service-configuration'
  ], 'server');

  api.export('Mailchimp');

  api.addFiles(
    [
      'mailchimp_client.html',
      'mailchimp_configuration.html',
      'mailchimp_configuration.js'
    ], 'client');

  api.addFiles(
    [
      'mailchimp_server.html'
    ], 'server');
});
