define(function(require, exports, module) {
  var oop = require("pilot/oop");
  var lang = require("pilot/lang");
  var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

  var JadeHighlightRules = function() {
  
    this.$rules = {
      "start" : [{
        token : "comment",
        regex : "\\/\\/.*$"
      }]
    };
  };
  
  oop.inherits(JadeHighlightRules, TextHighlightRules);

  exports.JadeHighlightRules = JadeHighlightRules;
});