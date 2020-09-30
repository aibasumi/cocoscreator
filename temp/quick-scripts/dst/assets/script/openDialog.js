
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvb3BlbkRpYWxvZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInQiLCJDYW52YXNOb2RlIiwiZmluZCIsImxvYWRlciIsImxvYWRSZXMiLCJlcnJvck1lc3NhZ2UiLCJwcmVmYWIiLCJsb2ciLCJQcmVmYWIiLCJuZXdNeVByZWZhYiIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUFDLEVBQUFBLE1BdkJLLG9CQXVCSztBQUNOLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBL0IsRUFDSSxVQUFTQyxDQUFULEVBQVc7QUFFUCxVQUFJQyxVQUFVLEdBQUdYLEVBQUUsQ0FBQ1ksSUFBSCxDQUFTLE1BQVQsQ0FBakI7QUFDQVosTUFBQUEsRUFBRSxDQUFDYSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEIsVUFBVUMsWUFBVixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFFeEQsWUFBSUQsWUFBSixFQUFtQjtBQUFFZixVQUFBQSxFQUFFLENBQUNpQixHQUFILENBQVEsb0JBQW9CRixZQUE1QjtBQUE0QztBQUFTOztBQUMxRSxZQUFJLEVBQUdDLE1BQU0sWUFBWWhCLEVBQUUsQ0FBQ2tCLE1BQXhCLENBQUosRUFBdUM7QUFBRWxCLFVBQUFBLEVBQUUsQ0FBQ2lCLEdBQUgsQ0FBUSx1QkFBUjtBQUFtQztBQUFTLFNBSDdCLENBRzhCO0FBRXRGOzs7QUFDQSxZQUFJRSxXQUFXLEdBQUduQixFQUFFLENBQUNvQixXQUFILENBQWdCSixNQUFoQixDQUFsQixDQU53RCxDQVF4RDs7QUFDQUwsUUFBQUEsVUFBVSxDQUFDVSxRQUFYLENBQXFCRixXQUFyQjtBQUVBQSxRQUFBQSxXQUFXLENBQUNHLFdBQVosQ0FBeUIsQ0FBQyxHQUExQixFQUErQixDQUFDLEdBQWhDO0FBRUgsT0FiRDtBQWNQLEtBbEJELEVBa0JFLElBbEJGLEVBRE0sQ0FvQk47QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUgsR0FwREk7QUFxRExDLEVBQUFBLEtBckRLLG1CQXFESSxDQUVSLENBdkRJLENBeURMOztBQXpESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHQpe1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgQ2FudmFzTm9kZSA9IGNjLmZpbmQoICdtYXNrJyApO1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiZGlhbG9nXCIsIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UsIHByZWZhYikge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCBlcnJvck1lc3NhZ2UgKSB7IGNjLmxvZyggJ+i8ieWFpVByZWZhYuWkseaVlywg5Y6f5ZugOicgKyBlcnJvck1lc3NhZ2UgKTsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmKCAhKCBwcmVmYWIgaW5zdGFuY2VvZiBjYy5QcmVmYWIgKSApIHsgY2MubG9nKCAn5L2g6LyJ5YWl55qE5LiN5pivUHJlZmFiLCDkvaDlgZrkuobku4Dpurzkuos/JyApOyByZXR1cm47IH0gLy/pgJnlgIvmmK/lnovliKXnmoTmqqLmn6VcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8v5o6l6JGX77yM5oiR5YCR5bCx5Y+v5Lul6YCy6KGM5a+m5L6L5YyW5LqGXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdNeVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKCBwcmVmYWIgKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy/miJHlgJHlhYjlsIfpgJnlgIvlu7rnq4vlh7rkvobnmoRQcmVmYWLliqDlhaXnlavluIPoo6FcbiAgICAgICAgICAgICAgICAgICAgQ2FudmFzTm9kZS5hZGRDaGlsZCggbmV3TXlQcmVmYWIgKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdNeVByZWZhYi5zZXRQb3NpdGlvbiggLTQwMCwgLTI1MCApO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sdGhpcyk7XG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLFxuICAgICAgICAvLyAgICAgZnVuY3Rpb24odCl7Y29uc29sZS5sb2coXCJjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFIFwiKX0sdGhpcyk7XG4gICAgICAgICAgICAgXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICAgIC8vICAgICBmdW5jdGlvbih0KXtjb25zb2xlLmxvZyhcImNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCBcIil9LHRoaXMpO1xuICAgICAgICAgICAgIFxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLFxuICAgICAgICAvLyAgICAgZnVuY3Rpb24odCl7Y29uc29sZS5sb2coXCJjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwgXCIpfSx0aGlzKTtcblxuICAgIH0sXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=