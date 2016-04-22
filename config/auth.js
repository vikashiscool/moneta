// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '466060450254931', // your App ID
        'clientSecret'  : '3eabfc40d3ef45e4c17a7d1838875c54', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '556266177342-bdcs8vl83gk398q5a7gu4du3o3aju9br.apps.googleusercontent.com',
        'clientSecret'  : 'lEhBSQ6GaXJ8qfTQ3APdj9me',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};