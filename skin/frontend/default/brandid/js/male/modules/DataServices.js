/**
 * DataService Module
 *
 *  A collection of services that provide a variety of back-end options for saving
 *  and retrieving data.  StackMob.com and Parse.com are Backend-as-a-Service companies.
 *  They provide easy to use databases for mobile and HTML5 applications.
 */

angular.module('DataServices', []) 
/**
 * Parse Service
 * Use Parse.com as a back-end for the application.
 */
.factory('ParseService', ['HelperService','$q', function(HelperService,$q) {

    var environment = HelperService.getEnvironment();
    // Initialize Parse API and objects.
    if(environment === "www") {
      // initialise LIVE connection to Parse
      Parse.initialize("cWsBzcLQQMy80sF7KOYWPkeVKDxshxQWUwWk1b27", "rhu8oSmv0Z7qms57HNvJaLlwpc9Mkl2kjIefkTXl");
    } else if(environment === "hack") {
      // intitialise HACK connection to Parse
      Parse.initialize("FSjSiuBpXRS5vSeDVLlhbiraR2jkfH4D9HkFFzzu", "I8ZQlxqbAkSWn5oJq4YNHSvMEgT87hYy5r0cA3jV");
    } else {
      // intitialise TEST connection to Parse
      Parse.initialize("oB4lSEsDL1MuJbLiTe4pHQbNvCJAzfu4nUMdsLL2", "LZ88ABUjZ0l92Nogc3TlCWRlGeKWBkqOXWw382hu");
    }

    // Define Parse Models
    
    var Boxers = Parse.Object.extend("Boxers");
    var Socks = Parse.Object.extend("Socks");
    var Tees = Parse.Object.extend("Tees");
    var Jumpers = Parse.Object.extend("Jumpers");
    var Hoodies = Parse.Object.extend("Hoodies");

    // var BrandidUser = Parse.User.extend({
    //   initialize: function() {
    //     // if (!this.get("createdAt_unix")) {

    //     //   var createdAtTimeStamp = Math.round((new Date()).getTime() / 1000);

    //     //   this.set({ "createdAt_unix": this.createdAt });

    //     // }
    //   }
    // });

    // FACEBOOK init

    // window.fbAsyncInit = function() {
    //   Parse.FacebookUtils.init({
    //     appId      : '250529718312984', // Facebook App ID
    //     channelUrl : '//brandid.macbook.pro/facebook/channel', // Channel File
    //     status     : true, // check login status
    //     cookie     : true, // enable cookies to allow Parse to access the session
    //     xfbml      : true  // parse XFBML
    //   });
     
    //   // Additional initialization code here
    // };


    /**
     * ParseService Object
     * This is what is used by the main controller to save and retrieve data from Parse.com.
     * Moving all the Parse.com specific stuff into a service allows us to later swap it out 
     * with another back-end service or localStorage without modifying my controller much, if at all.
     */
    var ParseService = {
      name: "Parse",

      initMaleAnswersForUser: function(user, male_answers, scope) {

        // logged out users
        male_answers.boxers = new Boxers();
        male_answers.socks = new Socks();
        male_answers.tees = new Tees();
        male_answers.jumpers = new Jumpers();
        male_answers.hoodies = new Hoodies();

        // logged in users
        if(user !== null) {
          
          // users might have answers stored in database, so go get them
          // TODO: this will be so much easier if we use colletions

          // this.query.usersBoxers(user, male_answers);

          // this.query.usersSocks(user, male_answers);
          // this.query.usersTees(user, male_answers);
          // this.query.usersJumpers(user, male_answers);
          // this.query.usersHoodies(user, male_answers);

        }

        // return male_answers;
      },

      // TODO: use collections instead
      query: {
        usersBoxers: function(user, male_answers, scope) {
          var deferred = $q.defer();

          
            // Parse.Object was previously created
            var query = new Parse.Query(Boxers);
            query.equalTo("user", user);
            query.first({
              success: function(result) {
                // console.log(result);
                scope.$apply(function() {
                  deferred.resolve(result);
                });

              },
              error: function(result,error) {
                
                deferred.reject(error);

                console.log(result);
                console.log(error);
              }
            });
          

          return deferred.promise;
            
        },
        usersSocks: function(user, male_answers) {
          // Assume Parse.Object myPost was previously created.
          var query = new Parse.Query(Socks);
          query.equalTo("user", user);
          query.first({
            success: function(result) {
              // if query results are undefined, init the item with empty answers
              if(typeof(result) === "undefined") {
                male_answers.socks = new Socks();
              } else {
                male_answers.socks = result;
              }

            },
            error: function(result,error) {
              console.log(result);
              console.log(error);
            }
          });
        },
        usersTees: function(user, male_answers) {
          // Assume Parse.Object myPost was previously created.
          var query = new Parse.Query(Tees);
          query.equalTo("user", user);
          query.first({
            success: function(result) {
              // if query results are undefined, init the item with empty answers
              if(typeof(result) === "undefined") {
                male_answers.tees = new Tees();
              } else {
                male_answers.tees = result;
              }

            },
            error: function(result,error) {
              console.log(result);
              console.log(error);
            }
          });
        },
        usersJumpers: function(user, male_answers) {
          // Assume Parse.Object myPost was previously created.
          var query = new Parse.Query(Jumpers);
          query.equalTo("user", user);
          query.first({
            success: function(result) {
              // if query results are undefined, init the item with empty answers
              if(typeof(result) === "undefined") {
                male_answers.jumpers = new Jumpers();
              } else {
                male_answers.jumpers = result;
              }
            },
            error: function(result,error) {
              console.log(result);
              console.log(error);
            }
          });
        },
        usersHoodies: function(user, male_answers) {
          // Assume Parse.Object myPost was previously created.
          var query = new Parse.Query(Hoodies);
          query.equalTo("user", user);
          query.first({
            success: function(result) {
              // if query results are undefined, init the item with empty answers
              if(typeof(result) === "undefined") {
                male_answers.hoodies = new Hoodies();
              } else {
                male_answers.hoodies = result;
              }
            },
            error: function(result,error) {
              console.log(result);
              console.log(error);
            }
          });
        }

      },

      initNewUser: function() {
        var user = new Parse.User();
        return user;
      },

      fbLoginAndSave: function(male_answers,category,currentUser) {
        
        var self = this;

        Parse.FacebookUtils.logIn("user_likes,email,user_photos", {
          success: function(user) {
            // Handle successful login



            // if this is a registration, we need to capture some data from FB
            if(!user.get('email')) {
              self.saveRegistrationDataFromFacebook(male_answers,category,user);
            } else {
              
              // if not identify the user in metrics and continue the save
              HelperService.metrics.identify(user.get('email'));
              HelperService.metrics.setLastLogin();

              self.saveAnswersAfterSuccessfulLogin(male_answers,category,user);
            }

            
          },
          error: function(user, error) {
            // Handle errors and cancellation
            alert('Something went wrong, please let @male know so he can fix it - male@getbrandid.com or @male');
            console.log(error);

          }

        });

      },

      saveRegistrationDataFromFacebook: function(male_answers,category,user) {
        var authData = user.get("authData");
        var requestURI = '/' + authData.facebook.id + '?fields=first_name,last_name,gender,email,birthday,location';
        var self = this;

        FB.api(requestURI, function(response) {
          
          // Facebook response is unreliable. Need to check if objects exist first
          // i wish we were doing this in coffeescript
          var metricsPayload = {
            "Registration Method": "Facebook Connect",
            "$created": new Date(),
            "$last_login": new Date()
          };

          if(response.first_name !== "undefined") {
            self.setToUser( user, "first_name", response.first_name);
            metricsPayload.first_name = response.first_name;
          }
          if(response.last_name !== "undefined") {
            self.setToUser( user, "last_name", response.last_name);
            metricsPayload.last_name = response.last_name;
          }
          if(response.gender !== "undefined") {
            self.setToUser( user, "gender", response.gender);
            metricsPayload.gender = response.gender;
          }
          if(response.birthday !== "undefined") {
            self.setToUser( user, "birthday", response.birthday);
            metricsPayload.birthday = response.birthday;
          }
          if(response.location !== "undefined") {
            self.setToUser( user, "location", response.location);
            if(response.location.name !== "undefined") {
              metricsPayload.location = response.location.name;
            }
          }

          // if email exists, use that as the identity in metrics
          if(response.email !== "undefined") {
            self.setToUser( user, "email", response.email);
            HelperService.metrics.identify(response.email);
            metricsPayload.email = response.email;
          }

          /* KISSmetrics Tracking */
          if(typeof(_kmq) !== "undefined") {
            _kmq.push(['record', 'Registered', metricsPayload]);
          }
          /* Mixpanel Tracking */
          if(typeof(mixpanel) !== "undefined") {

            // it is imperative alias is only called once on a user - at registration. all other places, use identify
            /*****/
            // mixpanel.alias(response.email);
            /*****/

            // NB - mixpanel.identify may or may not have been called earlier depending if email address was given or not
            mixpanel.track('Registered',metricsPayload);
            mixpanel.people.set(metricsPayload);
            // mixpanel.register({
            //   first_name: response.first_name,
            //   last_name: response.last_name,
            //   email: response.email,
            //   gender: response.gender,
            //   birthday: response.birthday,
            //   location: response.location.name
            // });
          }

          user.save(null, {
            success: function(user) {
              // The object was saved successfully.

              // Due to a bug in the Parse SDK, need to do a fetch here
              user.fetch({
                success: function (user) {
                  // now we can save the answers against the user
                  self.saveAnswersAfterSuccessfulLogin(male_answers,category,user);
                },
                error: function (user,error) {
                    self.saveAnswersAfterSuccessfulLogin(male_answers,category,user);
                    console.log(user);
                }
              });
            },
            error: function(user, error) {
              // The save failed.
              // error is a Parse.Error with an error code and description.
              self.saveAnswersAfterSuccessfulLogin(male_answers,category,user);
              console.log(error);
            }
          });


        });

        // save user and execute saveAnswersAfterSuccessfulLogin callback

      },

      saveAnswersAfterSuccessfulLogin: function(male_answers,category,user) {
        // attach answered question to logged in user

        var saveNeeded = HelperService.isSaveNeeded(male_answers);

        if(saveNeeded) {
          this.setAnswer(male_answers,category,'user',user);

          // this sends user to the checkout with a callback after save
          var callback = function() {
            location.reload();
          };

          this.saveAnswer(male_answers,category,callback);
          
        } else {
          // user has nothing to save, so login is done
          location.reload();  
        }
      },

      setAnswer: function(male_answers,category,question,answer) {

        var parseAnswerObject = this.getObjectFromMaleAnswers(male_answers,category);

        parseAnswerObject.set(question,answer);


      },

      getObjectFromMaleAnswers: function(male_answers,category) {
        var returnObject;

        switch(category) {
          case 'socks':
            returnObject = male_answers.socks;
            break;
          case 'boxers':
            returnObject = male_answers.boxers;
            break;
          case 'tees':
            returnObject = male_answers.tees;
            break;
          case 'jumpers':
            returnObject = male_answers.jumpers;
            break;
          case 'hoodies':
            returnObject = male_answers.hoodies;
            break;
          case 'default':
            // this means category is checkout or intro or something else
            returnObject = null;
            break;
        };

        return returnObject;
      },

      saveAnswer: function(male_answers, category, callback) {

        var parseAnswerObject = this.getObjectFromMaleAnswers(male_answers,category);

        if(parseAnswerObject !== null) {
          parseAnswerObject.save(null, {
            success: function(savedAnswer) {
              // The object was saved successfully.

              if(callback !== null) {
                callback();
              }

            },
            error: function(savedAnswer, error) {
              // The save failed.
              // error is a Parse.Error with an error code and description.
              console.log(savedAnswer);
              console.log(error);
            }
          });
        }
      },


      fetch: function(currentUser) {
        currentUser.fetch({
          success: function(user) {
            // The object was refreshed successfully.
            // alert('fetched successfully');

          },
          error: function(user, error) {
            // The object was not refreshed successfully.
            // error is a Parse.Error with an error code and description
            alert("Something went wrong, please contact @male");
            console.log(error);
          }
        });

      },

      user: {
        // wrapper for Parse's user.get()
        get: function(attribute) {
          var user = this.getCurrentUser();
          var attributeValue = user.get(attribute);
          return attributeValue;
        }
      },

      getCurrentUser: function() {
        return Parse.User.current();
      },

      setToUser: function(currentUser, key, value) {
        
        currentUser.set(key,value);
        
      },

      saveUser: function(currentUser) {
        currentUser.save(null, {
          success: function(user) {
            // The object was saved successfully.


            // Due to a bug in the Parse SDK, need to do a fetch here
            currentUser.fetch({
              success: function (user) {
                // nothing really to do
              },
              error: function (user,error) {
                  console.log(user);
              }
            });
          },
          error: function(user, error) {
            // The save failed.
            // error is a Parse.Error with an error code and description.
            console.log(error);
          }
        });

      },
      
      // feedback form on every page
      submitFeedback: function(currentUser,userFeedback,feedbackForm,section,category,question) {

        // Instantiate a feedback object
        var feedback = new Feedback();

        feedback.set("section",section);
        feedback.set("category",category);
        feedback.set("question",question);
        feedback.set("message",userFeedback.message);
        feedback.set("browser",userFeedback.browser);
        feedback.set("OS",userFeedback.OS);

        if(currentUser) {
          feedback.set("user",currentUser);
        }


        // console.log(feedback);

        feedback.save(null, {
          success: function(feedbackSaved) {
            // The object was saved successfully.

            jQuery('#feedback-message-text').val("");

            alert("Thanks for your feedback!");

          },
          error: function(feedbackSaved, error) {
            // The save failed.
            // error is a Parse.Error with an error code and description.

          }
        });
      }
      
    
    };

    // The factory function returns ParseService, which is injected into controllers.
    return ParseService;
}])

/**
 * DataService is a simple adapter that returns either the Parse Service, StackMob Service,
 * or single-session Backbone service.
 * This service is injected into the Main Controller
 */
.factory('DataService', ['ParseService', '$location', function (ParseService,$location) {
  // Use the BackboneService by default
  // var serviceToUse = BackboneService;

  // StackMob apps must be hosted on the stackmob server, or be run locally using the stackmob runner, which uses port 4567
  //if ( $location.absUrl().indexOf("stackmob") > 0 || $location.absUrl().indexOf("4567") > 0 ) serviceToUse = StackMobService;

  // If 'parse' appears in the path, use the Parse.com service instead
  // if ( $location.path() === '/parse' ) serviceToUse = ParseService;

  var serviceToUse = ParseService;

  return serviceToUse;
}]);

