function fade1(){var e=$j("> div",$j("div.fade"));e.fadeIn(1e3);setTimeout("fade2()",2500)}function fade2(){var e=$j("> div",$j("div.fade"));e.fadeOut(1e3);setTimeout("fade1()",2500)}function fadeCalendar(){$j(".month .month-title").fadeTo("slow",.3);$j(".month .package-icon").fadeTo("slow",.2,function(){setTimeout("loadCopy()",300)})}function loadCopy(){$j(".copy").fadeTo("slow",1)}function aniMonth(){var e=$j(".month .month-title").length;$j(".month .month-title").fadeTo("fast",.9);$j(".month .package-icon").fadeTo("fast",.9,function(){setTimeout("fadeCalendar()",200)})}var $j=jQuery.noConflict();$j(document).ready(function(){setTimeout("fade2()",3e3);if(Modernizr.cssanimations)return;window.setTimeout("aniMonth()",200)});