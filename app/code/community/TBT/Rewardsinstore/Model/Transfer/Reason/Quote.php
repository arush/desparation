<?php

class TBT_Rewardsinstore_Model_Transfer_Reason_Quote extends TBT_Rewards_Model_Transfer_Reason_Abstract {

    const REASON_TYPE_ID = 50;

    /**
     * passes the $available_reasons array of existing available reasons so that other modules
     * can remove reasons as well.  This is bad however because the dependencies 
     * are left unmanaged.  The module creator should keep this in mind when developing add-on extensions.
     */
    public function getAvailReasons ($current_reason, &$availR) {
        return $availR;
    }

    public function getOtherReasons () {
        return array();
    }

    public function getManualReasons () {
        return array();
    }

    public function getDistributionReasons () {
        return array(self::REASON_TYPE_ID => Mage::helper('rewardsinstore')->__('Instore Order'));
    }

    public function getRedemptionReasons () {
        return array();
    }

    public function getAllReasons () {
        return $this->getDistributionReasons();
    }

}