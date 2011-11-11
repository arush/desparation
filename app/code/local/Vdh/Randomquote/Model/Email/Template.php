<?php
class Vdh_Randomquote_Model_Email_Template extends Mage_Core_Model_Email_Template {

    public function sendTransactional($templateId, $sender, $email, $name, $vars=array(), $storeId=null) {
    
		$params = Mage::app()->getFrontController()->getRequest()->getParams();

		if (!array_key_exists('invite_style', $params) || array_key_exists('invite_quote', $params)) {
	    	parent::sendTransactional($templateId, $sender, $email, $name, $vars, $storeId);
		}
				
		$inviteStyle = Mage::getModel('randomquote/style')->load($params['invite_style']);
		$randomQuote = Mage::getModel('randomquote/quote')->load($params['invite_quote']);	
		$newVars = $vars;
		$newVars =  array_merge(
			$newVars,
			array("referral_url"=>Mage::getModel('customer/customer')->load(Mage::getSingleton('customer/session')->getId())->getCustomerurl()),
			$randomQuote->getData()
		);
		
    	parent::sendTransactional($templateId, $sender, $email, $name, $newVars, $storeId);
    }
    	
	
}