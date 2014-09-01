# Foreword about express-sails-vhosts

express-sails-vhosts is a minimalist demo on how to run multiple and mixed applications on one server with Node.js and Express/Sails frameworks.

In this example app1, app2 and app3 are Express apps, and app4 is a Sails.js app.  

Because of the nature of the [Sails.js framework](http://sailsjs.org/) we need to tweak the files `server.js`and `app4-sails/app.js` in order to be able to run Sails.js apps along with Express apps on the same Node.js server.

> This example is based on Loïc Saint-Roch example ([@loicsaintroch](https://github.com/loicsaintroch/express-vhosts)) and solution found thanks to ([@sgress454](https://github.com/sgress454)) via ([StackOverFlow](http://stackoverflow.com/questions/25345423/node-js-express-with-vhost-conflict-with-sails-js-framework-app)).

## License

MIT License  Copyright © 2014 Miguel Bocquier