dbURIs = {
  test: "mongodb://localhost/football-club-manager-express-test",
  development: "mongodb://localhost/football-club-manager-express-app",
  production: process.env.MONGODB_URI || "mongodb://localhost/football-club-manager-express-app"
}

module.exports = function(env) {
  return dbURIs[env];
}