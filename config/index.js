'use strict';

module.exports = function(app) {
  // Get configuration from environment variables
  app.set('port', process.env.PORT || 3000);

  // Setup everything else
  require('./environments.js')(app);
  require('./db.js')(app);
  require('./middleware.js')(app);

  app.get('/', function(req, res){
    res.status(200);
    res.sendfile('app/index.html');

  });
};
