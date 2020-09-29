
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/LeftMenu/ScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTGVmdE1lbnUvU2Nyb2xsVmlldy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjcm9sbFZpZXciLCJTY3JvbGxWaWV3Iiwib25BcnJvd0NsaWNrIiwiZXZlbnQiLCJub2RlIiwidGFyZ2V0IiwibmFtZSIsInNjcm9sbFRvT2Zmc2V0IiwidjIiLCJnZXRTY3JvbGxPZmZzZXQiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFSixFQUFFLENBQUNLO0FBRFAsR0FIUDtBQU9MQyxFQUFBQSxZQUFZLEVBQUUsc0JBQVNDLEtBQVQsRUFBZ0I7QUFDMUIsUUFBSUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLE1BQWpCLENBRDBCLENBRTFCOztBQUVBLFFBQUlELElBQUksQ0FBQ0UsSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3BCO0FBQ0EsV0FBS04sVUFBTCxDQUFnQk8sY0FBaEIsQ0FBK0JYLEVBQUUsQ0FBQ1ksRUFBSCxDQUFNLENBQU4sRUFBUyxLQUFLUixVQUFMLENBQWdCUyxlQUFoQixHQUFrQ0MsQ0FBbEMsR0FBc0MsR0FBL0MsQ0FBL0IsRUFBb0YsQ0FBcEY7QUFDSCxLQUhELE1BSUssSUFBSU4sSUFBSSxDQUFDRSxJQUFMLEtBQWMsTUFBbEIsRUFBMEI7QUFDM0IsV0FBS04sVUFBTCxDQUFnQk8sY0FBaEIsQ0FBK0JYLEVBQUUsQ0FBQ1ksRUFBSCxDQUFNLENBQU4sRUFBUyxLQUFLUixVQUFMLENBQWdCUyxlQUFoQixHQUFrQ0MsQ0FBbEMsR0FBc0MsR0FBL0MsQ0FBL0IsRUFBb0YsQ0FBcEY7QUFDSDtBQUNKO0FBbEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNjcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXcsXG4gICAgfSxcblxuICAgIG9uQXJyb3dDbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIC8vIHZhciBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gXCJVUFwiKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjcm9sbFZpZXcpXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpLnkgLSAxMjApLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub2RlLm5hbWUgPT09IFwiRE9XTlwiKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQoY2MudjIoMCwgdGhpcy5zY3JvbGxWaWV3LmdldFNjcm9sbE9mZnNldCgpLnkgKyAxMjApLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG4iXX0=