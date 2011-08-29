define(function(require, exports, module) {

  var oop = require("pilot/oop");
  var TextMode = require("ace/mode/text").Mode;
  var Tokenizer = require("ace/tokenizer").Tokenizer;
  var JadeHighlightRules = require("ace/mode/jade_highlight_rules").JadeHighlightRules;
  // var JavaHighlightRules = require("ace/mode/java_highlight_rules").JavaHighlightRules;
  // var MatchingBraceOutdent = require("ace/mode/matching_brace_outdent").MatchingBraceOutdent;
  // var CstyleBehaviour = require("ace/mode/behaviour/cstyle").CstyleBehaviour;

  var Mode = function() {
      this.$tokenizer = new Tokenizer(new JadeHighlightRules().getRules());
      // this.$outdent = new MatchingBraceOutdent();
      // this.$behaviour = new CstyleBehaviour();
  };
  oop.inherits(Mode, TextMode);

  (function() {
    
      this.createWorker = function(session) {
          return null;
      };

  }).call(Mode.prototype);

  exports.Mode = Mode;
});