
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/openDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d40aBKdXpGpLWm5iGWB++H', 'openDialog');
// script/openDialog.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, function (t) {
      var CanvasNode = cc.find('mask');
      cc.loader.loadRes("dialog", function (errorMessage, prefab) {
        if (errorMessage) {
          cc.log('載入Prefab失敗, 原因:' + errorMessage);
          return;
        }

        if (!(prefab instanceof cc.Prefab)) {
          cc.log('你載入的不是Prefab, 你做了什麼事?');
          return;
        } //這個是型別的檢查
        //接著，我們就可以進行實例化了


        var newMyPrefab = cc.instantiate(prefab); //我們先將這個建立出來的Prefab加入畫布裡

        CanvasNode.addChild(newMyPrefab);
        newMyPrefab.setPosition(-400, -250);
        newMyPrefab.getComponent('closeDialog').init({
          message: 'message!'
        });
      });
    }, this); // this.node.on(cc.Node.EventType.TOUCH_MOVE,
    //     function(t){console.log("cc.Node.EventType.TOUCH_MOVE ")},this);
    // this.node.on(cc.Node.EventType.TOUCH_END,
    //     function(t){console.log("cc.Node.EventType.TOUCH_END ")},this);
    // this.node.on(cc.Node.EventType.TOUCH_CANCEL,
    //     function(t){console.log("cc.Node.EventType.TOUCH_CANCEL ")},this);
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvb3BlbkRpYWxvZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInQiLCJDYW52YXNOb2RlIiwiZmluZCIsImxvYWRlciIsImxvYWRSZXMiLCJlcnJvck1lc3NhZ2UiLCJwcmVmYWIiLCJsb2ciLCJQcmVmYWIiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImluaXQiLCJtZXNzYWdlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQUMsRUFBQUEsTUF2Qkssb0JBdUJLO0FBQ04sU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEVBQUUsQ0FBQ08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUEvQixFQUNJLFVBQVNDLENBQVQsRUFBVztBQUVQLFVBQUlDLFVBQVUsR0FBR1gsRUFBRSxDQUFDWSxJQUFILENBQVMsTUFBVCxDQUFqQjtBQUNBWixNQUFBQSxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixRQUFsQixFQUE0QixVQUFVQyxZQUFWLEVBQXdCQyxNQUF4QixFQUFnQztBQUV4RCxZQUFJRCxZQUFKLEVBQW1CO0FBQUVmLFVBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSxvQkFBb0JGLFlBQTVCO0FBQTRDO0FBQVM7O0FBQzFFLFlBQUksRUFBR0MsTUFBTSxZQUFZaEIsRUFBRSxDQUFDa0IsTUFBeEIsQ0FBSixFQUF1QztBQUFFbEIsVUFBQUEsRUFBRSxDQUFDaUIsR0FBSCxDQUFRLHVCQUFSO0FBQW1DO0FBQVMsU0FIN0IsQ0FHOEI7QUFFdEY7OztBQUNBLFlBQUlFLFdBQVcsR0FBR25CLEVBQUUsQ0FBQ29CLFdBQUgsQ0FBZ0JKLE1BQWhCLENBQWxCLENBTndELENBUXhEOztBQUNBTCxRQUFBQSxVQUFVLENBQUNVLFFBQVgsQ0FBcUJGLFdBQXJCO0FBRUFBLFFBQUFBLFdBQVcsQ0FBQ0csV0FBWixDQUF5QixDQUFDLEdBQTFCLEVBQStCLENBQUMsR0FBaEM7QUFFQUgsUUFBQUEsV0FBVyxDQUFDSSxZQUFaLENBQXlCLGFBQXpCLEVBQXdDQyxJQUF4QyxDQUE2QztBQUN6Q0MsVUFBQUEsT0FBTyxFQUFFO0FBRGdDLFNBQTdDO0FBSUgsT0FqQkQ7QUFrQlAsS0F0QkQsRUFzQkUsSUF0QkYsRUFETSxDQXdCTjtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFSCxHQXhESTtBQXlETEMsRUFBQUEsS0F6REssbUJBeURJLENBRVIsQ0EzREksQ0E2REw7O0FBN0RLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyBiYXI6IHtcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULFxuICAgICAgICAgICAgZnVuY3Rpb24odCl7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBDYW52YXNOb2RlID0gY2MuZmluZCggJ21hc2snICk7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJkaWFsb2dcIiwgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSwgcHJlZmFiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIGVycm9yTWVzc2FnZSApIHsgY2MubG9nKCAn6LyJ5YWlUHJlZmFi5aSx5pWXLCDljp/lm6A6JyArIGVycm9yTWVzc2FnZSApOyByZXR1cm47IH1cbiAgICAgICAgICAgICAgICAgICAgaWYoICEoIHByZWZhYiBpbnN0YW5jZW9mIGNjLlByZWZhYiApICkgeyBjYy5sb2coICfkvaDovInlhaXnmoTkuI3mmK9QcmVmYWIsIOS9oOWBmuS6huS7gOm6vOS6iz8nICk7IHJldHVybjsgfSAvL+mAmeWAi+aYr+Wei+WIpeeahOaqouafpVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy/mjqXokZfvvIzmiJHlgJHlsLHlj6/ku6XpgLLooYzlr6bkvovljJbkuoZcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld015UHJlZmFiID0gY2MuaW5zdGFudGlhdGUoIHByZWZhYiApO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvL+aIkeWAkeWFiOWwh+mAmeWAi+W7uueri+WHuuS+hueahFByZWZhYuWKoOWFpeeVq+W4g+ijoVxuICAgICAgICAgICAgICAgICAgICBDYW52YXNOb2RlLmFkZENoaWxkKCBuZXdNeVByZWZhYiApO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld015UHJlZmFiLnNldFBvc2l0aW9uKCAtNDAwLCAtMjUwICk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3TXlQcmVmYWIuZ2V0Q29tcG9uZW50KCdjbG9zZURpYWxvZycpLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ21lc3NhZ2UhJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSx0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsXG4gICAgICAgIC8vICAgICBmdW5jdGlvbih0KXtjb25zb2xlLmxvZyhcImNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUgXCIpfSx0aGlzKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCxcbiAgICAgICAgLy8gICAgIGZ1bmN0aW9uKHQpe2NvbnNvbGUubG9nKFwiY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5EIFwiKX0sdGhpcyk7XG4gICAgICAgICAgICAgXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsXG4gICAgICAgIC8vICAgICBmdW5jdGlvbih0KXtjb25zb2xlLmxvZyhcImNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCBcIil9LHRoaXMpO1xuXG4gICAgfSxcbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==