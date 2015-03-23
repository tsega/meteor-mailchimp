Package.describe({
  summary: "A OAuth2 wrapper for the Mailchimp API",
  version: "0.0.4",
  git: "https://github.com/tsega/meteor-mailchimp"
});

Package.on_use(function(api) {

  api.use([
    'oauth@1.1.4-winr.3',
    'oauth2@1.1.3-winr.2',
    'http@1.0.11-winr.5',
    'underscore@1.0.3-winr.2',
    'service-configuration@1.0.4-winr.2',
    'random@1.0.3-winr.2',
    'templating@1.0.12-winr.6'
  ], 'client');

  api.use([
    'oauth@1.1.4-winr.3',
    'oauth2@1.1.3-winr.2',
    'http@1.0.11-winr.5',
    'underscore@1.0.3-winr.2',
    'service-configuration@1.0.4-winr.2'
  ], 'server');

  api.export('Mailchimp');

  api.addFiles(
    [
      'mailchimp_client.js',
      'mailchimp_configuration.html',
      'mailchimp_configuration.js'
    ], 'client');

  api.addFiles(
    [
      'mailchimp_server.js'
    ], 'server');
});
