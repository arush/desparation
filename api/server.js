// Generated by CoffeeScript 1.4.0
(function() {
  var MailChimpAPI, Parse, Recurly, app, auth, brandidApi, brandidAuth, express, intercom, intercom_settings, mcApiKey, mcList, mcapi, parse, parse_settings, port, recurly, recurlyKeys, recurlyjs, xmlBodyParser,
    __hasProp = {}.hasOwnProperty;

  brandidAuth = require("./custom_modules/brandid/auth");

  xmlBodyParser = require("./custom_modules/xmlBodyParser/xmlBodyParser");

  express = require("express");

  Recurly = require("node-recurly");

  recurlyjs = require("node-recurlyjs-sign");

  Parse = require("parse-api").Parse;

  if (process.env.NODE_ENV === "production") {
    mcList = "60f76471f7";
    intercom_settings = {
      "API_KEY": "cd79fc0d586c61ed67a710030f88c5049e3ba055",
      "APP_ID": "myporahm"
    };
    recurly = new Recurly(require('./recurly-config'));
    recurlyKeys = require('./recurly-config');
    parse_settings = {
      "MASTER_KEY": "BVXQrje6m0q7xghU77q337xa6BH24ZWA0SsrVZyV",
      "APP_ID": "cWsBzcLQQMy80sF7KOYWPkeVKDxshxQWUwWk1b27"
    };
    brandidApi = brandidAuth.getAuth("production");
  } else {
    mcList = "776ea4d634";
    intercom_settings = {
      "API_KEY": "199227a1d7597f571a91cc7aabe9418ac0186c19",
      "APP_ID": "2eqflc09"
    };
    recurly = new Recurly(require('./recurly-dev-config'));
    recurlyKeys = require('./recurly-dev-config');
    parse_settings = {
      "MASTER_KEY": "ZJT0EjWExU7S7l6sUkKG13Dc6DI8nbssSFoxCv3P",
      "APP_ID": "oB4lSEsDL1MuJbLiTe4pHQbNvCJAzfu4nUMdsLL2"
    };
    brandidApi = brandidAuth.getAuth("dev");
  }

  parse = new Parse(parse_settings.APP_ID, parse_settings.MASTER_KEY);

  intercom = require('node-intercom').app(intercom_settings);

  MailChimpAPI = require("mailchimp").MailChimpAPI;

  mcApiKey = "dc139a3abdb76130fd9428050e80e9a6-us4";

  try {
    mcapi = new MailChimpAPI(mcApiKey, {
      version: "1.3",
      secure: true
    });
  } catch (error) {
    console.log(error.message);
  }

  port = 3000;

  app = express();

  auth = express.basicAuth(brandidApi.user, brandidApi.password);

  app.configure(function() {
    app.use(xmlBodyParser.xmlBodyParser);
    return app.use(express.bodyParser());
  });

  app.get('/', function(req, res) {
    res.contentType("text/html");
    return res.send('<h1>No entry for you mofo!</h1>', 200);
  });

  app.post('/recurly/sign', auth, function(req, res) {
    var params, signature;
    params = req.body;
    signature = recurlyjs.sign(params, recurlyKeys.PRIVATE_KEY);
    res.contentType("text/plain");
    return res.send(signature, 200);
  });

  app.post('/recurly/push', auth, function(req, res) {
    var accountCode, attr, recurlyPush, value, _results;
    recurlyPush = req.body;
    _results = [];
    for (attr in recurlyPush) {
      if (!__hasProp.call(recurlyPush, attr)) continue;
      value = recurlyPush[attr];
      if (attr === 'successful_payment_notification') {
        console.dir('Found a successful_payment_notification!');
        res.contentType("application/json");
        _results.push(res.send('done', 200));
      } else if (attr === 'new_account_notification') {
        console.dir('Found a new_account_notification!');
        accountCode = recurlyPush.new_account_notification.account[0].account_code[0];
        _results.push(recurly.accounts.get(accountCode, function(data) {
          var intercom_payload;
          console.log(data);
          if (data.status === "ok") {
            intercom_payload = {
              email: accountCode,
              "Card on File": true
            };
            intercom.users.put(intercom_payload, function(code, body) {
              return console.log(code, body);
            });
            return parse.updateUser({
              email: accountCode
            }, {
              recurlyAccountCode: accountCode
            }, function(err, user) {
              if (err == null) {
                console.dir(user);
                res.send(user);
                return res.send(200);
              } else {
                console.dir('Error trying to retrieve user from Parse, assumed dead.');
                console.dir(err);
                res.contentType("application/json");
                res.send(err);
                return res.send(200);
              }
            });
          }
        }));
      } else if (attr === 'billing_info_updated_notification') {
        console.dir('Found a billing_info_updated_notification!');
        accountCode = recurlyPush.billing_info_updated_notification.account[0].account_code[0];
        _results.push(recurly.accounts.get(accountCode, function(data) {
          if (data.status === "ok") {
            res.contentType("application/json");
            return res.send(data, 200);
          }
        }));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  });

  app.post('/user/new', auth, function(req, res) {
    var intercom_payload, mergeVars, payload, user;
    user = req.body;
    if (typeof user.email !== "undefined") {
      intercom_payload = {
        "email": user.email
      };
      mergeVars = {};
      if (typeof user.gender !== "undefined") {
        mergeVars.GENDER = user.gender;
        intercom_payload.GENDER = user.gender;
      }
      if (typeof user.first_name !== "undefined") {
        mergeVars.FNAME = user.first_name;
        intercom_payload.name = user.first_name;
      }
      if (typeof user.last_name !== "undefined") {
        mergeVars.LNAME = user.last_name;
        if (intercom_payload.name !== "undefined") {
          intercom_payload.name = intercom_payload.name + " " + user.last_name;
        }
      }
      if (typeof user.birthday !== "undefined") {
        mergeVars.DOB = user.birthday;
        intercom_payload.DOB = user.birthday;
        mergeVars.BIRTHDAY = user.birthday.substr(0, 5);
        intercom_payload.BIRTHDAY = user.birthday.substr(0, 5);
      }
      if (typeof user.authData !== "undefined") {
        if (typeof user.authData.facebook !== "undefined") {
          mergeVars.FBID = user.authData.facebook.id;
          intercom_payload.FBID = user.authData.facebook.id;
        }
      }
      if (typeof user.objectId !== "undefined") {
        mergeVars.UID = user.objectId;
        intercom_payload.UID = user.objectId;
      }
      payload = {
        id: mcList,
        email_address: user.email,
        merge_vars: mergeVars,
        email_type: 'html',
        double_optin: false,
        update_existing: true,
        replace_interests: true,
        send_welcome: false
      };
      console.dir(payload);
      mcapi.listSubscribe(payload, function(error, data) {
        if (error == null) {
          res.contentType("application/json");
          return res.send(200, JSON.stringify(data));
        } else {
          return console.log(error);
        }
      });
      console.dir(intercom_payload);
      return intercom.users.post(intercom_payload, function(code, body) {
        return console.log(code, body);
      });
    }
  });

  app.listen(port, function() {
    return console.log("Listening on " + port);
  });

}).call(this);
