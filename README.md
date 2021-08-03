# Lets-Play-Cards
## WAR card game back-end - written in Node.js and utilizing MongoDB

This is the back-end of our front-end React app at https://github.com/AlvarezJaimeR/Lets-Play-Cards-FE
Please see the front-end readMe for an overview of how to play our War card game.

To run this app: after cloning both repos, add your MongoDB details and jwtSecret token to a default.json in the config directory.
You can then run `npm start` for both repositories.
Assuming the ports are set-up correctly, the front-end React app will be able to access the routes and models coded here.
This will allow you to have a working back-end to store your User data (including new registrations, wins, losses, and games played).

When pushing to production, be sure to correctly configure the apiRoot.js variable on the front-end to correctly access your production back-end app.

Please enjoy our game!
Feel free to customize it and create something new.
