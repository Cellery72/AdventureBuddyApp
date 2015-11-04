var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/users',
    facebook: {
        clientID: '1071607026191169',
        clientSecret: 'bc9723cb9a4063a0b95591295b32508e',
        callbackURL: 'http://localhost:' + port + '/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'yFntGKkvMZkDKL47XGtzLNdRA',
        clientSecret: 'EAiPTjPYLX5nrkpRtxYQflbWpRTqqLwwBHRLh7WpdQ1P69Tre6',
        callbackURL: 'http://localhost:' + port + '/oauth/twitter/callback'
    }
};