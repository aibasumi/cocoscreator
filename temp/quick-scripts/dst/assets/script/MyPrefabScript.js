
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MyPrefabScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58080e6Tj1PoaGECZ+RYUS4', 'MyPrefabScript');
// MyPrefabScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Color: cc.Node,
    Text: {
      "default": null,
      type: cc.Label
    }
  },
  setNumberBy: function setNumberBy(number) {
    //這邊直接將我們的Label字串設定為 No.#
    this.Text.string = 'No.' + number;
  },
  Run: function Run() {
    //這邊建立一個永遠不停止的repeat，動作是每1秒轉360度
    var action = cc.repeatForever(cc.rotateBy(1, 360)); //讓我們的彩球旋轉吧!

    this.Color.node.runAction(action);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9NeVByZWZhYlNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkNvbG9yIiwiTm9kZSIsIlRleHQiLCJ0eXBlIiwiTGFiZWwiLCJzZXROdW1iZXJCeSIsIm51bWJlciIsInN0cmluZyIsIlJ1biIsImFjdGlvbiIsInJlcGVhdEZvcmV2ZXIiLCJyb3RhdGVCeSIsIm5vZGUiLCJydW5BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUNJO0FBQ0ksYUFBU0QsRUFBRSxDQUFDRSxTQURoQjtBQUVJQyxFQUFBQSxVQUFVLEVBQ1Y7QUFDSUMsSUFBQUEsS0FBSyxFQUFFSixFQUFFLENBQUNLLElBRGQ7QUFFSUMsSUFBQUEsSUFBSSxFQUFFO0FBQUUsaUJBQVMsSUFBWDtBQUFpQkMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNRO0FBQTFCO0FBRlYsR0FISjtBQVFJQyxFQUFBQSxXQUFXLEVBQUUscUJBQVVDLE1BQVYsRUFDYjtBQUNJO0FBQ0EsU0FBS0osSUFBTCxDQUFVSyxNQUFWLEdBQXFCLFFBQVFELE1BQTdCO0FBQ0gsR0FaTDtBQWNJRSxFQUFBQSxHQUFHLEVBQUUsZUFDTDtBQUNJO0FBQ0EsUUFBSUMsTUFBTSxHQUFHYixFQUFFLENBQUNjLGFBQUgsQ0FBa0JkLEVBQUUsQ0FBQ2UsUUFBSCxDQUFhLENBQWIsRUFBZ0IsR0FBaEIsQ0FBbEIsQ0FBYixDQUZKLENBR0k7O0FBQ0EsU0FBS1gsS0FBTCxDQUFXWSxJQUFYLENBQWdCQyxTQUFoQixDQUEyQkosTUFBM0I7QUFDSDtBQXBCTCxDQURKIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyhcbiAgICB7XG4gICAgICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICAgICAgcHJvcGVydGllczogXG4gICAgICAgIHtcbiAgICAgICAgICAgIENvbG9yOiBjYy5Ob2RlLFxuICAgICAgICAgICAgVGV4dDogeyBkZWZhdWx0OiBudWxsLCB0eXBlOiBjYy5MYWJlbCB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBzZXROdW1iZXJCeTogZnVuY3Rpb24oIG51bWJlciApXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8v6YCZ6YKK55u05o6l5bCH5oiR5YCR55qETGFiZWzlrZfkuLLoqK3lrprngrogTm8uI1xuICAgICAgICAgICAgdGhpcy5UZXh0LnN0cmluZyA9ICggJ05vLicgKyBudW1iZXIgKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIFJ1bjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mAmemCiuW7uueri+S4gOWAi+awuOmBoOS4jeWBnOatoueahHJlcGVhdO+8jOWLleS9nOaYr+avjzHnp5LovYkzNjDluqZcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjYy5yZXBlYXRGb3JldmVyKCBjYy5yb3RhdGVCeSggMSwgMzYwICkgKTtcbiAgICAgICAgICAgIC8v6K6T5oiR5YCR55qE5b2p55CD5peL6L2J5ZCnIVxuICAgICAgICAgICAgdGhpcy5Db2xvci5ub2RlLnJ1bkFjdGlvbiggYWN0aW9uICk7XG4gICAgICAgIH1cbiAgICB9KTsiXX0=