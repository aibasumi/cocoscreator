"use strict";
cc._RF.push(module, 'c1414x0o29EhqS4bojtMK33', 'ScrollView');
// script/LeftMenu/ScrollView.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scrollView: cc.ScrollView
  },
  onArrowClick: function onArrowClick(event) {
    var node = event.target; // var button = node.getComponent(cc.Button);

    if (node.name === "UP") {
      // console.log(this.scrollView)
      this.scrollView.scrollToOffset(cc.v2(0, this.scrollView.getScrollOffset().y - 120), 1);
    } else if (node.name === "DOWN") {
      this.scrollView.scrollToOffset(cc.v2(0, this.scrollView.getScrollOffset().y + 120), 1);
    }
  }
});

cc._RF.pop();