
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/closeDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19d72LotLJB0oKLOfHxA0Uf', 'closeDialog');
// script/closeDialog.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
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
    dialogBG: cc.Sprite,
    close: cc.Sprite,
    message: cc.Label
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var dialog = this.node;
    this.close.node.on(cc.Node.EventType.TOUCH_START, function (t) {
      dialog.active ? dialog.active = false : null;
    }, this);
  },
  init: function init(data) {
    this.message.string = data.message;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvY2xvc2VEaWFsb2cuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkaWFsb2dCRyIsIlNwcml0ZSIsImNsb3NlIiwibWVzc2FnZSIsIkxhYmVsIiwib25Mb2FkIiwiZGlhbG9nIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidCIsImFjdGl2ZSIsImluaXQiLCJkYXRhIiwic3RyaW5nIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxJQUFBQSxRQUFRLEVBQUdKLEVBQUUsQ0FBQ0ssTUFqQk47QUFrQlJDLElBQUFBLEtBQUssRUFBR04sRUFBRSxDQUFDSyxNQWxCSDtBQW1CUkUsSUFBQUEsT0FBTyxFQUFHUCxFQUFFLENBQUNRO0FBbkJMLEdBSFA7QUF5Qkw7QUFFQUMsRUFBQUEsTUEzQkssb0JBMkJLO0FBQ1AsUUFBSUMsTUFBTSxHQUFJLEtBQUtDLElBQW5CO0FBRUEsU0FBS0wsS0FBTCxDQUFXSyxJQUFYLENBQWdCQyxFQUFoQixDQUFtQlosRUFBRSxDQUFDYSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQXJDLEVBQ0MsVUFBU0MsQ0FBVCxFQUFXO0FBQ1BOLE1BQUFBLE1BQU0sQ0FBQ08sTUFBUCxHQUFnQlAsTUFBTSxDQUFDTyxNQUFQLEdBQWdCLEtBQWhDLEdBQXdDLElBQXhDO0FBQ0YsS0FISCxFQUdJLElBSEo7QUFJRixHQWxDSTtBQW9DTEMsRUFBQUEsSUFBSSxFQUFFLGNBQVVDLElBQVYsRUFBZ0I7QUFDbEIsU0FBS1osT0FBTCxDQUFhYSxNQUFiLEdBQXNCRCxJQUFJLENBQUNaLE9BQTNCO0FBQ0gsR0F0Q0k7QUF3Q0xjLEVBQUFBLEtBeENLLG1CQXdDSSxDQUVSLENBMUNJLENBNENMOztBQTVDSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gYmFyOiB7XG4gICAgICAgIC8vICAgICBnZXQgKCkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9LFxuXG4gICAgICAgIGRpYWxvZ0JHIDogY2MuU3ByaXRlLFxuICAgICAgICBjbG9zZSA6IGNjLlNwcml0ZSxcbiAgICAgICAgbWVzc2FnZSA6IGNjLkxhYmVsLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgdmFyIGRpYWxvZyA9ICB0aGlzLm5vZGU7XG4gICAgICAgXG4gICAgICAgdGhpcy5jbG9zZS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULFxuICAgICAgICBmdW5jdGlvbih0KXtcbiAgICAgICAgICAgIGRpYWxvZy5hY3RpdmUgPyBkaWFsb2cuYWN0aXZlID0gZmFsc2UgOiBudWxsO1xuICAgICAgICAgfSx0aGlzKTtcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKGRhdGEpIHsgXG4gICAgICAgIHRoaXMubWVzc2FnZS5zdHJpbmcgPSBkYXRhLm1lc3NhZ2U7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19