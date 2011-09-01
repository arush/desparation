<?php

class TBT_Rewardsinstore_Block_Manage_Earning_Cart_Edit_Tab_Main extends Mage_Adminhtml_Block_Widget_Form {
	
	protected function _prepareForm () {
	    
        $model = Mage::registry('current_promo_quote_rule');
        $form = new Varien_Data_Form();
        $form->setHtmlIdPrefix('rule_');
        $fieldset = $form->addFieldset('base_fieldset', array('legend' => Mage::helper('salesrule')->__('General Information')));
        
        if ($model->getId()) {
            $fieldset->addField('rule_id', 'hidden', array('name' => 'rule_id'));
        }
        
        $fieldset->addField('name', 'text', array(
            'name' => 'name',
            'label' => Mage::helper('salesrule')->__('Rule Name'),
            'title' => Mage::helper('salesrule')->__('Rule Name'),
            'required' => true,
        ));

        $fieldset->addField('description', 'textarea', array(
            'name' => 'description',
            'label' => Mage::helper('salesrule')->__('Description'),
            'title' => Mage::helper('salesrule')->__('Description'),
            'style' => 'width: 98%; height: 100px;',
        ));

        $fieldset->addField('is_active', 'select', array(
            'label'     => Mage::helper('salesrule')->__('Status'),
            'title'     => Mage::helper('salesrule')->__('Status'),
            'name'      => 'is_active',
            'required' => true,
            'options'    => array(
                '1' => Mage::helper('salesrule')->__('Active'),
                '0' => Mage::helper('salesrule')->__('Inactive'),
            ),
        ));
        
        // TODO: check for single store mode and only display available storefronts
        $fieldset->addField('storefront_ids', 'multiselect', array(
                'name'      => 'storefront_ids[]',
                'label'     => Mage::helper('rewardsinstore')->__('Storefront Locations'),
                'title'     => Mage::helper('rewardsinstore')->__('Storefront Locations'),
                'required'  => true,
                'values'    => Mage::getModel('rewardsinstore/storefront')->toOptionArray(),
        ));
	
        if (Mage::helper('rewards')->isBaseMageVersionAtLeast('1.4.1.0')) {
            if (!$model->getId()) {
                $model->setData('is_active', '1');
            }
        }
        
        $dateFormatIso = Mage::app()->getLocale()->getDateFormat(Mage_Core_Model_Locale::FORMAT_TYPE_SHORT);
        $fieldset->addField('from_date', 'date', array(
            'name'   => 'from_date',
            'label'  => Mage::helper('salesrule')->__('From Date'),
            'title'  => Mage::helper('salesrule')->__('From Date'),
            'image'  => $this->getSkinUrl('images/grid-cal.gif'),
            'input_format' => Varien_Date::DATE_INTERNAL_FORMAT,
            'format'       => $dateFormatIso
        ));
        $fieldset->addField('to_date', 'date', array(
            'name'   => 'to_date',
            'label'  => Mage::helper('salesrule')->__('To Date'),
            'title'  => Mage::helper('salesrule')->__('To Date'),
            'image'  => $this->getSkinUrl('images/grid-cal.gif'),
            'input_format' => Varien_Date::DATE_INTERNAL_FORMAT,
            'format'       => $dateFormatIso
        ));

        $fieldset->addField('sort_order', 'hidden', array(
            'name' => 'sort_order',
            'label' => Mage::helper('salesrule')->__('Priority'),
        ));
        
        $customerGroups = Mage::getResourceModel('customer/group_collection')
            ->load()->getAllIds();
        
        // All user groups selected by default
        $fieldset->addField('customer_group_ids', 'hidden', array(
            'name' => 'customer_group_ids'));
        $model->setCustomerGroupIds(implode(',', $customerGroups));
      
        // No coupons for Instore rules (for now)
        if (Mage::helper('rewards/version')->isBaseMageVersionAtLeast('1.4.1.0')) {
            $fieldset->addField('coupon_type', 'hidden', array(
                'name' => 'coupon_type'));
            $model->setCouponType(Mage_SalesRule_Model_Rule::COUPON_TYPE_NO_COUPON);
        }
        
        // Infinite uses per customer by default
        $fieldset->addField('uses_per_customer', 'hidden', array(
            'name' => 'uses_per_customer'));
        $model->setUsesPerCustomer(0);
        
        // Rss disabled for Instore rules
        $fieldset->addField('is_rss', 'hidden', array(
            'name' => 'is_rss'));
        $model->setIsRss(0);

        $form->setValues($model->getData());
        
        if (Mage::helper('rewards')->isBaseMageVersionAtLeast('1.4.1.0')) {
            
            if ($model->isReadonly()) {
                foreach ($fieldset->getElements() as $element) {
                    $element->setReadonly(true, true);
                }
            }
    
            $this->setForm($form);
    
            Mage::dispatchEvent('adminhtml_promo_quote_edit_tab_main_prepare_form', array('form' => $form));
            
        } else {
            $this->setForm($form);
        }
        return parent::_prepareForm();
    }

}