/* */ 
var db = require("./db");
for (var game of db)
  if (!game)
    throw new Error('game does not exist!');
