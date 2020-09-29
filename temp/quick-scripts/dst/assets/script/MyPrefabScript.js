
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
// script/MyPrefabScript.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvTXlQcmVmYWJTY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJDb2xvciIsIk5vZGUiLCJUZXh0IiwidHlwZSIsIkxhYmVsIiwic2V0TnVtYmVyQnkiLCJudW1iZXIiLCJzdHJpbmciLCJSdW4iLCJhY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwicm90YXRlQnkiLCJub2RlIiwicnVuQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FDSTtBQUNJLGFBQVNELEVBQUUsQ0FBQ0UsU0FEaEI7QUFFSUMsRUFBQUEsVUFBVSxFQUNWO0FBQ0lDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxJQURkO0FBRUlDLElBQUFBLElBQUksRUFBRTtBQUFFLGlCQUFTLElBQVg7QUFBaUJDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUTtBQUExQjtBQUZWLEdBSEo7QUFRSUMsRUFBQUEsV0FBVyxFQUFFLHFCQUFVQyxNQUFWLEVBQ2I7QUFDSTtBQUNBLFNBQUtKLElBQUwsQ0FBVUssTUFBVixHQUFxQixRQUFRRCxNQUE3QjtBQUNILEdBWkw7QUFjSUUsRUFBQUEsR0FBRyxFQUFFLGVBQ0w7QUFDSTtBQUNBLFFBQUlDLE1BQU0sR0FBR2IsRUFBRSxDQUFDYyxhQUFILENBQWtCZCxFQUFFLENBQUNlLFFBQUgsQ0FBYSxDQUFiLEVBQWdCLEdBQWhCLENBQWxCLENBQWIsQ0FGSixDQUdJOztBQUNBLFNBQUtYLEtBQUwsQ0FBV1ksSUFBWCxDQUFnQkMsU0FBaEIsQ0FBMkJKLE1BQTNCO0FBQ0g7QUFwQkwsQ0FESiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3MoXG4gICAge1xuICAgICAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgICAgIHByb3BlcnRpZXM6IFxuICAgICAgICB7XG4gICAgICAgICAgICBDb2xvcjogY2MuTm9kZSxcbiAgICAgICAgICAgIFRleHQ6IHsgZGVmYXVsdDogbnVsbCwgdHlwZTogY2MuTGFiZWwgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgc2V0TnVtYmVyQnk6IGZ1bmN0aW9uKCBudW1iZXIgKVxuICAgICAgICB7XG4gICAgICAgICAgICAvL+mAmemCiuebtOaOpeWwh+aIkeWAkeeahExhYmVs5a2X5Liy6Kit5a6a54K6IE5vLiNcbiAgICAgICAgICAgIHRoaXMuVGV4dC5zdHJpbmcgPSAoICdOby4nICsgbnVtYmVyICk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBSdW46IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy/pgJnpgorlu7rnq4vkuIDlgIvmsLjpgaDkuI3lgZzmraLnmoRyZXBlYXTvvIzli5XkvZzmmK/mr48x56eS6L2JMzYw5bqmXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MucmVwZWF0Rm9yZXZlciggY2Mucm90YXRlQnkoIDEsIDM2MCApICk7XG4gICAgICAgICAgICAvL+iuk+aIkeWAkeeahOW9qeeQg+aXi+i9ieWQpyFcbiAgICAgICAgICAgIHRoaXMuQ29sb3Iubm9kZS5ydW5BY3Rpb24oIGFjdGlvbiApO1xuICAgICAgICB9XG4gICAgfSk7Il19