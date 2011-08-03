<?php
class Gigya_Socialize_Helper_Reaction extends Mage_Core_Helper_Abstract {

	public $JSONForDefaultReactions= array(
 'loveit'=>"{text: 'Love it', ID: 'loveit', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Love_it_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Love_it_Icon_Down.png', tooltip:'Love this item', userMessage: 'I love this!', headerText:'Your reaction to this post is \'Love it\'' }"
,'cute'=>"{text: 'Cute', ID: 'cute', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Cute_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Cute_Icon_Down.png', tooltip:'This item is cute', userMessage: 'So cute!',headerText:'Your reaction to this post is \'Cute\'' }"
,'killer'=>"{text: 'Killer',ID: 'killer',iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Killer_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Killer_Icon_Down.png', tooltip:'This item is a killer', userMessage: 'This is a killer!', headerText:'Your reaction to this post is \'Killer\'' }"
,'amazing'=>"{text: 'Amazing',ID: 'amazing',iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Amazing_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Amazing_Icon_Down.png',tooltip:'This item is amazing',userMessage: 'This is amazing!',headerText:'Your reaction to this post is \'Amazing\'' }"
,'omg'=>"{text: 'OMG',ID: 'omg', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/OMG_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/OMG_Icon_Down.png',tooltip:'OMG to this',userMessage: 'OMG!',headerText:'Your reaction to this post is \'OMG\'' }"
,'musthear'=>"{text: 'Must hear',ID: 'musthear',iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/MustHear_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/MustHear_Icon_Down.png',tooltip:'Must hear this item',userMessage: 'Must hear this!',headerText:'Your reaction to this post is \'Must Hear\'' }"
,'geeky'=>"{text: 'Geeky',ID: 'geeky',iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Geeky_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Geeky_Icon_Down.png',tooltip:'This item is geeky', userMessage: 'This is geeky!',headerText:'Your reaction to this post is \'Geeky\'' }"
,'fashionable'=>"{text: 'Fashionable',ID: 'fashionable', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Fashionable_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Fashionable_Icon_Down.png',tooltip:'This item is fashionable',userMessage: 'This is fashionable!',headerText:'Your reaction to this post is \'Fashionable\'' }"
,'attending'=>"{text: 'Attending',ID: 'attending', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Attending_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Attending_Icon_Down.png',tooltip:'Attending this', userMessage: 'Attending this!',	headerText:'Your reaction to this post is \'Attending\'' }"
,'mustread'=>"{text: 'Must read',ID: 'mustread', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/MustRead_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/MustRead_Icon_Down.png',tooltip:'Must read this item',userMessage: 'Must read this!', headerText:'Your reaction to this post is \'Must Read\'' }"
,'aged'=>"{text: 'Aged',ID: 'aged', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Aged_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Aged_Icon_Down.png', tooltip:'This item is aged',userMessage: 'Aged',headerText:'Your reaction to this post is \'Aged\''}"
,'agree'=>"{text: 'Agree',ID: 'agree',iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Agree_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Agree_Icon_Down.png',tooltip:'I agree with this item',userMessage: 'I agree!',headerText:'Your reaction to this post is \'Agree\''}"
,'alluring'=>"{text: 'Alluring',ID: 'alluring', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Alluring_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Alluring_Icon_Down.png', tooltip:'This item is alluring',userMessage: 'Alluring',headerText:'Your reaction to this post is \'Alluring\''}"
,'annoying'=>"{text: 'Annoying',ID: 'annoying', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Annoying_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Annoying_Icon_Down.png', tooltip:'This item is annoying',userMessage: 'So annoying!',headerText:'Your reaction to this post is \'Annoying\''}"
,'awesome'=>"{text: 'Awesome',ID: 'awesome', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Awesome_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Awesome_Icon_Down.png', tooltip:'This item is awesome',userMessage: 'This is awesome!',headerText:'Your reaction to this post is \'Awesome\''}"
,'blah'=>"{text: 'Blah',ID: 'blah', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Blah_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Blah_Icon_Down.png',tooltip:'This item is blah',userMessage: 'Blah!',headerText:'Your reaction to this post is \'Blah\''}"
,'boo'=>"{text: 'Boo',ID: 'boo', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Boo_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Boo_Icon_Down.png',tooltip:'Boo to this', userMessage: 'Boo!',headerText:'Your reaction to this post is \'Boo\''}"
,'covet'=>"{text: 'Covet',ID: 'covet', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Covet_Icon_Up.png',iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Covet_Icon_Down.png',tooltip:'Covet this item',userMessage: 'I covet this!',headerText:'Your reaction to this post is \'Covet it\''}"
,'crazy'=>"{text: 'Crazy', ID: 'crazy', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Crazy_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Crazy_Icon_Down.png', tooltip:'This item is crazy', userMessage: 'This is crazy!', headerText:'Your reaction to this post is \'Crazy\''}"
,'designer'=>"{text: 'Designer', ID: 'designer', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Designer_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Designer_Icon_Down.png', tooltip:'Designer item', userMessage: 'Designer item!', headerText:'Your reaction to this post is \'Designer\''}"
,'disagree'=>"{text: 'Disagree', ID: 'disagree', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Disagree_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Disagree_Icon_Down.png', tooltip:'I disagree with this', userMessage: 'I disagree!', headerText:'Your reaction to this post is \'Disagree\''}"
,'dislike'=>"{text: 'Dislike', ID: 'dislike', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Dislike_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Dislike_Icon_Down.png', tooltip:'I dislike this', userMessage: 'I dislike this!', headerText:'Your reaction to this post is \'Dislike\''}"
,'dull'=>"{text: 'Dull', ID: 'dull', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Dull_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Dull_Icon_Down.png', tooltip:'This item is dull', userMessage: 'This is dull!', headerText:'Your reaction to this post is \'Dull\''}"
,'elegant'=>"{text: 'Elegant', ID: 'elegant', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Elegant_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Elegant_Icon_Down.png', tooltip:'This item is elegant',userMessage: 'Elegant', headerText:'Your reaction to this post is \'Elegant\''}"
,'fail'=>"{text: 'Fail', ID: 'fail', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Fail_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Fail_Icon_Down.png', tooltip:'This item fails', userMessage: 'Fail!', headerText:'Your reaction to this post is \'Fail\'' }"
,'finally'=>"{text: 'Finally', ID: 'finally', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Finally_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Finally_Icon_Down.png', tooltip:'Finally', userMessage: 'Finally!', headerText:'Your reaction to this post is \'Finally\''}"
,'fresh'=>"{text: 'Fresh', ID: 'fresh', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Fresh_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Fresh_Icon_Down.png', tooltip:'This item is fresh', userMessage: 'Fresh!', headerText:'Your reaction to this post is \'Fresh\''}"
,'funny'=>"{text: 'Funny', ID: 'funny', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Funny_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Funny_Icon_Down.png', tooltip:'This is funny', userMessage: 'This is funny!', headerText:'Your reaction to this post is \'Funny\''}"
,'hardcore'=>"{text: 'Hardcore', ID: 'hardcore', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/HardCore_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/HardCore_Icon_Down.png', tooltip:'This item is hardcore', userMessage: 'Hardcore!', headerText:'Your reaction to this post is \'Hardcore\''}"
,'harsh'=>"{text: 'Harsh', ID: 'harsh', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Harsh_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Harsh_Icon_Down.png', tooltip:'This item is harsh', userMessage: 'Harsh!', headerText:'Your reaction to this post is \'Harsh\''}"
,'hateit'=>"{text: 'Hate it', ID: 'hateit', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Hate_it_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Hate_it_Icon_Down.png', tooltip:'I hate this item', userMessage: 'I hate it!', headerText:'Your reaction to this post is \'Hate it\''}"
,'haveit'=>"{text: 'Have it', ID: 'haveit', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/HaveIt_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/HaveIt_Icon_Down.png', tooltip:'I have this item', userMessage: 'Have it!', headerText:'Your reaction to this post is \'Have it\''}"
,'hot'=>"{text: 'Hot', ID: 'hot', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Hot_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Hot_Icon_Down.png', tooltip:'This item is hot',userMessage: 'So hot!', headerText:'Your reaction to this post is \'Hot\''}"
,'important'=>"{text: 'Important', ID: 'important', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Important_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Important_Icon_Down.png', tooltip:'This is important', userMessage: 'Important!', headerText:'Your reaction to this post is \'Important\''}"
,'inmyplaylist'=>"{text: 'In my playlist', ID: 'inmyplaylist', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/InMyPlaylist_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/InMyPlaylist_Icon_Down.png', tooltip:'This item is in my playlist',userMessage: 'This is in my playlist!', headerText:'Your reaction to this post is \'In My Playlist\''}"
,'innovative'=>"{text: 'Innovative', ID: 'innovative', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Innovative_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Innovative_Icon_Down.png', tooltip:'This item is innovative', userMessage: 'Innovative', headerText:'Your reaction to this post is \'Innovative\''}"
,'inspiring'=>"{text: 'Inspiring', ID: 'inspiring', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Inspiring_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Inspiring_Icon_Down.png', tooltip:'This item is inspiring', userMessage: 'Inspiring!', headerText:'Your reaction to this post is \'Inspiring\''}"
,'support'=>"{text: 'I support this', ID: 'support', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/ISupportThis_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/ISupportThis_Icon_Down.png', tooltip:'I support this item',userMessage: 'I support this!', headerText:'Your reaction to this post is \'I Support This\''}"
,'wish'=>"{text: 'I wish I had it', ID: 'wish', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/IWishIHadIt_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/IWishIHadIt_Icon_Down.png', tooltip:'I wish I had this item',userMessage: 'I wish I had it!', headerText:'Your reaction to this post is \'I Wish I Had It\''}"
,'jammin'=>"{text: 'Jammin\'', ID: 'jammin', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Jammin\'_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Jammin\'_Icon_Down.png', tooltip:'This item is jammin'\', userMessage: 'This is jammin\'!', headerText:'Your reaction to this post is \'Jammin\'\''}"
,'justweird'=>"{text: 'Just weird', ID: 'justweird', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/JustWeird_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/JustWeird_Icon_Down.png', tooltip:'This item is just weird',userMessage: 'Just weird', headerText:'Your reaction to this post is \'Just Weird\''}"
,'like'=>"{text: 'Like', ID: 'like', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Like_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Like_Icon_Down.png', tooltip:'I like this',userMessage: 'I like it!', headerText:'Your reaction to this post is \'Like\''}"
,'lol'=>"{text: 'LOL', ID: 'lol', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/LOL_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/LOL_Icon_Down.png', tooltip:'This made me LOL', userMessage: 'LOL!', headerText:'Your reaction to this post is \'LOL\''}"
,'musthave'=>"{text: 'Must have', ID: 'musthave', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/MustHave_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/MustHave_Icon_Down.png', tooltip:'I must have this item', userMessage: 'I must have this!', headerText:'Your reaction to this post is \'Must Have\''}"
,'needit'=>"{text: 'Need it', ID: 'needit', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/NeedIt_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/NeedIt_Icon_Down.png', tooltip:'I need this item', userMessage: 'I need it!', headerText:'Your reaction to this post is \'Need It\''}"
,'new'=>"{text: 'New', ID: 'new', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/New_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/New_Icon_Down.png', tooltip:'This item is new',userMessage: 'This is new', headerText:'Your reaction to this post is \'New\''}"
,'noway'=>"{text: 'No way', ID: 'noway', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/NoWay_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/NoWay_Icon_Down.png', tooltip:'No way to this', userMessage: 'No way!', headerText:'Your reaction to this post is \'No Way\'' }"
,'obsessed'=>"{text: 'Obsessed', ID: 'obsessed', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Obsessed_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Obsessed_Icon_Down.png', tooltip:'I am obsessed with this item', userMessage: 'I\'m obsessed with this!', headerText:'Your reaction to this post is \'Obsessed\''}"
,'old'=>"{text: 'Old', ID: 'old', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Old_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Old_Icon_Down.png', tooltip:'This item is old', userMessage: 'This is old', headerText:'Your reaction to this post is \'Old\''}"
,'onmyipod'=>"{text: 'On my iPod', ID: 'onmyipod', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/OnMyiPod_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/OnMyiPod_Icon_Down.png', tooltip:'This item is on my ipod', userMessage: 'On my iPod!', headerText:'Your reaction to this post is \'On My iPod\''}"
,'outrageous'=>"{text: 'Outrageous', ID: 'outrageous', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Outrageous_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Outrageous_Icon_Down.png', tooltip:'This item is outrageous', userMessage: 'Outrageous!', headerText:'Your reaction to this post is \'Outrageous\''}"
,'recommend'=>"{text: 'Recommend', ID: 'recommend', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Recommend_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Recommend_Icon_Down.png', tooltip:'I recommend this item', userMessage: 'I recommend this!', headerText:'Your reaction to this post is \'Recommend\''}"
,'rotfl'=>"{text: 'ROTFL', ID: 'rotfl', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/ROTFL_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/ROTFL_Icon_Down.png', tooltip:'This item made me ROTFL', userMessage: 'ROTFL!', headerText:'Your reaction to this post is \'ROTFL\''}"
,'scary'=>"{text: 'Scary', ID: 'scary', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Scary_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Scary_Icon_Down.png', tooltip:'This item is scary', userMessage: 'This is scary!', headerText:'Your reaction to this post is \'Scary\''}"
,'swish'=>"{text: 'Swish!', ID: 'swish', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Swish_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Swish_Icon_Down.png', tooltip:'Swish!', userMessage: 'Swish!', headerText:'Your reaction to this post is \'Swish!\''}"
,'taboo'=>"{text: 'Taboo', ID: 'taboo', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Taboo_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Taboo_Icon_Down.png', tooltip:'This item is taboo', userMessage: 'Taboo', headerText:'Your reaction to this post is \'Taboo\''}"
,'tired'=>"{text: 'Tired', ID: 'tired', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Tired_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Tired_Icon_Down.png', tooltip:'This item is tired', userMessage: 'Tired', headerText:'Your reaction to this post is \'Tired\''}"
,'trashy'=>"{text: 'Trashy', ID: 'trashy', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Trashy_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Trashy_Icon_Down.png', tooltip:'This item is trashy', userMessage: 'Trashy!', headerText:'Your reaction to this post is \'Trashy\''}"
,'trendy'=>"{text: 'Trendy', ID: 'trendy', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Trendy_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Trendy_Icon_Down.png', tooltip:'This item it trendy', userMessage: 'This is trendy!', headerText:'Your reaction to this post is \'Trendy\''}"
,'ttth'=>"{text: 'TTTH', ID: 'ttth', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/TTTH_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/TTTH_Icon_Down.png', tooltip:'Talk to the hand', userMessage: 'Talk to the hand', headerText:'Your reaction to this post is \'TTTH\''}"
,'worn'=>"{text: 'Worn', ID: 'worn', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Worn_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Worn_Icon_Down.png', tooltip:'This item is worn', userMessage: 'Worn!', headerText:'Your reaction to this post is \'Worn\''}"
,'wtf'=>"{text: 'WTF', ID: 'wtf', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/WTF_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/WTF_Icon_Down.png', tooltip:'This makes me go WTF',userMessage: 'WTF?!', headerText:'Your reaction to this post is \'WTF\''}"
,'yada'=>"{text: 'Yada', ID: 'yada', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Yada_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Yada_Icon_Down.png', tooltip:'Yada yada yada', userMessage: 'Yada yada yada...', headerText:'Your reaction to this post is \'Yada\''}"
,'yay'=>"{text: 'Yay', ID: 'yay', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Yay_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Yay_Icon_Down.png', tooltip:'This item makes me go yay',userMessage: 'Yay!', headerText:'Your reaction to this post is \'Yay\''}"
,'yuck'=>"{text: 'Yuck', ID: 'yuck', iconImgUp:'http://cdn.gigya.com/gs/i/reactions/icons/Yuck_Icon_Up.png', iconImgOver:'http://cdn.gigya.com/gs/i/reactions/icons/Yuck_Icon_Down.png', tooltip:'This item is yucky', userMessage: 'Yuck!', headerText:'Your reaction to this post is \'Yuck\''}"
	);

/*	
	public function getDefaultReactionIds() {
		return arrry('loveit','cute');
	}
	
	public function getDefaultReaction($id) {
		
		switch ($id) {
			case 'loveit': $reaction= Mage::getModel('socialize/reaction','Love it');	break;
			case 'cute': $reaction= Mage::getModel('socialize/reaction','Cute');	break;
			case 'killer': $reaction= Mage::getModel('socialize/reaction','Killer');	break;
			case 'amazing': $reaction= Mage::getModel('socialize/reaction','Amazing');	break;
			case 'omg': $reaction= Mage::getModel('socialize/reaction','omg');	break;
			case 'musthear': $reaction= Mage::getModel('socialize/reaction','Must hear');	break;
			case 'geeky': $reaction= Mage::getModel('socialize/reaction','Geeky');	break;
			case 'fashionable': $reaction= Mage::getModel('socialize/reaction','Fashionable');	break;
			case 'attending': $reaction= Mage::getModel('socialize/reaction','Attending');	break;
			case 'mustread': $reaction= Mage::getModel('socialize/reaction','Must read');	break;
			case 'aged': $reaction= Mage::getModel('socialize/reaction','Aged');	break;
			case 'agree': $reaction= Mage::getModel('socialize/reaction','Agree');	break;
			case 'alluring': $reaction= Mage::getModel('socialize/reaction','Alluring');	break;
			case 'annoying': $reaction= Mage::getModel('socialize/reaction','Annoying');	break;
			case 'awesome': $reaction= Mage::getModel('socialize/reaction','Awesome');	break;
			case 'blah': $reaction= Mage::getModel('socialize/reaction','Blah');	break;
			case 'boo': $reaction= Mage::getModel('socialize/reaction','Boo');	break;
			case 'covet': $reaction= Mage::getModel('socialize/reaction','Covet');	break;
			case 'crazy': $reaction= Mage::getModel('socialize/reaction','Crazy');	break;
			case 'designer': $reaction= Mage::getModel('socialize/reaction','Designer');	break;
		}
		
		return reaction;
	}  
*/
	
}	