// Generated by CoffeeScript 1.3.3
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.buildPlan = function($scope) {
    var boxerOptions, boxerSizes, boxerUpgrades, genericColours, sockOptions, sockSizes, sockUpgrades, teeOptions, underteeSizes, underteeUpgrades;
    $scope.alert = function(text) {
      return alert(text);
    };
    genericColours = [
      {
        text: "classic",
        filterCode: ".classic",
        summary: "classic",
        buttonId: "classic"
      }, {
        text: "disco",
        filterCode: ".disco",
        summary: "disco",
        buttonId: "disco"
      }, {
        text: "both",
        filterCode: "",
        summary: "mix of classic and disco",
        buttonId: "both"
      }
    ];
    sockOptions = [];
    boxerOptions = [
      {
        text: "trunks",
        buttonId: "boxer-trunks",
        filterCode: ".trunks",
        summary: "boxer trunks",
        supplement: 0
      }, {
        text: "shorts",
        buttonId: "boxer-shorts",
        filterCode: ".shorts",
        summary: "boxer shorts",
        supplement: 0
      }, {
        text: "both",
        filterCode: "",
        summary: "mix of trunks and shorts",
        buttonId: "both",
        supplement: 0
      }
    ];
    teeOptions = [
      {
        text: "crew neck",
        buttonId: "crew-neck",
        filterCode: ".crew",
        summary: "crew necks only",
        supplement: 0
      }, {
        text: "v-neck",
        buttonId: "v-neck",
        filterCode: ".v-neck",
        summary: "v-necks only",
        supplement: 0
      }, {
        text: "both",
        filterCode: "",
        summary: "mix of v-necks and crews",
        buttonId: "both",
        supplement: 0
      }
    ];
    sockUpgrades = [
      {
        value: "value",
        recurlyCode: "option-08-v-socks",
        supplement: 0
      }, {
        value: "premium",
        recurlyCode: "option-10-d-socks",
        supplement: 5
      }
    ];
    boxerUpgrades = [
      {
        value: "value",
        recurlyCode: "option-18-v-boxers",
        supplement: 0
      }, {
        value: "premium",
        recurlyCode: "option-20-d-boxers",
        supplement: 7
      }
    ];
    underteeUpgrades = [
      {
        value: "value",
        recurlyCode: "option-28-v-undertees",
        supplement: 0
      }, {
        value: "premium",
        recurlyCode: "option-30-d-undertees",
        supplement: 15
      }
    ];
    sockSizes = [
      {
        text: "6-11 (UK)",
        helper: "40-45 (EU)",
        "class": 'small'
      }, {
        text: "12-14 (UK)",
        helper: "46-48 (EU)",
        "class": 'large'
      }
    ];
    boxerSizes = [
      {
        text: "S",
        helper: "28in - 30in waist",
        "class": 'S'
      }, {
        text: "M",
        helper: "32in - 34in waist",
        "class": 'M'
      }, {
        text: "L",
        helper: "36in - 38in waist",
        "class": 'L'
      }, {
        text: "XL",
        helper: "40in - 42in waist",
        "class": 'XL'
      }
    ];
    underteeSizes = [
      {
        text: "S",
        helper: "36-38in or 91-96cm around the fullest part of your chest",
        "class": 'S'
      }, {
        text: "M",
        helper: "38-40in or 96-101cm around the fullest part of your chest",
        "class": 'M'
      }, {
        text: "L",
        helper: "40-42in or 101cm-106cm around the fullest part of your chest",
        "class": 'L'
      }, {
        text: "XL",
        helper: "42-44in or 106-111cm around the fullest part of your chest",
        "class": 'XL'
      }
    ];
    $scope.sizeGuide = [
      {
        helper: "What's your sock size? Click on a size to see its guide"
      }, {
        helper: "What's your boxer size? Click on a size to see its guide"
      }, {
        helper: "What's your tee size? Click on a size to see its guide"
      }
    ];
    $scope.addMessage = [
      {
        text: 'socks',
        chosenPhrase: 0,
        phrases: ["Go on, add some socks, think of those poor little naked toes.", "Just because you can't see the holes, doesn't mean they're not there."]
      }, {
        text: 'boxers',
        chosenPhrase: 0,
        phrases: ["Are you sure you don't want any? What if you get lucky?", "I got two words for ya buddy: skid marks.", "You must have a draw full of fresh undies. Yeah, sure you do."]
      }, {
        text: 'undertees',
        chosenPhrase: 0,
        phrases: ["No tees? Topless it is, then."]
      }
    ];
    $scope.plan = {
      frequency: "trial"
    };
    $scope.drops = [
      {
        value: "trial"
      }, {
        value: "quarterly"
      }, {
        value: "biannually"
      }
    ];
    $scope.master = {};
    $scope.itemOptions = [
      {
        colours: genericColours,
        options: sockOptions
      }, {
        colours: genericColours,
        options: boxerOptions
      }, {
        colours: genericColours,
        options: teeOptions
      }
    ];
    $scope.items = [
      {
        recurlyCode: "option-8-v-socks",
        text: "socks",
        qty: 1,
        price: 3,
        size: 'Choose a size',
        chosenColour: 'Choose a colour',
        colourSummary: 'Choose a colour',
        optionSupplement: 0,
        upgradeSupplement: 0,
        upgrades: sockUpgrades,
        sizes: sockSizes
      }, {
        recurlyCode: "option-18-v-boxers",
        text: "boxers",
        qty: 0,
        price: 5,
        size: 'Choose a size',
        colourSummary: 'Choose a colour',
        chosenColour: 'Choose a colour',
        optionSummary: 'Choose a style',
        chosenOptions: 'Choose a style',
        optionSupplement: 0,
        upgradeSupplement: 0,
        upgrades: boxerUpgrades,
        sizes: boxerSizes
      }, {
        recurlyCode: "option-28-v-undertees",
        text: "undertees",
        qty: 0,
        price: 15,
        size: 'Choose a size',
        chosenColour: 'Choose a colour',
        chosenOptions: 'Choose a style',
        colourSummary: 'Choose a colour',
        optionSummary: 'Choose a style',
        optionSupplement: 0,
        upgradeSupplement: 0,
        upgrades: underteeUpgrades,
        sizes: underteeSizes
      }
    ];
    $scope.update = function() {
      var basketItem, x;
      x = 0;
      basketItem = [];
      while (x < $scope.items.length) {
        basketItem[x] = {
          recurlyCode: $scope.items[x].recurlyCode,
          qty: $scope.items[x].qty
        };
        x++;
      }
      $scope.plan.basket = basketItem;
      $scope.updateMageFrequency();
      return saveBasket($scope.plan);
    };
    $scope.freqChanger = function(newFreq) {
      $j('.frequency-chooser a').removeClass('active');
      $j('#' + newFreq + '-button').addClass('active');
      $scope.plan.frequency = newFreq;
      return $scope.update();
    };
    $scope.recalculate = function() {
      var x;
      $scope.plan.total = 0;
      x = 0;
      while (x < $scope.items.length) {
        $scope.plan.total += $scope.items[x].qty * ($scope.items[x].price + $scope.items[x].upgradeSupplement + $scope.items[x].optionSupplement);
        x++;
      }
      $scope.updateMageOptions();
      $scope.update();
    };
    $scope.updateMageFrequency = function() {
      $j("#product-options-wrapper select").each(function(index) {
        var dropId, e, optionSelector, str;
        e = $j(this);
        dropId = e.attr('id');
        str = e.parent().parent().prev().find('label').text();
        if (str === "option-frequency" || str.indexOf("option-frequency") >= 0) {
          optionSelector = 'option:contains("' + $scope.plan.frequency + '")';
          $j('#' + dropId + ' ' + optionSelector).attr("selected", "selected");
          document.getElementById(dropId).onchange();
          return false;
        }
      });
    };
    $scope.updateMageOptions = function() {
      $j("#product-options-wrapper textarea").each(function(index) {
        var e, str;
        e = $j(this);
        str = e.parent().parent().prev().find('label').text();
        if (str === "options-json") {
          e.text(JSON.stringify($scope.items));
          return false;
        }
      });
    };
    $scope.updateMageQty = function(text, qty, brands) {
      $j("#product-options-wrapper select").each(function(index) {
        var drop1Found, drop2Found, dropId, e, itemText, str;
        e = $j(this);
        str = e.parent().parent().prev().find('label').text();
        str = str.split('-');
        if (str[0] === "option") {
          itemText = str[1];
          if (itemText === text) {
            if (str[2] === brands) {
              e.find("option").eq(qty).attr("selected", "selected");
              dropId = e.attr('id');
              document.getElementById(dropId).onchange();
              drop1Found = true;
            } else {
              e.find("option").eq(0).attr("selected", "selected");
              dropId = e.attr('id');
              document.getElementById(dropId).onchange();
              drop2Found = true;
            }
            if (drop1Found && drop2Found) {
              return false;
            }
          }
        }
      });
    };
    $scope.subtract = function(item, idx) {
      var brands;
      if (item.qty > 0) {
        item.qty--;
        $scope.recalculate();
        if (item.qty === 0) {
          $scope.chooseAddMessage(idx);
        }
        if (item.upgradeSupplement === 0) {
          brands = 'value';
        } else {
          brands = 'premium';
        }
        return $scope.updateMageQty(item.text, item.qty, brands);
      }
    };
    $scope.calculateOptionSupplement = function(index, item, idx) {
      var x, y;
      $scope.items[idx].optionSupplement = 0;
      x = 0;
      while (x < $scope.items.length) {
        y = 0;
        while (y < $scope.itemOptions[x].options.length) {
          if ($scope.itemOptions[x].options[y].selected === true) {
            $scope.items[x].optionSupplement += $scope.itemOptions[x].options[y].supplement;
          }
          y++;
        }
        x++;
      }
      return $scope.recalculate();
    };
    $scope.calculateUpgradeSupplement = function(upgrade, item, idx) {
      $scope.items[idx].upgradeSupplement = upgrade.supplement;
      $scope.items[idx].recurlyCode = upgrade.recurlyCode;
      $j('.upgrade-chooser.item-' + idx + ' a').removeClass('active');
      $j('.upgrade-chooser.item-' + idx + ' a.' + item.text + '-' + upgrade.value).addClass('active');
      $scope.updateMageQty(item.text, item.qty, upgrade.value);
      return $scope.recalculate();
    };
    $scope.add = function(item) {
      var brands;
      item.qty++;
      $scope.recalculate();
      if (item.upgradeSupplement === 0) {
        brands = 'value';
      } else {
        brands = 'premium';
      }
      return $scope.updateMageQty(item.text, item.qty, brands);
    };
    $scope.toggleColour = function(index, idx) {
      $scope.items[idx].chosenColour = index.filterCode;
      $scope.items[idx].colourSummary = index.summary;
      $j('.' + $scope.items[idx].text + '.colours a').removeClass('active');
      $j('.' + $scope.items[idx].text + '-colours-' + index.buttonId).toggleClass('active');
      $scope.recalculate();
      return $scope.refilter(idx);
    };
    $scope.toggleStyle = function(index, idx) {
      $scope.items[idx].chosenOptions = index.filterCode;
      $scope.items[idx].optionSummary = index.summary;
      $j('.' + $scope.items[idx].text + '.style a').removeClass('active');
      $j('.' + $scope.items[idx].text + '-style-' + index.buttonId).toggleClass('active');
      $scope.recalculate();
      return $scope.refilter(idx);
    };
    $scope.refilter = function(idx) {
      var $isocontainer, filterString;
      if ($isocontainer === void 0) {
        $isocontainer = $j('#' + $scope.items[idx].text + '-section-container .isotope-holder');
      }
      filterString = '';
      if ($scope.items[idx].chosenColour !== void 0) {
        if ($scope.items[idx].chosenColour.toLowerCase().indexOf('choose') < 0) {
          filterString += $scope.items[idx].chosenColour;
        }
      }
      if ($scope.items[idx].chosenOptions !== void 0) {
        if ($scope.items[idx].chosenOptions.toLowerCase().indexOf('choose') < 0) {
          filterString += $scope.items[idx].chosenOptions;
        }
      }
      return $isocontainer.isotope({
        filter: filterString
      });
    };
    $scope.groupButtons = function(idx, buttons) {
      if (idx === 0) {
        return 'lt';
      } else if (idx + 1 === buttons.length) {
        return 'rt';
      } else {
        return 'mid';
      }
    };
    $scope.changeSize = function(item, size, idx, $index) {
      $scope.items[idx].size = size.text;
      $scope.sizeGuide[idx].helper = $scope.items[idx].sizes[$index].helper;
      $scope.recalculate();
      $j('.configure-size.' + item.text + '-size a').removeClass('active');
      return $j('.' + item.text + '-' + size["class"]).addClass('active');
    };
    $scope.isZeroed = function(idx) {
      if ($scope.items[idx].qty === 0) {
        return 'zeroed';
      } else {
        return 'non-zero';
      }
    };
    $scope.chooseAddMessage = function(idx) {
      var randomisedNum;
      randomisedNum = Math.floor(Math.random() * $scope.addMessage[idx].phrases.length);
      return $scope.addMessage[idx].chosenPhrase = $scope.addMessage[idx].phrases[randomisedNum];
    };
    $scope.prettifySummary = function(thing) {
      if (thing.toLowerCase().indexOf('choose') >= 0) {
        return 'warning';
      } else {
        return 'ok';
      }
    };
    $scope.init = function() {
      var $j, brandType, o, x, _results;
      $j = jQuery.noConflict();
      x = 0;
      while (x < $scope.items.length) {
        o = $scope.items[x];
        if (punter.recommendation !== void 0) {
          if (punter.recommendation[x].brandsType !== void 0) {
            brandType = punter.recommendation[x].brandsType;
          }
          if (punter.recommendation[x].qty !== void 0) {
            o.qty = punter.recommendation[x].qty;
          }
        } else {
          if (o.recurlyCode.indexOf("-v-", 0) >= 0) {
            brandType = 'value';
          } else {
            brandType = 'premium';
          }
        }
        $scope.updateMageQty(o.text, o.qty, brandType);
        $j('.' + $scope.items[x].text + '-' + brandType).click();
        $scope.freqChanger($scope.plan.frequency);
        x++;
      }
      $scope.recalculate();
      $scope.update();
      x = 0;
      _results = [];
      while (x < $scope.addMessage.length) {
        $scope.chooseAddMessage(x);
        _results.push(x++);
      }
      return _results;
    };
    return $j(document).ready(function() {
      return $scope.init();
    });
  };

}).call(this);
