brandidAuth = require "./custom_modules/brandid/auth"
xmlBodyParser = require "./custom_modules/xmlBodyParser/xmlBodyParser"
express = require "express"
Recurly = require "node-recurly"
recurlyjs = require "node-recurlyjs-sign"
Parse = require("parse-api").Parse

if process.env.NODE_ENV is "production"
	mcList = "60f76471f7" # LIVE
	intercom_settings =
		"API_KEY":"cd79fc0d586c61ed67a710030f88c5049e3ba055",
		"APP_ID": "myporahm"
	recurly = new Recurly(require('./recurly-config'))
	recurlyKeys = require('./recurly-config')
	parse_settings = 
		"MASTER_KEY":"BVXQrje6m0q7xghU77q337xa6BH24ZWA0SsrVZyV",
		"APP_ID": "cWsBzcLQQMy80sF7KOYWPkeVKDxshxQWUwWk1b27"
	brandidApi = brandidAuth.getAuth "production"
else
	mcList = "776ea4d634" # DEV
	intercom_settings =
		"API_KEY":"199227a1d7597f571a91cc7aabe9418ac0186c19",
		"APP_ID": "2eqflc09"
	recurly = new Recurly(require('./recurly-dev-config'))
	recurlyKeys = require('./recurly-dev-config')
	parse_settings = 
		"MASTER_KEY":"ZJT0EjWExU7S7l6sUkKG13Dc6DI8nbssSFoxCv3P",
		"APP_ID": "oB4lSEsDL1MuJbLiTe4pHQbNvCJAzfu4nUMdsLL2"
	brandidApi = brandidAuth.getAuth "dev" # its arbitrary what you pass here, as long as its not "production"

##### PARSE #####

parse = new Parse parse_settings.APP_ID, parse_settings.MASTER_KEY

##### INTERCOM #####

intercom = require('node-intercom').app intercom_settings

##### MAILCHIMP #####

MailChimpAPI = require("mailchimp").MailChimpAPI
mcApiKey = "dc139a3abdb76130fd9428050e80e9a6-us4"

try
  mcapi = new MailChimpAPI(mcApiKey,
    version: "1.3"
    secure: true
  )
catch error
  console.log error.message

##### END MAILCHIMP #####


port = 3000
app = express()
auth = express.basicAuth brandidApi.user, brandidApi.password

app.configure ->
	app.use xmlBodyParser.xmlBodyParser
	app.use express.bodyParser()

app.get '/', (req, res) ->

	# responseData = req.body

	res.contentType "text/html"
	res.send '<h1>No entry for you mofo!</h1>', 200

app.post '/recurly/sign', auth, (req, res) ->
	console.log 'received request to /recurly/sign of' + req.body
	params = req.body
	signature = recurlyjs.sign(params, recurlyKeys.PRIVATE_KEY)

	console.log 'generated signature ' + signature

	res.contentType "text/plain"
	res.send signature, 200

app.post '/answers/update', auth, (req, res) ->

	# update intercom
	intercom_payload = req.body

	intercom.users.put intercom_payload, (code, body) ->
		# console.log code, body
		console.log 'Updated user in intercom.io, got status: ' + code
		res.contentType "application/json"
		res.send body, code


