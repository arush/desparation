// Generated by CoffeeScript 1.3.3
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.rollQ = function() {
    var q, s;
    wipeConsole();
    saveProgress("rollQ");
    q = "How do you roll? ";
    newQ(q);
    typeit();
    s = $j("#male-welcome-msg");
    return rollImages(s);
  };

  root.rollDone = function() {
    _kmq.push([
      "record", "MALE Roll", {
        roll: punter.rollA
      }
    ]);
    return magsQ();
  };

  root.rollAa = function() {
    punter.roll = 1;
    punter.rollA = 'private jet';
    return rollDone();
  };

  root.rollAb = function() {
    punter.roll = 2;
    punter.rollA = 'business class';
    return rollDone();
  };

  root.rollAc = function() {
    punter.roll = 3;
    punter.rollA = 'economy';
    return rollDone();
  };

  root.rollAd = function() {
    punter.roll = 4;
    punter.rollA = 'bus';
    return rollDone();
  };

}).call(this);
