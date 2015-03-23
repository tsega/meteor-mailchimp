Mailchimp = {};

Mailchimp.requestCredential = function (options, callback) {

    if (!callback && typeof options === 'function') {
        callback = options;
        options = {};
    }

    var config = ServiceConfiguration.configurations.findOne({service: 'mailchimp'});
    if (!config) {
        callback && callback(new ServiceConfiguration.ConfigError("Service not configured"));
        return;
    }

    var credentialToken = Random.secret();

    var scope = (options && options.requestPermissions) || [];
    var flatScope = _.map(scope, encodeURIComponent).join('+');

    var loginStyle = OAuth._loginStyle('mailchimp', config, options);
    var state = OAuth._stateParam(loginStyle, credentialToken);

    var loginUrl =
        'https://login.mailchimp.com/oauth2/authorize' +
            '?response_type=code' +
            '&client_id=' + config.clientId +
            '&scope=' + flatScope +
            '&redirect_uri=' + encodeURIComponent(Meteor.absoluteUrl('_oauth/mailchimp?close', {replaceLocalhost:true})) +
            '&state=' + state;

    OAuth.launchLogin({
        loginService: "mailchimp",
        loginStyle: loginStyle,
        loginUrl: loginUrl,
        credentialRequestCompleteCallback: callback,
        credentialToken: credentialToken,
        popupOptions: { height: 600 }
    });

};