app.post '/recurly/push', auth, (req, res) ->

	recurlyPush = req.body

	for own attr, value of recurlyPush
		if attr is 'successful_payment_notification'
			console.log 'Found a successful_payment_notification!'
			res.contentType "application/json"
			res.send 'done', 200

		# TODO: refactor, it is the same code used in for billing_info_updated
		else if attr is 'new_account_notification'
			console.log 'Found a new_account_notification!'

			# best practice - make sure the user is actually in Recurly (this push noty may be old)
			accountCode = recurlyPush.new_account_notification.account[0].account_code[0]
			console.log 'got the accountCode: ' + accountCode

			recurly.accounts.get accountCode, (data) ->
				if data.status is "ok"
					console.log 'Successfully retrieved the account data from Recurly'

					# update intercom
					intercom_payload = 
						email : accountCode
						"Card on File" : true

					intercom.users.put intercom_payload, (code, body) ->
						# console.log code, body
						console.log 'Sent accountCode and \'Card on File\' :true to intercom.io, got status: ' + code

					# update Parse with recurly account_code (assuming Parse email == recurly accountCode anyway)
					# we need to do this because users in Parse without recurlyAccountCode are assumed not to have card on file

					parse.updateUser email: accountCode,
						recurlyAccountCode: accountCode
					, (err, user) ->
						unless err?
							# update parse on success, else send error message
							# parse.update
							# console.dir user
							console.log 'Successfully sent Recurly accountCode to Parse'

							res.send user
							res.send 200
						else
							console.log 'Error trying to update user in Parse, assumed dead.'
							console.log err
							res.contentType "application/json"

							res.send err
							res.send 500



		else if attr is 'billing_info_updated_notification'
			console.log 'Found a billing_info_updated_notification!'

			# best practice - make sure the user is actually in Recurly (this push noty may be old)
			accountCode = recurlyPush.billing_info_updated_notification.account[0].account_code[0]
			console.log 'got the accountCode: ' + accountCode

			# TODO: refactor, it is the same code used in new_account_notification above
			recurly.accounts.get accountCode, (data) ->
				if data.status is "ok"
					console.log 'Successfully retrieved the account data from Recurly'

					# update intercom
					intercom_payload = 
						email : accountCode
						"Card on File" : true

					intercom.users.put intercom_payload, (code, body) ->
						# console.log code, body
						console.log 'Sent accountCode and \'Card on File\' :true to intercom.io, got status: ' + code

					# update Parse with recurly account_code (assuming Parse email == recurly accountCode anyway)
					# we need to do this because users in Parse without recurlyAccountCode are assumed not to have card on file

					parse.updateUser email: accountCode,
						recurlyAccountCode: accountCode
					, (err, user) ->
						unless err?
							# update parse on success, else send error message
							# parse.update
							# console.dir user
							console.log 'Successfully sent Recurly accountCode to Parse'

							res.send user
							res.send 200
						else
							console.log 'Error trying to update user in Parse, assumed dead.'
							console.log err
							res.contentType "application/json"

							res.send err
							res.send 500

app.post '/user/new', auth, (req, res) ->

	# make sure this is only called when email address exists
	# TODO: check whether intercom user already exists

	## refactor into addToMailchimp and addToIntercom
	user = req.body

	if typeof user.email isnt "undefined"
		intercom_payload =
			"email" : user.email
		# for intercom.io, we keep custom fields in CAPSLOCK

		mergeVars = {}

		if typeof user.gender isnt "undefined"
			mergeVars.GENDER = user.gender
			intercom_payload.GENDER = user.gender

		if typeof user.first_name isnt "undefined"
			mergeVars.FNAME = user.first_name
			intercom_payload.name = user.first_name
		
		if typeof user.last_name isnt "undefined"
			mergeVars.LNAME = user.last_name
			intercom_payload.name = intercom_payload.name + " " + user.last_name if intercom_payload.name isnt "undefined"

		if typeof user.birthday isnt "undefined"
			mergeVars.DOB = user.birthday
			intercom_payload.DOB = user.birthday
			# format facebook birthday MM/DD/YYYY to mailchimp birthday MM/DD
			# basically first five chars
			mergeVars.BIRTHDAY = user.birthday.substr 0,5
			intercom_payload.BIRTHDAY = user.birthday.substr 0,5

		if typeof user.authData isnt "undefined"
			if typeof user.authData.facebook isnt "undefined"
				mergeVars.FBID = user.authData.facebook.id
				intercom_payload.FBID = user.authData.facebook.id

		if typeof user.objectId isnt "undefined"
			mergeVars.UID = user.objectId
			intercom_payload.UID = user.objectId

		payload =
			id : mcList
			email_address : user.email
			merge_vars : mergeVars
			email_type : 'html'
			double_optin : false
			update_existing : true
			replace_interests : true
			send_welcome : false

		# console.dir payload


		# MAILCHIMP API CALL

		mcapi.listSubscribe payload,
			(error, data) ->
				unless error?
					console.log 'Successfully subscribed user to Mailchimp'
					res.contentType "application/json"
					res.send 200, JSON.stringify data
				else
					res.contentType "application/json"
					res.send 500, JSON.stringify data
					console.log 'Error subscribing user to Mailchimp'
					console.log error

		## INTERCOM.IO ##

		# console.dir intercom_payload

		# this is a POST not a PUT because this happens at Parse registration, the users' browser probably hasn't reloaded yet
		# this is poor design, should really check if the user exists there or not
		intercom.users.post intercom_payload, (code, body) ->
			# console.log code, body
			console.log 'Tried to create a new user in intercom.io with payload, got status: ' + code

app.listen port, ->
	console.log "Listening on #{port}"