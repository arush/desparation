typingDelay = 20; // global variable  // match this to text-effects.js

var $j = jQuery.noConflict();

// @codekit-append "core/email.js"
// @codekit-append "core/helper.js"
// @codekit-append "core/images.js"
// @codekit-append "core/buttons.js"
// @codekit-append "core/punter.js"

// @codekit-append "questions/name.js"
// @codekit-append "questions/offside.js"
// @codekit-append "questions/investor.js"
// @codekit-append "questions/work.js"
// @codekit-append "questions/play.js"


var startPrompt = function () {

	setTimeout("printInstructions()",2000);

  	jqconsole.Prompt(true, function (input) {

	  	nameCheck();
	  });
};

function nameCheck() {
	var name = $j.trim(input);
	  	name = name.toLowerCase();
      	name = capitaliseFirstLetter(name);

	    var smallName = name.length <= 1;
	  	// <= 1 char?
	  	if(input.toLowerCase() == 'investor') {
	    	investorAsk();
	    }
	    else if(!smallName) {
	      	// strip whitespace, capitalise and save the name
	      	punter.fname = name;
	      	punter.sexGuess = genderGuess(name);
	      	saveProgress('offside');
	      	window.scrollTo(0,200);
	        if(punter.sexGuess == 'female') {
	        	jqconsole.ClearPromptText();
	        	jqconsole.Write('Hmm... '+ punter.fname + '. Forgive me if I\'m wrong, but that sounds like a girl\'s name.\n\nJust to be sure, I need you to answer this question: ', 'jqconsole-output wordwrap');
	        }
	        else {
	        	jqconsole.Write('Hmm... '+ punter.fname + '. That sounds like a good solid man\'s name.\n\nJust to be sure, I need you to answer this question: ', 'jqconsole-output wordwrap');
	        }
	        offside();
	    }
	    else {
	    	jqconsole.Write(name + '? Really? That\'s what mamma named you, huh?\n\nTry again smarty pants: ', 'jqconsole-output red wordwrap');
	            typeit();
	            startPrompt();
	    }
}