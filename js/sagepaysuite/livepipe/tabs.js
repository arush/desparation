if(typeof(Prototype)=="undefined"){throw"Control.Tabs requires Prototype to be loaded."}if(typeof(Object.Event)=="undefined"){throw"Control.Tabs requires Object.Event to be loaded."}Control.Tabs=Class.create({initialize:function(c,b){if(!$(c)){throw"Control.Tabs could not find the element: "+c}this.activeContainer=false;this.activeLink=false;this.containers=$H({});this.links=[];Control.Tabs.instances.push(this);this.options={beforeChange:Prototype.emptyFunction,afterChange:Prototype.emptyFunction,hover:false,linkSelector:"li a",setClassOnContainer:false,activeClassName:"active",defaultTab:"first",autoLinkExternal:true,targetRegExp:/#(.+)$/,showFunction:Element.show,hideFunction:Element.hide};Object.extend(this.options,b||{});(typeof(this.options.linkSelector=="string")?$(c).select(this.options.linkSelector):this.options.linkSelector($(c))).findAll(function(d){return(/^#/).exec((Prototype.Browser.WebKit?decodeURIComponent(d.href):d.href).replace(window.location.href.split("#")[0],""))}).each(function(d){this.addTab(d)}.bind(this));this.containers.values().each(Element.hide);if(this.options.defaultTab=="first"){this.setActiveTab(this.links.first())}else{if(this.options.defaultTab=="last"){this.setActiveTab(this.links.last())}else{this.setActiveTab(this.options.defaultTab)}}var a=this.options.targetRegExp.exec(window.location);if(a&&a[1]){a[1].split(",").each(function(d){this.setActiveTab(this.links.find(function(e){return e.key==d}))}.bind(this))}if(this.options.autoLinkExternal){$A(document.getElementsByTagName("a")).each(function(d){if(!this.links.include(d)){var e=d.href.replace(window.location.href.split("#")[0],"");if(e.substring(0,1)=="#"){if(this.containers.keys().include(e.substring(1))){$(d).observe("click",function(g,f){this.setActiveTab(f.substring(1))}.bindAsEventListener(this,e))}}}}.bind(this))}},addTab:function(b){this.links.push(b);b.key=b.getAttribute("href").replace(window.location.href.split("#")[0],"").split("#").last().replace(/#/,"");var a=$(b.key);if(!a){throw"Control.Tabs: #"+b.key+" was not found on the page."}this.containers.set(b.key,a);b[this.options.hover?"onmouseover":"onclick"]=function(c){if(window.event){Event.stop(window.event)}this.setActiveTab(c);return false}.bind(this,b)},setActiveTab:function(a){if(!a&&typeof(a)=="undefined"){return}if(typeof(a)=="string"){this.setActiveTab(this.links.find(function(b){return b.key==a}))}else{if(typeof(a)=="number"){this.setActiveTab(this.links[a])}else{if(this.notify("beforeChange",this.activeContainer,this.containers.get(a.key))===false){return}if(this.activeContainer){this.options.hideFunction(this.activeContainer)}this.links.each(function(b){(this.options.setClassOnContainer?$(b.parentNode):b).removeClassName(this.options.activeClassName)}.bind(this));(this.options.setClassOnContainer?$(a.parentNode):a).addClassName(this.options.activeClassName);this.activeContainer=this.containers.get(a.key);this.activeLink=a;this.options.showFunction(this.containers.get(a.key));this.notify("afterChange",this.containers.get(a.key))}}},next:function(){this.links.each(function(b,a){if(this.activeLink==b&&this.links[a+1]){this.setActiveTab(this.links[a+1]);throw $break}}.bind(this))},previous:function(){this.links.each(function(b,a){if(this.activeLink==b&&this.links[a-1]){this.setActiveTab(this.links[a-1]);throw $break}}.bind(this))},first:function(){this.setActiveTab(this.links.first())},last:function(){this.setActiveTab(this.links.last())}});Object.extend(Control.Tabs,{instances:[],findByTabId:function(a){return Control.Tabs.instances.find(function(b){return b.links.find(function(c){return c.key==a})})}});Object.Event.extend(Control.Tabs);