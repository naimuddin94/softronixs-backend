var admin = require("firebase-admin");

var serviceAccount = require("../lib/softronixs-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
