<?php

class Arush_Get_Block_Page extends Mage_Adminhtml_Block_Template
{
    public function __construct()
    {
        parent::__construct();
        // get the original theme
        $origTheme = Mage::getDesign()->getTheme('default');
    }
}